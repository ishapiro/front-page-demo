<template>
  <div class="profile-page pb-16">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="px-16 mx-auto mt-16 pb-16 pt-10" max-width="1370">
            <v-row class="">
              <v-col cols="12" md="7" class="d-flex align-center">
                <div class="text-h3 primary--text font-weight-bold text-center text-sm-left" elevation>
                  Account Management
                </div>
              </v-col>
              <v-col cols="12" md="5" class="">
                <div class="primary--text font-weight-bold text-center text-sm-left pb-2">
                  <v-icon class="primary--text pe-5">
                    mdi-account
                  </v-icon>
                  {{username}}
                </div>
                <div class="primary--text font-weight-bold text-center text-sm-left pb-2">
                  <v-icon class="primary--text pe-5">
                    mdi-card-account-details
                  </v-icon>
                  {{id}}
                </div>
                <div class="primary--text font-weight-bold text-center text-sm-left pb-2">
                  <v-icon class="primary--text pe-5">
                    mdi-email
                  </v-icon>
                  {{email}}
                </div>
                <div class="primary--text font-weight-bold text-center text-sm-left pb-2">
                  <v-icon class="primary--text pe-5">
                    mdi-bell
                  </v-icon>
                  {{ sub }}
                </div>
              </v-col>
            </v-row>
            <v-form  ref="form" @submit.prevent="updateAccount">
              <v-row class=" mt-16">
                <v-col cols="12" md="6" class="">
                  <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                    Nickname
                  </div>
                  <v-text-field v-model="attributes.nickname" :rules="nicNameRules" label="Nickname" outlined>
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="">
                  <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                    Website URL
                  </div>
                  <v-text-field v-model="attributes.website" :rules="webSiteRules" label="www.makewithtech.com"
                    outlined>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="">
                <v-col cols="12" class="">
                  <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                    About You
                  </div>
                  <v-textarea label="Enter Your Information" v-model="attributes.about_me" auto-grow outlined rows="10"
                    row-height="15"></v-textarea>
                </v-col>
                <v-col cols="12" class="">
                  <div class="primary--text font-weight-bold text-center text-sm-left">
                    Sign up for Buy Me a Coffee and enter your ID to receive tips when your models are downloaded from
                    the results list. Your ID is the string after the Buy Me a Coffee widget URL. For example in the
                    following case:
                  </div>
                  <div class="font-weight-bold text-center text-sm-left">
                    <v-btn href="https://www.google.com/" plain class="black--text">
                      www.buymeacoffee.com/makewithtech
                    </v-btn>
                  </div>
                  <div>
                    "<span class="font-weight-bold secondary--text">makewithtech</span>" is your ID.
                  </div>
                </v-col>
                <v-col cols="12" md="6" class="">
                  <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                    Buy me a coffee
                  </div>
                  <v-text-field v-model="attributes.buymeacofee_id" label="ID" outlined></v-text-field>
                </v-col>
                <v-col cols="12" class="">
                  <div class="primary--text font-weight-bold text-center text-sm-left">
                    Sign up for Buy Me a Coffee and enter your ID to receive tips when your models are downloaded from
                    the results list. Your ID is the string after the Buy Me a Coffee widget URL. For example in the
                    following case:
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox v-model="attributes.experimental_feature" value="'true'"
                    label="Try experimental features"></v-checkbox>
                  <v-btn :loading="loading" :disabled="loading" type="submit" x-large class="grey darken-3 white--text">
                    Save/Update Account
                  </v-btn>
                  <div class="primary--text font-weight-bold text-center text-sm-left py-5">
                    Changing the layout will redirect to the home page
                  </div>
                  <v-select v-model="attributes.redirect_to" :items="itemsselect" label="Auto" outlined></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-img max-width="490" src="@/assets/profile-down.png" class="ms-auto"></v-img>
                </v-col>
                <v-btn type="button" block x-large @click="signOut" :loading="signOutLoading" :disabled="signOutLoading"
                  class="secondary white--text">
                  SIGN OUT
                </v-btn>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex">
          <v-btn href="https://models.makewithtech.com/manage-subscriptions/" x-large
            class="primary white--text mx-auto mt-16 mb-8">
            Update to a Premium Subscription?
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>
<style>
  .profile-page {
    background: url('@/assets/bg-profile.png') no-repeat center center / cover;
    background-size: cover;
  }
</style>
<script>
  import {
    Auth
  } from "aws-amplify";

  export default {
    data: () => ({
      loading: false,
      username: '',
      sub: '',
      email: '',
      id: '',
      attributes: {
        buymeacofee_id: '',
        about_me: '',
        nickname: '',
        website: '',
        experimental_feature: 'false',
        redirect_to: ''
      },
      signOutLoading: false,
      nicNameRules: [
        v => !!v || 'Name is required',
      ],
      webSiteRules: [
        v => !!v || 'Website is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      itemsselect: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
    name: "AuthStateApp",
    async created() {
      await this.getUserInfo();
    },
    methods: {
      async getUserInfo() {
        await Auth.currentUserInfo().then(user => {
      const { username, attributes, id } = user;
          this.sub = attributes.sub;
          this.id = id;
          this.username = username;
          this.email = attributes.email;
          this.attributes = attributes;
      }).catch(() => {
        this.$router.push({ path: 'account' }).then(() => { }).catch(() => { });
      });
      },
      async updateAccount() {
        if (!this.$refs.form.validate()) {
          return;
        }
        this.loading = true;
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
          nickname: this.attributes.nickname,
          website: this.attributes.website,
          // 'custom:experimental_feature':this.attributes.experimental_feature,
          // 'custom:buymeacofee_id':this.attributes.buymeacofee_id,
          // 'custom:redirect_to':this.attributes.redirect_to,
          // 'custom:about_me':this.attributes.about_me,
        }).then(() => {
          this.loading = false;
        }).catch(() => {
          this.loading = false;
        });
      },
      async signOut() {
        this.signOutLoading = true;
        try {
          await Auth.signOut({
            global: true
          });
          this.signOutLoading = false;
          this.$router.push({
            path: 'account'
          }).then(() => {}).catch(() => {});
        } catch (error) {
          this.signOutLoading = false;
          this.$root.$emit('alert-message', error.message);
        }
      }

    }
  };
</script>