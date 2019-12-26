<style scoped>
  h1 {
    text-shadow: 3px 1px grey;
    color: darkgray;
  }
</style>

<template>
  <div>
    <h1>The Settlers Of Catan</h1>
    <dices-collection
      :dices-collection="dicesCollection"
      @onAddDice="onAddDice"
      @onRollDices="onRollDices"
      @onRemoveDice="onRemoveDice"
      @onRemoveAllDices="onRemoveAllDices"
      @onSaveDices="onSaveDices"
      @onLoadDices="onLoadDices"
    />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import DicesCollection from '@/views/DicesCollection.vue'
import { FACE_NUMBERS, getRandomNumbersBetween, LOCAL_STORAGE_DICES_KEY } from '@/components/constants'
import { dice } from '@/components/models/Dice'

@Component({
  components: { DicesCollection }
})
export default class Home extends Vue {
  dicesCollection: dice[] = []

  onAddDice () {
    const diceNumber = this.dicesCollection.length + 1
    const newDice: dice = {
      sides: FACE_NUMBERS,
      name: `dice${diceNumber}`,
      current: '1'
    }
    this.dicesCollection.push(newDice)
  }

  onRollDices () {
    for (let i = 0; i < this.dicesCollection.length; i++) {
      this.dicesCollection[i].current = getRandomNumbersBetween(6, 1).toString(10)
    }
  }

  onRemoveDice () {
    this.dicesCollection.pop()
  }

  onRemoveAllDices () {
    if (window.confirm('Confirm: Remove All Dices')) {
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
}

</script>
