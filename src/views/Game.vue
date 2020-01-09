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
        <Dice :ref="diceId" :dice="getDiceById(diceId)"/>
      </div>
    </div>
    <div>
<!--
      <v-btn large @click="onAddDice">
        Add Dice
      </v-btn>
-->
      <v-btn v-if="isThereDicesInMemory" large @click="onRollDices">
        <v-icon>mdi-dice-multiple-outline</v-icon>Roll dice/s
      </v-btn>
      <v-btn large v-if="isThereDicesInMemory" @click="onRemoveDice">
        Remove Dice
      </v-btn>
      <v-btn large v-if="isThereDicesInMemory" @click="onSaveDices">
        Save Dices
      </v-btn>
      <v-btn large v-if="isThereDicesInMemory" @click="onRemoveAllDices">
        Remove All Dices
      </v-btn>
    </div>
    <audio ref="rollDicesAudio">
      <source src="../assets/jump_09.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script lang="ts">

import VueComponent from 'vue'
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import Dice from '@/components/Dice.vue'
import { IDice } from '@/components/models/IDice'
import { GAME_NAME, EVENT_NAME, LOCAL_STORAGE_DICES_KEY, getRandomNumbersBetween } from '@/components/constants'

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

  get isThereDicesInLocalStorage () {
    const serializedDices = window.localStorage.getItem(LOCAL_STORAGE_DICES_KEY)
    return serializedDices && serializedDices !== ''
  }

  // todo: review: es posible que no se necesite
  getDiceSides (index: number) {
    return this.dicesList[index].sides
  }

  // todo: review: es posible que no se necesite
  getDiceByIndex (index: number) {
    return this.dicesList[index]
  }

  getDiceById (id: string) {
    return this.dicesList.filter((dice) => dice.id === id)[0]
  }

  mounted () {
    if (this.isThereDicesInLocalStorage) {
      this.$emit(EVENT_NAME.onLoadDices)
    }
  }

  @Emit(EVENT_NAME.onAddDice)
  onAddDice () {}

  @Emit(EVENT_NAME.onRemoveDice)
  onRemoveDice () {}

  onRollDices () {
    const audioElement = this.$refs.rollDicesAudio as HTMLAudioElement
    // audioElement.play()
    const gameComponent: Game = this
    for (let i = 0; i < this.dicesCollection.length; i++) {
      const currentDiceId = this.dicesCollection[i]
      // todo: review types
      const currentDiceComponent = this.$refs[currentDiceId][0]
      currentDiceComponent.isRolling = true
      const newSideIndex: string = getRandomNumbersBetween(currentDiceComponent.dice.sides.length, 0).toString(10)
      setTimeout(() => {
        currentDiceComponent.isRolling = false
        currentDiceComponent.currentValue = newSideIndex
      }, (i + 1) * 1000)
    }
  }

/*
  onRollDices () {
    // debugger
    // const audioElement = this.$refs.rollDicesAudio as HTMLAudioElement
    // audioElement.play()
    // todo: review any type
    const gameComponent: Game = this
    for (let i = 0; i < this.dicesCollection.length; i++) {
      // debugger
      const currentDiceName = `dice${i + 1}`
      const currentDice = (gameComponent.$refs[currentDiceName] as Dice[])[0]
      // Number 6 when dice is rolling for better visual aspect
      // currentDice.currentValue = '6'
      // currentDice.isRolling = true
      const newDiceValue: string = getRandomNumbersBetween(6, 1).toString(10)
      // setTimeout(function () {
      //   currentDice.isRolling = false
      //   currentDice.currentValue = newDiceValue
        gameComponent.$emit('onRollDices', { diceIndex: i, newDiceValue: newDiceValue, dice: currentDice })
        // audioElement.play()
      // }, (i + 1) * 1000)
    }
  }
*/

  @Emit(EVENT_NAME.onRemoveAllDices)
  onRemoveAllDices () {}

  @Emit(EVENT_NAME.onSaveDices)
  onSaveDices () {
    for (let i = 0; i < this.dicesCollection.length; i++) {
      const currentDiceName: string = this.dicesCollection[i].name
      const currentDice = (this.$refs[currentDiceName] as Dice[])[0]
      this.dicesCollection[i].current = currentDice.currentValue
    }
  }

  @Emit(EVENT_NAME.onLoadDices)
  onLoadDices () {}
}

</script>