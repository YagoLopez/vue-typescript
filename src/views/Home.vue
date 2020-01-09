<style scoped>
  h1 {
    text-shadow: 3px 1px grey;
    color: darkgray;
  }
  .app-content {
    padding-top: 30px;
  }
  .json-block {
    text-align: left;
    margin: 20px 100px;
  }
</style>

<template>
  <div class="app-content">
    <h1>{{ title }}</h1>
    <game
      ref="game"
      :dices-collection="dicesCollection"
      :dices-list="dicesList"
      @onRollDices="onRollDices"
      @onAddDice="onAddDice"
      @onRemoveDice="onRemoveDice"
      @onRemoveAllDices="onRemoveAllDices"
      @onSaveDices="onSaveDices"
      @onLoadDices="onLoadDices"
      max-dices="2"
    />

    <!--todo: extract inline styles-->
    <!--todo: make invisible or disable the btn when clicked-->
    <!--todo: use vuetify cards-->
    <div v-for="(dice, index) in dicesList" :key="index">
      <div>
        <span style="font-weight: bolder; color: cornflowerblue">Dice Name: </span><span style="padding: 10px">{{dice.name}}</span>
        <v-btn large @click="onAddDice2(dice)" style="padding-left: 10px">Add to Game</v-btn>
      </div>
    </div>

    <hr>
    <v-btn large @click="onCreateDice2">
      Create Dice
    </v-btn>

<!--    todo: make visible/invisible debug info-->
    <div>
      <hr>
      <h4>DEBUG INFO</h4>
      <h5>Dices Data</h5>
      <vue-json-pretty :data="dicesList" class="json-block"/>
      <hr>
      <h5>Dices Ids</h5>
      <vue-json-pretty :data="dicesCollection" class="json-block"/>
      <hr>
    </div>

  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import VueJsonPretty from 'vue-json-pretty'
import Game from '@/views/Game.vue'
import { IDice } from '@/components/models/IDice'
import { GAME_NAME, generateId, LOCAL_STORAGE_DICES_KEY } from '@/components/constants'

@Component({
  components: { Game, VueJsonPretty }
})
export default class Home extends Vue {
  dicesCollection: string[] = []
  dicesList: IDice[] = [
    {
      id: generateId(),
      name: 'dice1',
      sides: ['1', '2', '3'],
      current: '0'
    },
    {
      id: generateId(),
      name: 'dice2',
      sides: ['uno', 'dos', 'tres', 'cuatro'],
      current: '0'
    },
  ]
  title = GAME_NAME

  // todo: can be removed
  onAddDice () {
    // if (this.dicesCollection.length >= parseInt((this.$refs.game as any).maxDices)) {
    //   alert('Maximum number of dices reached')
    //   return
    // }
    //
    // const diceNumber = this.dicesCollection.length + 1
    //
    // const newDice: IDice = {
    //   sides: [],
    //   name: `dice${diceNumber}`,
    //   current: '0'
    // }
    //
    // this.dicesCollection.push(newDice)
  }

  onRemoveDice () {
    this.dicesCollection.pop()
  }

  onRemoveAllDices () {
    if (window.confirm('Confirm: Remove All Dices from memory and disk')) {
      this.dicesCollection = []
      try {
        localStorage.removeItem(LOCAL_STORAGE_DICES_KEY)
      } catch (e) {
        console.error(e)
      }
    }
  }

  onSaveDices () {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_DICES_KEY, JSON.stringify(this.dicesCollection))
      window.alert('Saving dices to disk...')
    } catch (e) {
      window.alert('Error: dices could not be saved to disk')
      console.error(e)
    }
  }

  onLoadDices () {
    try {
      const serializedDices = window.localStorage.getItem(LOCAL_STORAGE_DICES_KEY)
      if (serializedDices && serializedDices !== '') {
        this.dicesCollection = JSON.parse(serializedDices)
      }
    } catch (e) {
      window.alert('Error: dices could not be loaded from disk')
      console.error(e)
    }
  }

  // todo: remove diceIndex and newDiceValue
  onRollDices (eventData: {diceIndex: number, newDiceValue: string, dice: any}) {
    // const diceIndex = eventData.diceIndex
    // const currentDice = eventData.dice
    // currentDice.isRolling = true
    // setTimeout(function () {
    //   currentDice.isRolling = false
    //   currentDice.currentValue = eventData.newDiceValue
    // }, (diceIndex + 1) * 1000)
  }

  // onCreateDice () {
  //   const newDice: IDice = {
  //     sides: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'],
  //     name: `dice${this.dicesCollection.length + 1}`,
  //     current: '0'
  //   }
  //   this.dicesCollection.push(newDice)
  //   console.warn(this.dicesCollection)
  // }

  createDiceName (): string | null {
    return prompt('Enter dice name', 'aaaa')
  }

  createFaceValue (): string | null {
    return prompt('Enter face value or cancel to stop entering values: ')
  }

  onCreateSidesCollection (dice: IDice) {
    let faceValue: string | null = ''
    while (faceValue !== null) {
      faceValue = this.createFaceValue()
      faceValue && dice.sides.push(faceValue)
    }
  }

  onCreateDice2 (): IDice | void {
    const dice: IDice = { id: generateId(), sides: [], name: '', current: '0' }
    const diceName = this.createDiceName()
    if (diceName) {
      dice.name = diceName
      const result = this.onCreateSidesCollection(dice)
      this.dicesList.push(dice)
      console.warn(this.dicesList)
      return result
    }
  }

  onAddDice2 (dice: IDice) {
    // debugger
    this.dicesCollection.push(dice.id)
    console.warn(this.dicesCollection)
  }
}

</script>
