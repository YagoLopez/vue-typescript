<style scoped>
  .info {
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

  #dices-collection-container {
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
    <div id="dices-collection-container">
      <div class="info" v-if="!isThereDicesInMemory">
        Please add a new dice using the button
      </div>
      <div v-for="(dice, index) in dicesCollection" :key="index" class="dice-container">
        <Dice :name="dice.name" :current="dice.current" />
      </div>
    </div>
    <div>
      <button v-if="isThereDicesInMemory" @click="onRollDices">Roll Dice/s</button>
      <button @click="onAddDice">Add Dice</button>
      <button v-if="isThereDicesInMemory" @click="onRemoveDice">Remove Dice</button>
      <button v-if="isThereDicesInMemory" @click="onSaveDices">Save Dices</button>
      <button v-if="isThereDicesInMemory" @click="onRemoveAllDices">Remove All Dices</button>
    </div>
    <audio id="myAudio" ref="rollDicesAudio">
      <source src="../assets/jump_09.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import Dice from '@/components/Dice.vue'
import { DICES_EVENT_NAMES, LOCAL_STORAGE_DICES_KEY } from '@/components/constants'

@Component({
  components: { Dice }
})
export default class DicesCollection extends Vue {
  name = 'Settlers of Catan'
  @Prop({ default: [] }) dicesCollection!: Dice[]

  get isThereDicesInMemory () {
    return this.dicesCollection.length > 0
  }

  isThereDicesInLocalStorage () {
    const serializedDices = window.localStorage.getItem(LOCAL_STORAGE_DICES_KEY)
    return serializedDices && serializedDices !== ''
  }

  mounted () {
    if (this.isThereDicesInLocalStorage) {
      this.$emit(DICES_EVENT_NAMES.onLoadDices)
    }
  }

  onAddDice () {
    this.$emit(DICES_EVENT_NAMES.onAddDice)
  }

  onRemoveDice () {
    this.$emit(DICES_EVENT_NAMES.onRemoveDice)
  }

  onRollDices () {
    this.$emit(DICES_EVENT_NAMES.onRollDices)
    const audioElement = this.$refs.rollDicesAudio as HTMLAudioElement
    audioElement.play()
  }

  onRemoveAllDices () {
    this.$emit(DICES_EVENT_NAMES.onRemoveAllDices)
  }

  onSaveDices () {
    this.$emit(DICES_EVENT_NAMES.onSaveDices)
  }

  onLoadDices () {
    this.$emit(DICES_EVENT_NAMES.onLoadDices)
  }
}

</script>
