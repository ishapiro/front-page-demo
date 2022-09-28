<template>
  <div>
    <div class="overflow-hidden">
      <v-container class="sec1 py-16 my-16">
        <v-row no-gutters>
          <v-col
            cols="12"
            md="6"
            class="align-self-center text-center text-sm-left py-16 py-md-0"
          >
            <div class="text-h1 primary--text font-weight-bold">
              Finally.
              <div class="">
                Make <span class="secondary--text">3d Models</span>
              </div>
              Your Own.
            </div>
            <div class="py-10">
              Customize model templates, download, and 3D print. In minutes. For
              free.
            </div>
            <div class="">
              <v-btn
                rounded
                color="primary"
                dark
                class="mr-1 mr-sm-5"
                :x-large="$vuetify.breakpoint.lgAndUp"
                :large="$vuetify.breakpoint.smAndUp"
                :small="$vuetify.breakpoint.xs"
                :to="{ name: 'BecomeACreator' }"
                name="BecomeCreatorPage"
              >
                Become A Creator
              </v-btn>
              <v-btn
                rounded
                outlined
                color="secondary"
                dark
                :x-large="$vuetify.breakpoint.lgAndUp"
                :large="$vuetify.breakpoint.smAndUp"
                :small="$vuetify.breakpoint.xs"
                :to="{ name: 'BecomeAMember' }"
                name="BecomeMemberPage"
              >
                Become A Member
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="pt-0 mt-0 ml-0 pl-0">
            <v-img v-if="heroImage == true"
              :class="
                $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
                  ? ''
                  : 'hero-bg'
              "
              width="850"
              src="@/assets/hero-image-customize.png"
            ></v-img>
            <div class="d-flex fill-height" v-if="heroImage == false">
              <video width="100%" autoplay muted class="animated-video">
                <source src="@/assets/hero-animation.mp4" type="video/mp4">
              </video>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="primary">
      <v-container fluid class="">
        <v-row>
          <v-col>
            <div
              class="text-h2 white--text font-weight-bold text-center pt-16 my-5"
            >
              Explore Hundreds of
              <span class="secondary--text">Model</span>
              Templates
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0">
            <v-carousel height="100%" hide-delimiters primary> 
              <template v-for="(item, index) in featuredModels"> 
                <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" 
                :key="index"
                > 
                  <v-row class="car-row-parent flex-nowrap" style="height:100%"> 
                    <template v-for="(n,i) in columns"> 
                      <template v-if="(+index + i) < featuredModels.length"> 
                        <v-col lg="4" :key="i"> 
                          <v-sheet color="primary" v-if="(+index + i) < featuredModels.length"
                          >
                            <v-row class="car-row fill-height"
                            align="center"
                            justify="center"
                            >
                              <div class="display-3">
                                <v-card
                                class="ma-4 d-flex flex-column rounded-xl"
                                height="527"
                                width="380"
                                >
                                  <v-row class="fill-height" justify="center">
                                    <v-col class="pa-7">
                                      <v-img :src="featuredModels[index + i].url" :alt="featuredModels[index + i].author"></v-img>
                                      <div class="">
                                        <div class="text-h5 py-4">
                                          {{ featuredModels[index + i].name }}
                                        </div>
                                        <v-btn
                                        absolute
                                        bottom
                                        rounded
                                        outlined
                                        color="secondary"
                                        dark
                                        width="90%"
                                        :x-large="$vuetify.breakpoint.mdAndUp"
                                        :small="$vuetify.breakpoint.xsAndUp"
                                        >
                                        <v-icon light class="mr-3"
                                        >mdi-arrow-collapse-down</v-icon
                                        >
                                        Customize
                                        </v-btn>
                                      </div>
                                    </v-col>
                                  </v-row>
                                </v-card>
                              </div>
                            </v-row>
                          </v-sheet>
                        </v-col> 
                      </template> 
                    </template> 
                  </v-row> 
                </v-carousel-item> 
              </template> 
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="text-center">
              <v-btn
                class="px-sm-15 ma-10"
                rounded
                color="secondary"
                dark
                :x-large="$vuetify.breakpoint.mdAndUp"
                :small="$vuetify.breakpoint.xsAndUp"
              >
                Explore More
                <v-icon light class="ml-4">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bg_grey pb-16">
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h2 font-weight-bold text-center pt-12 pb-8">
              Join Thousands of
              <span class="secondary--text">Makers</span>
              and
              <span class="secondary--text">Creators</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col class="d-flex px-7" lg="4" sm="6">
            <v-card
              class="d-flex flex-column px-3 mx-auto text-center pt-10 rounded-xl"
            >
              <div class="mx-auto">
                <v-img
                  class=""
                  src="@/assets/search-3d-icon.png"
                  width="254"
                ></v-img>
              </div>
              <v-card-title
                class="mt-5 text-h4 justify-center font-weight-medium"
              >
                Search 3D Models
              </v-card-title>
              <v-card-subtitle
                class="mt-1 text-body-1 flex-grow-1"
                min-height="250px"
              >
                Search for 3d models in the MakeWithTech model directory or on
                Thingiverse(c).
              </v-card-subtitle>
              <v-btn
                class="px-15 ma-10"
                rounded
                color="primary"
                dark
                :x-large="$vuetify.breakpoint.mdAndUp"
                :small="$vuetify.breakpoint.xsAndUp"
              >
                Find 3D Models
              </v-btn>
            </v-card>
          </v-col>
          <v-col class="d-flex px-7" lg="4" sm="6">
            <v-card
              class="d-flex flex-column px-3 mx-auto text-center pt-10 rounded-xl"
            >
              <div class="mx-auto">
                <v-img
                  class=""
                  src="@/assets/customize-model-icon.png"
                  width="254"
                ></v-img>
              </div>
              <v-card-title
                class="mt-5 text-h4 justify-center font-weight-medium"
              >
                Customize Models
              </v-card-title>
              <v-card-subtitle
                class="mt-1 text-body-1 flex-grow-1"
                min-height="250px"
              >
                Customize a model template online without learning a CAD program
                or a programming language.
              </v-card-subtitle>
              <v-btn
                class="px-15 ma-10"
                rounded
                color="primary"
                dark
                :x-large="$vuetify.breakpoint.mdAndUp"
                :small="$vuetify.breakpoint.xsAndUp"
                :to="{ name: 'CustomizeModels' }"
                name="CustomizeModelsPage"
              >
                Customize 3D Models
              </v-btn>
            </v-card>
          </v-col>
          <v-col class="d-flex px-7" lg="4" sm="6">
            <v-card
              class="d-flex flex-column px-3 mx-auto text-center pt-10 rounded-xl"
            >
              <div class="mx-auto">
                <v-img
                  class=""
                  src="@/assets/show-earn-icon.png"
                  width="254"
                ></v-img>
              </div>
              <v-card-title
                class="mt-5 text-h4 justify-center font-weight-medium"
              >
                Share and Earn Tips
              </v-card-title>
              <v-card-subtitle
                class="mt-1 text-body-1 flex-grow-1"
                min-height="250px"
              >
                Share your OpenSCAD models and earn tips when a maker customizes
                and downloads it. More ways to make money coming soon.
              </v-card-subtitle>
              <v-btn
                class="px-15 ma-10"
                rounded
                color="primary"
                dark
                :x-large="$vuetify.breakpoint.mdAndUp"
                :small="$vuetify.breakpoint.xsAndUp"
                :to="{ name: 'SellModels' }"
                name="SellModelsPage"
              >
                Sell your 3D Models
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="primary py-16">
      <v-container>
        <v-row>
          <v-col
            xl="4"
            lg="5"
            sm="12"
            xs="12"
            class="white--text align-self-center"
          >
            <div
              class="text-h2 white--text font-weight-bold text-center text-sm-left pb-8"
            >
              Premium Plans
              <span class="secondary--text">Coming Soon</span>
            </div>
            <div class="text-h6 font-weight-light">
              Your basic membership is free forever. As a premium member you
              gain access to verified model templates, the ability to save
              template settings, private model storage and access to advanced
              Creator tools.
            </div>
            <div class="text-h6 font-weight-light">
              Premium features are free for everyone while the application is in
              beta.
            </div>
          </v-col>
          <v-col xl="3" lg="1" xs="0"> </v-col>
          <v-col xl="5" lg="6" sm="12" xs="12">
            <v-row class="justify-center">
              <v-col class="d-flex" sm="6">
                <v-card
                  class="d-flex flex-column w-100 justify-space-between px-3 mx-auto text-center pt-10 rounded-xl"
                >
                  <v-card-title
                    class="text-h6 justify-center font-weight-bold flex-column"
                  >
                    <div class="text-h6 pb-4">FREE</div>
                    <div class="text-h2 font-weight-black">
                      <span class="text-h6 font-weight-black me-n1 me-md-n3"
                        >$</span
                      >
                      0.00
                    </div>
                  </v-card-title>

                  <div class="cus-list text-start mx-auto">
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">View Model Templates</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">Customize Templates</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">Download STL Files</div>
                    </div>
                  </div>
                  <v-btn
                    class="px-15 ma-10"
                    rounded
                    color="primary"
                    dark
                    :x-large="$vuetify.breakpoint.mdAndUp"
                    :small="$vuetify.breakpoint.xsAndUp"
                  >
                    Subscribe Now
                  </v-btn>
                </v-card>
              </v-col>
              <v-col class="d-flex" sm="6">
                <v-card
                  class="d-flex flex-column w-100 justify-space-between px-3 mx-auto text-center pt-10 rounded-xl"
                >
                  <v-card-title class="text-h6 justify-center font-weight-bold">
                    FREE
                  </v-card-title>

                  <div class="text-h2 font-weight-black">
                    <span class="text-h6 font-weight-black me-n1 me-md-n3"
                      >$</span
                    >
                    99.00
                  </div>

                  <div class="">Per Year</div>

                  <div class="cus-list text-start py-5 mx-auto">
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">Everything is Free</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">Save Template Parameters</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">Verified Models</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">Private Model Storage</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">Download SCAD files</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">View SCAD Debug Logs</div>
                    </div>
                    <div class="d-flex">
                      <v-icon class="me-4 secondary--text">mdi-check</v-icon>
                      <div class="text-h6">SCAD Editor</div>
                    </div>
                  </div>
                  <v-btn
                    class="px-15 ma-10"
                    rounded
                    color="primary"
                    dark
                    :x-large="$vuetify.breakpoint.mdAndUp"
                    :small="$vuetify.breakpoint.xsAndUp"
                  >
                    Subscribe Now
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bg_grey pb-16">
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h2 font-weight-bold text-center pt-12 pb-8">
              Experience the
              <span class="secondary--text">Creativity</span>
              of Model Templates
            </div>
            <div class="text-h5 grey--text text-darken-4 text-center">
              Here's what makes have to say
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col class="px-7" lg="4" sm="6" col="12">
            <v-card
              class="d-flex flex-column px-10 mx-auto text-center py-10 bg_light_blue rounded-xl"
              elevation="0"
            >
              <div class="mx-auto">
                <v-img
                  class=""
                  src="@/assets/testimonial1.png"
                  max-width="150"
                  width="100%"
                ></v-img>
              </div>
              <div class="my-5 mx-10">
                <v-img
                  class=""
                  src="@/assets/qoute-top.png"
                  max-width="34"
                  width="100%"
                ></v-img>
              </div>
              <div class="text-h6 grey--text text-darken-4">
                It has been an incredible source of innovation and inspiration
                for developers and framework authors alike. It’s been amazing to
                see its growth in web projects of all sizes on the web.
              </div>
              <div class="my-6 mx-auto">
                <v-img
                  class=""
                  src="@/assets/qoute-bot.png"
                  max-width="34"
                  width="100%"
                ></v-img>
              </div>
              <v-card-title
                class="text-h5 secondary--text justify-center font-weight-bold"
              >
                Tinashe
              </v-card-title>
              <v-card-subtitle
                class="text-h6 font-weight-light flex-grow-1"
                min-height="250px"
              >
                3D Model Creator
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col class="px-7" lg="4" sm="6" col="12">
            <v-card
              class="d-flex flex-column px-10 mx-auto text-center py-10 bg_light_blue rounded-xl"
              elevation="0"
            >
              <div class="mx-auto">
                <v-img
                  class=""
                  src="@/assets/testimonial2.png"
                  max-width="150"
                  width="100%"
                ></v-img>
              </div>
              <div class="my-5 mx-10">
                <v-img
                  class=""
                  src="@/assets/qoute-top.png"
                  max-width="34"
                  width="100%"
                ></v-img>
              </div>
              <div class="text-h6 grey--text text-darken-4">
                It has been an incredible source of innovation and inspiration
                for developers and framework authors alike. It’s been amazing to
                see its growth in web projects of all sizes on the web.
              </div>
              <div class="my-6 mx-auto">
                <v-img
                  class=""
                  src="@/assets/qoute-bot.png"
                  max-width="34"
                  width="100%"
                ></v-img>
              </div>
              <v-card-title
                class="text-h5 secondary--text justify-center font-weight-bold"
              >
                Vanhuan.2312
              </v-card-title>
              <v-card-subtitle
                class="text-h6 font-weight-light flex-grow-1"
                min-height="250px"
              >
                3D Model Creator
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col class="px-7" lg="4" sm="6" col="12">
            <v-card
              class="d-flex flex-column px-10 mx-auto text-center py-10 bg_light_blue rounded-xl"
              elevation="0"
            >
              <div class="mx-auto">
                <v-img
                  class=""
                  src="@/assets/testimonial3.png"
                  max-width="150"
                  width="100%"
                ></v-img>
              </div>
              <div class="my-5 mx-10">
                <v-img
                  class=""
                  src="@/assets/qoute-top.png"
                  max-width="34"
                  width="100%"
                ></v-img>
              </div>
              <div class="text-h6 grey--text text-darken-4">
                It has been an incredible source of innovation and inspiration
                for developers and framework authors alike. It’s been amazing to
                see its growth in web projects of all sizes on the web.
              </div>
              <div class="my-6 mx-auto">
                <v-img
                  class=""
                  src="@/assets/qoute-bot.png"
                  max-width="34"
                  width="100%"
                ></v-img>
              </div>
              <v-card-title
                class="text-h5 secondary--text justify-center font-weight-bold"
              >
                Ami
              </v-card-title>
              <v-card-subtitle
                class="text-h6 font-weight-light flex-grow-1"
                min-height="250px"
              >
                3D Model Creator
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="changeImage()">switch hero image</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style scoped>
.v-btn {
  text-transform: capitalize;
}
.hero-bg {
  position: absolute;
}
.w-100 {
  width: 100%;
}
.v-slide-group__next,
.v-slide-group__prev {
  display: none;
}
.v-slide-group__wrapper{
  margin-left: -170px;
}

