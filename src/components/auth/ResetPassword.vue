<template>
  <v-card elevation="5" class="px-14 rounded-xl">
    <v-form ref="form" @submit.prevent="resetPassword" lazy-validation>
      <v-row class=" mt-16">
        <v-col cols="12" class="align-self-center text-center text-md-left">
          <div class="text-h3 primary--text text-center font-weight-bold pt-10">
            Account Management
            <div class="black--text font-weight-bold text-h4 mt-3">Reset your password</div>
          </div>
        </v-col>
        <v-col cols="12" class="pb-0">
          <div class="text-subtitle-1 font-weight-bold text-center text-sm-left pb-2">
            Verification code
          </div>
          <v-text-field v-model="code" :rules="codeRules" label="Enter code" outlined></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <div class="text-subtitle-1 font-weight-bold text-center text-sm-left pb-2">
            New password
          </div>
          <v-text-field v-model="new_password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="passwordRules"
            :type="show1 ? 'text' : 'password'" name="input-pass" label="Enter your new password" @click:append="show1 = !show1" outlined></v-text-field>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn type="submit" :loading="loading" :disabled="loading" block x-large
            class="text-subtitle-1 secondary white--text">
            SUBMIT
          </v-btn>
          <div class="text-subtitle-1 black--text pt-6 pb-8">
            <a link @click="$emit('changeTab','signin')" href="javascript:void(0)" class="secondary--text text-decoration-none">
              Back to Sign in
          </a>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>
<script>
  import {
    Auth
  } from 'aws-amplify';

  export default {
    name: "ResetPassword",
    props: {
      email: {
        required: true,
      }
    },
    data() {
      return {
        show1: false,
        loading: false,
        new_password: '',
        username: this.email,
        code: '',
        codeRules: [
          v => !!v || 'Username field is required',
        ],
        passwordRules: [
          v => !!v || 'Username field is required',
        ],
      };
    },
    methods: {
      async resetPassword() {
        if (!this.$refs.form.validate()) { 
            return;
        }
        this.loading = true;
        await Auth.forgotPasswordSubmit(this.username, this.code, this.new_password)
        .then(() => {
            this.loading = false;
            this.$emit('changeTab', 'signin');
          })
          .catch(err => {
            this.loading = false;
            this.$root.$emit('alert-message', err.message);

          });
      }
    }
  };
</script>