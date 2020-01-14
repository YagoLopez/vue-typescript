<style scoped>
  .v-btn {
    margin: 5px;
  }
  .info-msg {
    background: white;
    color: cornflowerblue;
    font-weight: bolder;
    padding: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: cornflowerblue;
    border-radius: 5px;
    margin: 30px;
  }

  .dice-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .dices-collection-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 75%;
    overflow: auto;
    background-image: url("../assets/2.jpg");
    background-color: darkgreen;
    border-radius: 12px;
    margin: 50px auto;

    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>

<template>
  <div>
    <div class="dices-collection-container">
      <div class="info-msg" v-if="!isThereDicesInMemory">
        Please add a new dice using the button
      </div>
      <div v-else v-for="(diceId, index) in dicesCollection" :key="index" class="dice-container">
        <Dice :ref="index" :dice="selectDiceTypeByName(diceId)"/>
      </div>
    </div>
    <div>
      <v-btn v-if="isThereDicesInMemory" large @click="onRollDices">
        <v-icon>mdi-dice-multiple-outline</v-icon>Roll dice/s
      </v-btn>
      <v-btn large v-if="isThereDicesInMemory" @click="onRemoveDice">
        Remove Dice
      </v-btn>
      <v-btn large v-if="isThereDicesInMemory" @click="onSaveGame">
        Save Game
      </v-btn>
      <v-btn large v-if="isThereDicesInMemory" @click="onRemoveAllDices">
        Remove All Dices
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import Dice from '@/components/Dice.vue'
import { IDice } from '@/components/models/IDice'
import { GAME_NAME, EVENT_NAME, LOCAL_STORAGE_GAMES_KEY, getRandomNumbersBetween } from '@/components/constants'
import { IDiceComponent } from '@/components/IDiceComponent'

@Component({
  components: { Dice }
})
export default class Game extends Vue {
  name = GAME_NAME
  @Prop() maxDices!: number
  @Prop({ default: [] }) dicesCollection!: string[]
  @Prop({ default: [] }) dicesList!: IDice[]

  get isThereDicesInMemory () {
    return this.dicesCollection.length > 0
  }

  // todo: review this
  get isThereDicesInLocalStorage () {
    const serializedDices = window.localStorage.getItem(LOCAL_STORAGE_GAMES_KEY)
    return serializedDices && serializedDices !== ''
  }

  selectDiceTypeByName (name: string) {
    const diceType: any = this.dicesList.filter(dice => dice.name === name)[0]
    return { ...diceType, current: '0', isRolling: false }
  }

  mounted () {
    if (this.isThereDicesInLocalStorage) {
      this.$emit(EVENT_NAME.onLoadGames)
    }
  }

  @Emit(EVENT_NAME.onAddDice)
  onAddDice () {}

  @Emit(EVENT_NAME.onRemoveDice)
  onRemoveDice () {}

  onRollDices () {
    for (let i = 0; i < this.dicesCollection.length; i++) {
      const currentDiceComponent: IDiceComponent = (this.$refs[i] as any)[0]
      currentDiceComponent.isRolling = true
      const newSideIndex: string = getRandomNumbersBetween(currentDiceComponent.dice.sides.length, 0).toString(10)
      setTimeout(() => {
        currentDiceComponent.currentValue = newSideIndex
        currentDiceComponent.isRolling = false
      }, (i + 1) * 1000)
    }
  }

  @Emit(EVENT_NAME.onRemoveAllDices)
  onRemoveAllDices () {}

  @Emit(EVENT_NAME.onSaveGame)
  onSaveGame () {
  }
}

</script>
