<template>
  <v-card elevation="5" class="px-14" rounded-xl>
    <v-form ref="form" v-model="valid" @submit.prevent="confirmSignUp" lazy-validation>
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
          <v-text-field readonly v-model="username" :rules="userNameRules" label="Enter username" outlined>
          </v-text-field>
        </v-col>
        <v-col cols="12" class="pb-0">
          <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
            Verification code
          </div>
          <v-text-field v-model="code" :rules="codeRules" label="Enter code" outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="pb-0">
          <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
            <v-btn type="button" link @click="resendConfirmationCode">Resend code</v-btn>
          </div>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-btn type="submit" :loading="loading" :disabled="loading" block x-large
            class="text-subtitle-1 secondary white--text">
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
  import Auth from '@aws-amplify/auth';

  export default {
    name: "ConfirmSignup",
    props: ['email'],
    data() {
      return {
        loading: false,
        valid: true,
        username: this.email,
        code: '',
        userNameRules: [
          v => !!v || 'Username field is required',
        ],
        codeRules: [
          v => !!v || 'Username field is required',
        ],
      };
    },
    methods: {
      async confirmSignUp() {
        if (!this.$refs.form.validate()) {
          return;
        }
        this.loading = true;
        try {
          await Auth.confirmSignUp(this.username, this.code);
          this.$emit('changeTab', 'signin');
          this.loading = false;
        } catch (error) {
          this.loading = false;
          console.log('error confirming sign up', error);
        }
      },
      async resendConfirmationCode() {
        if (!this.username) {
          return;
        }
        try {
          await Auth.resendSignUp(this.username);
          console.log('code resent successfully');
        } catch (err) {
          console.log('error resending code: ', err);
        }
      }
    },
    beforeDestroy() {},
  };
</script>