<template>
  <div class="fill-height">
    <v-container fluid class="fill-height text-center">
      <v-row>
        <v-col>
          <v-btn
                rounded
                color="primary"
                dark
                class="mr-1 mr-sm-5"
                :x-large="$vuetify.breakpoint.lgAndUp"
                :large="$vuetify.breakpoint.smAndUp"
                :small="$vuetify.breakpoint.xs"
                href="https://models.makewithtech.com/account/"
                name="BecomeCreatorPage"
                target="_blank"
              >
                Become A Creator
              </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name:"BecomeACreator"
}
</script>