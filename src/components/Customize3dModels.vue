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
            :to="{name:'CustomizeModels'}"
            name="CustomizeModelsPage"
            target="_blank"
            >
            Customize 3D Models
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
  name:"Customize3DModels"
}
</script>