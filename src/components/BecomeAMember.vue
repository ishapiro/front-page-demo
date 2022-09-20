<template>
  <div class="fill-height">
    <v-container fluid class="fill-height text-center">
      <v-row>
        <v-col>
          <v-btn
            rounded
            outlined
            color="secondary"
            dark
            :x-large="$vuetify.breakpoint.lgAndUp"
            :large="$vuetify.breakpoint.smAndUp"
            :small="$vuetify.breakpoint.xs"
            href="https://models.makewithtech.com/account/"
            name="BecomeMemberPage"
            target="_blank"
          >
            Become A Member
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
</template>
<script>
export default {
  name:"BecomeAMember"
}
</script>