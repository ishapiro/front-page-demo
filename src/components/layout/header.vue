<template>
  <div>
    <v-app-bar
      color="info"
      app
      height="100"
    >
      <v-container d-flex align-center>
        <div class="d-flex d-md-none">
          <v-app-bar-nav-icon class="black--text" @click="drawer = true">
            <v-icon
            light
            >
              mdi-text
            </v-icon>
          </v-app-bar-nav-icon>
        </div>
        <v-spacer class="d-flex d-md-none"></v-spacer>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          max-width="100%"
        />
        <v-spacer></v-spacer>

        <div class="d-none d-md-flex">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn plain icon  class="blue--text text--darken-4"
              to="/"
              link
              name="FrontPage"
              >
                <v-icon light v-bind="attrs" v-on="on">mdi-home</v-icon>
              </v-btn>
            </template>
            <span>Home</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                icon
                class="blue--text text--darken-4"
                href="https://youtube.com/c/makewithtech"
                target="_blank"
              >
                <v-icon light v-bind="attrs" v-on="on">mdi-video</v-icon>
              </v-btn>
            </template>
            <span>3d Printing Videos and Tutorials</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                icon
                
                class="blue--text text--darken-4"
              >
                <v-icon light v-bind="attrs" v-on="on">
                  mdi-image-search-outline
                </v-icon>
              </v-btn>
            </template>
            <span>Search Thingiverse</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn plain icon  class="blue--text text--darken-4">
                <v-icon light v-bind="attrs" v-on="on"> mdi-cloud-search </v-icon>
              </v-btn>
            </template>
            <span>Search MakeWithTech Model Templates</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                icon
                
                class="blue--text text--darken-4"
              >
                <v-icon light v-bind="attrs" v-on="on">mdi-upload</v-icon>
              </v-btn>
            </template>
            <span>Test an OpenSCAD Model Template</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn plain icon  class="blue--text text--darken-4">
                <v-icon light v-bind="attrs" v-on="on">
                  mdi-cloud-upload-outline</v-icon
                >
              </v-btn>
            </template>
            <span>Share an OpenSCAD Model Template</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                icon
                
                class="blue--text text--darken-4"
              >
                <v-icon light v-bind="attrs" v-on="on">mdi-timer-sand</v-icon>
              </v-btn>
            </template>
            <span>Processing Queue</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                icon
                
                class="blue--text text--darken-4"
              >
                <v-icon light v-bind="attrs" v-on="on">mdi-tray-full</v-icon>
              </v-btn>
            </template>
            <span>OpenSCAD Model Results</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn plain icon  class="blue--text text--darken-4">
                <v-icon light v-bind="attrs" v-on="on">mdi-account</v-icon>
              </v-btn>
            </template>
            <span>Account (Sign In)</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn plain icon  class="blue--text text--darken-4">
                <v-icon light v-bind="attrs" v-on="on">mdi-information</v-icon>
              </v-btn>
            </template>
            <span>About MakeWithTech</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                icon
                @click="toggleTheme"
                class="blue--text text--darken-4"
              >
                <v-icon light v-bind="attrs" v-on="on">mdi-brightness-6</v-icon>
              </v-btn>
            </template>
            <span>Toggle Light / Dark</span>
          </v-tooltip>
        </div>
        <v-btn
        class="px-sm-15"
        rounded
        color="secondary"
        dark
        :x-large="$vuetify.breakpoint.mdAndUp"
        :small="$vuetify.breakpoint.xsAndUp"
        >
          Log In
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      color="bg_light_blue"
    >
       <v-list class="text-caption">
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-home</v-icon>
              Home
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              href="https://youtube.com/c/makewithtech"
              target="_blank"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-video</v-icon>
              Videos
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-image-search-outline</v-icon>
              Search Thingiverse
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-upload</v-icon>
              Upload
            </v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-upload</v-icon>
              Search MWT
            </v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-timer-sand</v-icon>
              Queue
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-tray-full</v-icon>
              Results
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-account</v-icon>
              Account
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              class="justify-start black--text"
              @click="drawer = false"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-information</v-icon>
              About
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              plain
              @click="toggleTheme"
              class="justify-start black--text"
            >
            <v-icon class="blue--text text--darken-4 me-4" plain>mdi-brightness-6</v-icon>
              Theme
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list> 
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name:"FrontHeader",
  
    data: () => ({
      drawer: false,
      group: null,
    }),
    mounted: async function () {
      let darkTheme = localStorage.getItem("darkTheme");
      if (darkTheme === "yes") {
        console.log("Setting theme to dark");
        this.$vuetify.theme.dark = true;
      }
    },
    methods: {
      toggleTheme: function () {
        this.drawer = false;
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        if (this.$vuetify.theme.dark) {
          localStorage.setItem("darkTheme", "yes");
        } else {
          localStorage.setItem("darkTheme", "no");
        }
      },
    },
  };
  </script>