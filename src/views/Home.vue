<style scoped>
  h2 {
    color: darkgrey
  }
  .app-content {
    padding-top: 30px;
  }
  .json-block {
    text-align: left;
    margin: 20px 100px;
  }
  .items-list {
    height: 60px;
  }
  .item {
    width: 100px;
    display: inline-block;
    font-weight: bolder;
  }
  .dice-name-title {
    font-weight: bolder;
    color: cornflowerblue
  }
  .game-title-input {
    width: 75%;
    margin: auto;
    font-size: xx-large;
  }
  .btn {
    padding-left: 10px;
  }
  .card {
    margin: 15px auto;
  }
  .debug-info {
    background-color: ghostwhite;
    width: 90%;
    margin: 20px auto;
  }
  .v-input input {
    text-align: center;
    color: cornflowerblue !important;
    font-size: xx-large;
  }
</style>

<template>
  <div class="app-content">
    <v-text-field label="Game Name" v-model="game.title" :rules="rules" class="game-title-input"/>
    <game
      ref="game"
      :dices-collection="game.diceIds"
      :dices-list="dices"
      @onRemoveDice="onRemoveDice"
      @onRemoveAllDices="onRemoveAllDices"
      @onSaveGame="onSaveGame"
      @onLoadGames="onLoadGames"
      max-dices="2"
    />

    <v-card class="mx-auto card" max-width="75%">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline"><h2>Dices</h2></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <hr>
      <v-card-text>
        <div v-for="(dice, index) in dices" :key="`${dice.name}${index}`" class="items-list">
          <span class="dice-name-title">Dice Name: </span><span class="item">{{ dice.name }}</span>
          <v-btn large @click="onAddDiceToGame(dice)" class="btn">Add to Game</v-btn>
        </div>
      </v-card-text>
      <hr>
      <v-card-actions>
        <v-btn large @click="onCreateDice" style="margin: auto">Create Dice</v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-if="this.games.length > 0" class="mx-auto card" max-width="75%">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline"><h2>Saved Games</h2></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <hr>
      <v-card-text>
        <div v-for="(game, index) in games" :key="index" class="items-list">
          <span class="dice-name-title">Game Name: </span><span class="item">{{ game.title }}</span>
          <v-btn large @click="onLoadGame(index)" class="btn">Load Game</v-btn>
        </div>
      </v-card-text>
    </v-card>
    <!--todo: make invisible or disable the btn when clicked-->

    <!--todo: make visible/invisible debug info-->
    <div class="debug-info">
      <hr>
      <h4>DEBUG INFO</h4>
      <h5>Dices</h5>
      <vue-json-pretty :data="dices" class="json-block"/>
      <hr>
      <h5>Current Game</h5>
      <vue-json-pretty :data="game" class="json-block"/>
      <hr>
      <h5>Saved Games</h5>
      <vue-json-pretty :data="games" class="json-block"/>
      <hr>
    </div>

  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import VueJsonPretty from 'vue-json-pretty'
import Game from '@/views/Game.vue'
import { IDice } from '@/components/models/IDice'
import { generateId, LOCAL_STORAGE_GAMES_KEY } from '@/components/constants'

@Component({
  components: { Game, VueJsonPretty }
})
export default class Home extends Vue {
  dices = [
    { name: 'six sided', sides: ['1', '2', '3', '4', '5', '6'] },
    { name: 'coin', sides: ['head', 'tails'] }
  ]

  game = {
    title: '',
    diceIds: new Array(0)
  }

  games = []

  rules = [(value: string) => !!value || 'Required.']

  onRemoveDice () {
    this.game.diceIds.pop()
  }

  onRemoveAllDices () {
    this.game.diceIds = []
  }

  onRemoveAllGames () {
    if (window.confirm('Confirm: Remove All Dices from memory and disk')) {
      this.onRemoveAllDices()
      try {
        localStorage.removeItem(LOCAL_STORAGE_GAMES_KEY)
      } catch (e) {
        console.error(e)
      }
    }
  }

  onSaveGame () {
    if (!this.game.title) {
      alert('Game name is mandatory to save a game')
      return
    }
    let currentGame
    let games = []
    try {
      const serializedGames = window.localStorage.getItem(LOCAL_STORAGE_GAMES_KEY)
      if (serializedGames && serializedGames !== '') {
        games = JSON.parse(serializedGames)
      }
      currentGame = { ...this.game, diceTypes: this.dices }
      games.push(currentGame)
      window.localStorage.setItem(LOCAL_STORAGE_GAMES_KEY, JSON.stringify(games))
      this.game.title = ''
      this.onLoadGames()
      window.alert('Saving dices to disk...')
    } catch (e) {
      window.alert('Error: dices could not be saved to disk')
      console.error(e)
    }
  }

  onLoadGames () {
    try {
      const serializedGames = window.localStorage.getItem(LOCAL_STORAGE_GAMES_KEY)
      if (serializedGames && serializedGames !== '') {
        this.games = JSON.parse(serializedGames)
      }
    } catch (e) {
      window.alert('Error: dices could not be loaded from disk')
      console.error(e)
    }
  }

  onLoadGame (index: number) {
    const { title, diceIds, diceTypes } = this.games[index]
    this.dices = diceTypes
    this.game.title = title
    this.game.diceIds = diceIds
  }

  createDiceName (): string | null {
    return prompt('Enter dice name', 'dice1')
  }

  createSideValue (): string | null {
    return prompt('Enter face value or cancel to stop entering values: ')
  }

  onCreateSidesCollection (diceName: string, dices: any) {
    if (diceName) {
      const newDice = { name: diceName, sides: new Array(0) }
      let newSideValue
      while (newSideValue !== null) {
        newSideValue = this.createSideValue()
        newSideValue && newDice.sides.push(newSideValue)
      }
      (newDice.sides.length > 0) && dices.push(newDice)
    }
  }

  onCreateDice () : IDice | void {
    const diceName = this.createDiceName()
    this.onCreateSidesCollection(diceName!, this.dices)
  }

  onAddDiceToGame (dice: any) {
    this.game.diceIds.push(dice.name)
  }
}

</script>
