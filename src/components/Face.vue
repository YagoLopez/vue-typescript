<!-- Styles ----------------------------------------------------------------------------------------------------------->

<style scoped>
  .first-face {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second-face {
    display: flex;
    justify-content: space-between;
  }

  .second-face .pip:nth-of-type(2) {
    align-self: flex-end;
  }

  .third-face {
    display: flex;
    justify-content: space-between;
  }

  .third-face .pip:nth-of-type(2) {
    align-self: center;
  }

  .third-face .pip:nth-of-type(3) {
    align-self: flex-end;
  }

  .fourth-face, .sixth-face {
    display: flex;
    justify-content: space-between;
  }

  .fourth-face .column, .sixth-face .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fifth-face {
    display: flex;
    justify-content: space-between;
  }

  .fifth-face .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fifth-face .column:nth-of-type(2) {
    justify-content: center;
  }

  /* OTHER STYLES */

  [class$="face"] {
    margin: 16px;
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
</style>

<!-- template --------------------------------------------------------------------------------------------------------->

<template>
  <div id="face-container">
    <div class="first-face" v-if="number === '1'">
      <span class="pip"/>
    </div>
    <div class="second-face" v-if="number === '2'">
      <span class="pip"/>
      <span class="pip"/>
    </div>
    <div class="third-face" v-if="number === '3'">
      <span class="pip"/>
      <span class="pip"/>
      <span class="pip"/>
    </div>
    <div class="fourth-face" v-if="number === '4'">
      <div class="column">
        <span class="pip"/>
        <span class="pip"/>
      </div>
      <div class="column">
        <span class="pip"/>
        <span class="pip"/>
      </div>
    </div>
    <div class="fifth-face" v-if="number === '5'">
      <div class="column">
        <span class="pip"/>
        <span class="pip"/>
      </div>
      <div class="column">
        <span class="pip"/>
      </div>
      <div class="column">
        <span class="pip"/>
        <span class="pip"/>
      </div>
    </div>
    <div class="sixth-face" v-if="number === '6'">
      <div class="column">
        <span class="pip"/>
        <span class="pip"/>
        <span class="pip"/>
      </div>
      <div class="column">
        <span class="pip"/>
        <span class="pip"/>
        <span class="pip"/>
      </div>
    </div>
    <div class="error" v-if="!isValidNumber">
      INVALID FACE NUMBER
    </div>
  </div>
</template>

<!-- Controller ------------------------------------------------------------------------------------------------------->

<script lang="ts">

import { FACE_NUMBERS } from '@/components/constants.ts'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Face extends Vue {
  @Prop() number!: string

  get isValidNumber (): boolean {
    let result = false
    if (this.number) {
      result = FACE_NUMBERS.includes(this.number)
    }
    return result
  }
}

</script>

<!-- End Controller --------------------------------------------------------------------------------------------------->
