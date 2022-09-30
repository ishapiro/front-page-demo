<template>
  <!-- <v-app id="Models"> -->
  <div>
    <v-app-bar height="80px" app>
      <v-toolbar-title
        class="indigo--text text--darken-4 pr-4"
        style="font-family: Lato"
      >
        <a
          :style="{
            fontSize: '12px',
            textDecoration: 'none',
            color: '#030b79',
          }"
          href="/"
        >
          <v-img class="pl-2" width="300" src="@/assets/makewithtech900.png" />
        </a>
      </v-toolbar-title>
      <v-spacer v-if="isMobile"/>
      <div class="d-flex d-md-none pr-0 mr-0">
        <v-app-bar-nav-icon class="black--text" @click="drawer = true">
          <v-icon light> mdi-text </v-icon>
        </v-app-bar-nav-icon>
      </div>
      <v-spacer />

      <!-- buttons start here -->

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon to="/models" class="indigo--text text--darken-4 mx-2">
            <v-icon large light v-bind="attrs" v-on="on">
              mdi-cloud-search
            </v-icon>
          </v-btn>
        </template>
        <span>Search MakeWithTech Model Templates</span>
      </v-tooltip>

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            to="/thingiversebrowser"
            class="indigo--text text--darken-4 mx-2"
          >
            <v-icon large light v-bind="attrs" v-on="on">
              mdi-alpha-t-circle-outline
            </v-icon>
          </v-btn>
        </template>
        <span>Search Thingiverse</span>
      </v-tooltip>

      <v-divider vertical v-if="!isMobile" />

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon to="/fileupload" class="indigo--text text--darken-4 mx-2">
            <v-icon large light v-bind="attrs" v-on="on">mdi-upload</v-icon>
          </v-btn>
        </template>
        <span>Test an OpenSCAD Model Template</span>
      </v-tooltip>

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon to="/share" class="indigo--text text--darken-4 mx-2">
            <v-icon large light v-bind="attrs" v-on="on">
              mdi-cloud-upload-outline</v-icon
            >
          </v-btn>
        </template>
        <span>Share an OpenSCAD Model Template</span>
      </v-tooltip>

      <v-divider vertical v-if="!isMobile" />

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            to="/listcompilequeue"
            class="indigo--text text--darken-4 mx-2"
          >
            <v-icon light large v-bind="attrs" v-on="on">mdi-timer-sand</v-icon>
          </v-btn>
        </template>
        <span>Processing Queue</span>
      </v-tooltip>

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            to="/listrenderedmodels"
            class="indigo--text text--darken-4 mx-2"
          >
            <v-icon light large v-bind="attrs" v-on="on">mdi-tray-full</v-icon>
          </v-btn>
        </template>
        <span>OpenSCAD Model Results</span>
      </v-tooltip>

      <v-divider vertical v-if="!isMobile" />

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon to="/account" class="indigo--text text--darken-4 mx-2">
            <v-icon light large v-bind="attrs" v-on="on">mdi-account</v-icon>
          </v-btn>
        </template>
        <span>Account (Sign In)</span>
      </v-tooltip>

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            @click="toggleTheme"
            class="indigo--text text--darken-4 mx-2"
          >
            <v-icon light large v-bind="attrs" v-on="on"
              >mdi-brightness-6</v-icon
            >
          </v-btn>
        </template>
        <span>Toggle Light / Dark</span>
      </v-tooltip>

      <v-divider vertical v-if="!isMobile" />

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            class="indigo--text text--darken-4 mx-2"
            href="https://youtube.com/c/makewithtech"
            target="_blank"
          >
            <v-icon light large v-bind="attrs" v-on="on">mdi-video</v-icon>
          </v-btn>
        </template>
        <span>3d Printing Videos and Tutorials</span>
      </v-tooltip>

      <v-tooltip bottom v-if="!isMobile">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon to="/about" class="indigo--text text--darken-4">
            <v-icon large light v-bind="attrs" v-on="on"
              >mdi-information</v-icon
            >
          </v-btn>
        </template>
        <span>About MakeWithTech</span>
      </v-tooltip>
    </v-app-bar>

    <!-- navigation drawer -->

    <v-navigation-drawer
      v-model="drawer"
      fixed
      color="black lighten-2"
      class="pa-1 text-caption"
    >
      <v-list class="text-caption">
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              Home
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-video</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              class="justify-start white--text text-caption"
              href="https://youtube.com/c/makewithtech"
              target="_blank"
              @click="drawer = false"
            >
              Videos
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-image-search-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/thingiversebrowser"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              Search Thingiverse
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/fileupload"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              Upload
            </v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/models"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              Search MWT
            </v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-timer-sand</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/listcompilequeue"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              Queue
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-tray-full</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/listrenderedmodels"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              Results
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/account"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              Account
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              to="/about"
              class="justify-start white--text text-caption"
              @click="drawer = false"
            >
              About
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="white--text">mdi-brightness-6</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-btn
              plain
              icon
              @click="toggleTheme"
              class="justify-start white--text text-caption"
            >
              Theme
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- </v-app> -->
  </div>
</template>

<script>
export default {
  name: "FrontHeader",

  data: () => ({
    drawer: false,
    group: null,
    isMobile: false,
  }),
  mounted: async function () {
    let darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme === "yes") {
      console.log("Setting theme to dark");
      this.$vuetify.theme.dark = true;
    }
    if (
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      window.innerWidth < 901
    ) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    // Attaching the event listener function to window's resize event
    window.addEventListener("resize", this.displayWindowSize);
  },
  methods: {
    displayWindowSize: function () {
      // Get width and height of the window excluding scrollbars
      var w = document.documentElement.clientWidth;
      if (w < 901) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
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