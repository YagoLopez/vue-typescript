<style scoped>
  .img-about {
    border-radius: 5px;
    box-shadow: 5px 5px 5px grey;
    width: 100%;
    height: auto;
    max-width: 400px;
  }
  .list-container {
    width: 100%;
    height: auto;
    max-width: 470px;
    margin: auto !important;
  }
  h3 {
    color: grey;
  }
  .subheader {
    color: #42b983;
  }
</style>

<template>
  <div>
    <img class="img-about" alt="Settlers Of Catan Logo" src="../assets/soc3.jpg">
    <h3>Developed by Yago López</h3>
     <v-list class="list-container" disabled>
        <v-subheader class="subheader">FEATURES</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arrow-right-bold-box</v-icon> Use of Vue Class-Component decorators
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arrow-right-bold-box</v-icon> Use of Vue Property decorators
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arrow-right-bold-box</v-icon> Use of Vue Router
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arrow-right-bold-box</v-icon> Use of Vuetify UI Component Library for Material Design
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arrow-right-bold-box</v-icon> Use of Vue SCFs (Single Component Files)
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </div>
</template>
