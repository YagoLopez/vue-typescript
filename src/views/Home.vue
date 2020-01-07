<style scoped>
  h1 {
    text-shadow: 3px 1px grey;
    color: darkgray;
  }
  .app-content {
    padding-top: 30px;
  }
</style>

<template>
  <div class="app-content">
    <h1>{{ title }}</h1>
    <game
      ref="game"
      :dices-collection="dicesCollection"
      @onAddDice="onAddDice"
      @onRemoveDice="onRemoveDice"
      @onRemoveAllDices="onRemoveAllDices"
      @onSaveDices="onSaveDices"
      @onLoadDices="onLoadDices"
      max-dices="7"
    />
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import Game from '@/views/Game.vue'
import { IDice } from '@/components/models/IDice'
import { FACE_NUMBERS, GAME_NAME, LOCAL_STORAGE_DICES_KEY } from '@/components/constants'

@Component({
  components: { Game }
})
export default class Home extends Vue {
  dicesCollection: IDice[] = []
  title = GAME_NAME

  onAddDice () {
    if (this.dicesCollection.length >= parseInt((this.$refs.game as any).maxDices)) {
      alert('Maximum number of dices reached')
      return
    }

    const diceNumber = this.dicesCollection.length + 1
    const newDice: IDice = {
      sides: FACE_NUMBERS,
      name: `dice${diceNumber}`,
      current: '1'
    }
    this.dicesCollection.push(newDice)
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
}

</script>