@media (min-width: 960px){
  .container {
      max-width: 95%;
  }
  .container--fluid{
    max-width: 100%;
  }
  /* .car-row-parent .col:first-child .car-row{justify-content: end!important;}
  .car-row-parent .col:last-child .car-row{justify-content: start!important;} */
}
@media (min-width: 1904px){
  .container,
  .container--fluid {
      max-width: 1600px;
  }
}
@media (max-width: 959px) {
  .v-application .text-h1 {
    font-size: 3rem !important;
    line-height: 3rem;
  }
  .v-application .text-h2 {
    font-size: 2rem !important;
    line-height: 2rem;
  }
  .v-application .text-h6 {
    font-size: 1rem !important;
    line-height: 1.3rem;
  }
}
@media (max-width: 599px) {
  .col {
    flex-basis: unset !important;
  }
}
</style>
<script>
import axios from "axios";
export default {
  name: "FrontPage",
  data() {
    return {
      featuredModels: [],
      move: null,
      model: null,
      heroImage: false,
    };
  },
    computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    }
  },
  mounted: async function () {
    this.makeApiCall();
  },
  methods: {
    changeImage() {
      this.heroImage = !this.heroImage;
    },
    makeApiCall: async function () {
      let response;
      try {
        response = await axios.get(
          "https://lecbphglwh6xkuk2664swj4mvi0mghms.lambda-url.us-east-1.on.aws/v1/models/featured"
        );
      } catch (error) {
        console.log("axios get failed: ", error);
      }
      if (response) {
        for (let i = 0; i < response.data.items.length; i++) {
          const myResponse = response.data.items[i];
          this.featuredModels.push({
            id: myResponse.id,
            author: myResponse.author,
            name: myResponse.name,
            url: myResponse.url,
          });
        }
      }
    },
  },
};
</script>
