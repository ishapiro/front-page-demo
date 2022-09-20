<template>
  <v-app>
   
    <Header/>

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer/>
    
  </v-app>
</template>



<script>
import Header from './components/layout/header.vue';
import Footer from './components/layout/footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer
},

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
