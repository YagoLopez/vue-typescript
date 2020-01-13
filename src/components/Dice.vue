<style scoped>
  .item {
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

  .first-face {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* OTHER STYLES */

  [class$="face"] {
    margin: 30px;
    padding: 4px;

    background-color: #e7e7e7;
    width: 104px;
    height: 104px;
    object-fit: contain;

    box-shadow:
      inset 0 5px white,
      inset 0 -5px #bbb,
      inset 5px 0 #d7d7d7,
      inset -5px 0 #d7d7d7;

    border-radius: 10%;
  }

  .pip {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 4px;

    background-color: #333;
    box-shadow: inset 0 3px #111, inset 0 -3px #555;
  }

  .error {
    color: red;
    font-weight: bolder;
    border-color: red;
    border-style: solid;
    padding: 20px;
  }

  .rotation {
    -webkit-animation:spin .01s linear infinite;
    -moz-animation:spin .01s linear infinite;
    animation:spin .01s linear infinite;
  }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); }
  }

  .face-number {
    font-size: 25px;
    font-weight: bold;
  }
</style>

<template>
  <div>
    <div id="face-container" :class="{ rotation: isRolling }">
      <div class="first-face">
        <span class="face-number">{{ sideValue }}</span>
      </div>
    </div>
    <div class="item">{{ dice.name }}</div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import { IDice } from '@/components/models/IDice'

@Component
export default class Dice extends Vue {
  @Prop() dice!: IDice
  isRolling = false
  currentValue: string

  constructor () {
    super()
    this.currentValue = this.dice.current
  }

  get sideValue () {
    const currentSideIndex = parseInt(this.currentValue)
    return this.dice.sides[currentSideIndex]
  }
}

</script>
