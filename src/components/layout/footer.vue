<template>
  <div>
    <v-footer class="light-blue lighten-5">
      <v-container>
        <v-row>
          <v-col>
            <div class="d-flex text-caption justify-space-between flex-column flex-md-row align-md-center">
              <div class="d-flex flex-md-grow-1 justify-space-between">
                <div class="d-inline-flex flex-md-grow-1 indigo--text text--darken-4 font-weight-medium">
                  SIGNED IN AS: NOT LOGGED IN (DESKTOP)
                </div>
                <div class="d-inline-flex flex-md-grow-1 indigo--text text--darken-4 font-weight-medium text-right text-md-center">
                  COPYRIGHT 2022 COGITATIONS, LLC
                </div>
              </div>
              <div class="d-flex flex-column text-center text-md-right">
                <div
                  class="indigo--text text--darken-4 font-weight-medium"
                  text
                  rounded
                >
                  REPORT BUGS AND REQUEST FEATURES
                </div>
                <div
                  class="indigo--text text--darken-4 font-weight-medium"
                  text
                  rounded
                >
                  TERMS AND CONDITIONS
                </div>
                <div
                  class="indigo--text text--darken-4 font-weight-medium"
                  text
                  rounded
                >
                  PRIVACY PLICY
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container> 
    </v-footer>
  </div>
</template>

<script>
  export default {
    name:"FrontFooter"
  }
  </script>