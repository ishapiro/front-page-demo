<template>
  <div class="account-page pb-16">
    <v-alert dismissible v-if="isMessage" type="error">
      {{message}}
    </v-alert>
    <v-container class="">
      <v-row>
        <v-col cols="12" md="7" class="align-self-center text-center text-md-left">
          <div class="text-h3 primary--text font-weight-bold text-center text-sm-left pb-8">
            Free Basic Plans
            <div class="secondary--text font-weight-bold text-h4 mt-3">Forever</div>
          </div>
          <div class="text-h6">
            Sign up for a free basic plan and gain access to model template customization and output file generation.
            Generate STL and 3MF files for 3D Printers and SVG and DXF files for Laser Engravers/Cutters and CNC
            Routers.

            <div class="my-8">Already a member, sign in with your existing username.</div>
          </div>
          <v-img max-width="913" src="@/assets/account-hero-img.png"></v-img>
        </v-col>
        <v-col cols="12" md="5">
          <template v-if="isrender">

              <signInVue v-if="tab == 'signin'" @user="user = $event" @authState="authState = $event" @changeTab="tab = $event" />
              <Signup v-if="tab == 'signup'" @changeTab="tab = $event" @email="email =  $event" />
              <ConfirmSignup v-if="tab == 'confirm-signup'" :email="email" @changeTab="tab = $event" />
              <Forgotpassword v-if="tab == 'forgot'" @changeTab="tab = $event.tab;email = $event.email" />
              <ResetPassword v-if="tab == 'reset-password'" :email="email" @changeTab="tab = $event" />

          </template>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-h3 primary--text font-weight-bold text-center text-sm-left pb-8">
            Premium Plans
            <div class="secondary--text font-weight-bold text-h4 mt-3">Coming Soon</div>
          </div>
          <div class="text-h6">
            Your basic membership is free forever. As a premium member you gain access to verified model templates,
            downloads of Model Templates (OpenSCAD scripts), the ability to save template settings, private model
            storage, branded Creator Pages and access to advanced Creator tools.

            <div class="my-8">Premium features are free for everyone while the application is in beta.</div>

            <span class="font-italic">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
              OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
              CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
  .account-page {
    background: url('@/assets/bg.jpg') no-repeat center center / cover;
    background-size: cover;
  }

  .v-application .text-subtitle-1 {
    font-size: 1.1rem !important;
    font-weight: 700;
  }
</style>
<script>
  import {
    Auth
  } from "aws-amplify";
  import ConfirmSignup from "./auth/ConfirmSignUp";
  import Forgotpassword from "./auth/ForgotPassword";
  import ResetPassword from "./auth/ResetPassword.vue";
  import signInVue from './auth/SignIn'
  import Signup from "./auth/SignUp";
  export default {
    name: "AuthStateApp",
    components: {
      signInVue,
      Signup,
      Forgotpassword,
      ResetPassword,
      ConfirmSignup
    },
    data() {
      return {
        isMessage: false,
        message: '',
        isrender:false,
        show1: false,
        tab: 'signin',
        email: '',
      };
    },
    async mounted() {
      await Auth.currentAuthenticatedUser({
        bypassCache: false
      }).then(() => {
        this.isrender = true;
        this.$router.push({ path: 'profile' }).then(() => { }).catch(() => { });
      }).catch(() => {
        this.isrender = true;
      });
      this.$root.$on('alert-message', ($event) => {
        this.isMessage = !!$event;
        this.message = $event;
      });
    }
  };
</script>