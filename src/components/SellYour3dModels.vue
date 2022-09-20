<template>
  <v-container fluid class="fill-height text-center">
      <v-row>
        <v-col>
          <v-btn
          class="px-15 ma-10"
          rounded
          color="primary"
          dark
          :x-large="$vuetify.breakpoint.mdAndUp"
          :small="$vuetify.breakpoint.xsAndUp"
          :to="{name:'SellModels'}"
          name="SellModelsPage"
          target="_blank"
          >
            Sell your 3D Models
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  
</template>
<script>
export default {
  name:"SellModelsPage"
}
</script>