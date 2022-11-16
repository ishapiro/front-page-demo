<template>
    <v-card elevation="5" class="px-14" rounded-xl>
      <v-form v-model="valid">
        <v-row class=" mt-16">
          <v-col cols="12" class="align-self-center text-center text-md-left">
            <div class="text-h3 primary--text text-center font-weight-bold pt-10">
              Account Management
              <div class="black--text font-weight-bold text-h4 mt-3">Confirm Sign Up</div>
            </div>
          </v-col>
          <v-col cols="12" class="pb-0">
            <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
              Username
            </div>
            <v-text-field readonly v-model="username" label="Enter username" outlined></v-text-field>
          </v-col>
          <v-col cols="12" class="pb-0">
            <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
              Verification code
            </div>
            <v-text-field v-model="password" label="Enter code" outlined></v-text-field>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn block x-large class="text-subtitle-1 secondary white--text">
              SUBMIT
            </v-btn>
            <div class="text-subtitle-1 black--text pt-6 pb-8">
              <router-link to="/Sign-In" plain class="secondary--text text-decoration-none">
                Back to Sign in
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </template>
  <style>
    .account-page {
      background: url('@/assets/bg.jpg') no-repeat center center / cover;
      background-size: cover;
    }
  </style>
  <script>
    import {
      onAuthUIStateChange
    } from "@aws-amplify/ui-components";
  
    export default {
      name: "ConfirmSignup",
      created() {
        this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
          this.authState = authState;
          this.user = authData;
        });
      },
      data() {
        return {
          user: undefined,
          authState: undefined,
          unsubscribeAuth: undefined,
          show1: false,
          password: 'Password',
          rules: {
            required: value => !!value || 'Required.'
          }
        };
      },
      beforeDestroy() {
        this.unsubscribeAuth();
      },
    };
  </script>