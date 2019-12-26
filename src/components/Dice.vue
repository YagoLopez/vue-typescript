<style scoped>
  .dice-name {
    font-weight: bolder;
    color: white;
    background-color: black;
    text-shadow: 2px 2px black;
    font-size: x-large;
    border-radius: 5px;
    opacity: 75%;
    border-color: white;
    border-style: solid;
    border-width: 2px;
    -webkit-box-shadow: 4px 4px #2e2a2a;
    box-shadow: 4px 4px #2e2a2a;
    margin: 16px;
  }
</style>

<template>
  <div>
    <Face :number="current"/>
    <div class="dice-name">{{name}}</div>
  </div>
</template>

<script lang="ts">

import { FACE_NUMBERS } from '@/components/constants.ts'
import { Component, Vue, Prop } from 'vue-property-decorator'
import Face from '@/components/Face.vue'

@Component({
  components: { Face }
})
export default class Dice extends Vue {
  sides = FACE_NUMBERS
  @Prop() name!: string
  @Prop() current!: string
}

</script>
