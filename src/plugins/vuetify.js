import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme:{
    themes: {
      light: {
        primary: '#000c66',
        secondary: '#ff7500',
        info: '#E3F2FD',
        bg_grey: "#f5f5f5",
        bg_light_blue:"#E3F2FD",
      }
    }
  }
});
