<style scoped>

</style>

<template>
  <div><h1>create dices collection component</h1>
    <button @onCreateDice="onCreateDice">create dice</button>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { IDice } from '@/components/models/IDice'

@Component
export default class CreateDicesCollection extends Vue {

  onCreateDice () {
    const newDice: IDice = {
      sides: ['uno', 'dos'],
      name: 'dice1',
      current: '0'
    }
    // this.$route.params = newDice
  }
}

</script>
