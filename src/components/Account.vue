<template>
  <div class="account-page pb-16">
    <v-container class="">
      <v-row>
        <v-col
        cols="12"
        md="7"
        class="align-self-center text-center text-md-left"
        >
          <div
            class="text-h3 primary--text font-weight-bold text-center text-sm-left pb-8"
          >
            Free Basic Plans
            <div class="secondary--text font-weight-bold text-h4 mt-3">Forever</div>
          </div>
          <div class="text-h6">
            Sign up for a free basic plan and gain access to model template customization and output file generation. Generate STL and 3MF files for 3D Printers and SVG and DXF files for Laser Engravers/Cutters and CNC Routers.
            
            <div class="my-8">Already a member, sign in with your existing username.</div>
          </div>
          <v-img
              max-width="913"
              src="@/assets/account-hero-img.png"
            ></v-img>
        </v-col>
        <v-col
        cols="12"
        md="5"
        >
          <!-- <amplify-authenticator>
            <div v-if="authState === 'signedin' && user">
              <div>Hello, {{ user.username }}</div>
            </div>
            <amplify-sign-out></amplify-sign-out>
          </amplify-authenticator> -->
          <template>
          <amplify-authenticator>
            <amplify-sign-in header-text="Sign in to your account" slot="sign-in" />
            <div>
              My App
              <amplify-sign-out></amplify-sign-out>
            </div>
            <amplify-sign-up header-text="Create a new account" slot="sign-up" have-account-text="Already have an account?" submit-button-text="Sign up" />
          </amplify-authenticator>
          </template>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div
            class="text-h3 primary--text font-weight-bold text-center text-sm-left pb-8"
          >
            Premium Plans
            <div class="secondary--text font-weight-bold text-h4 mt-3">Coming Soon</div>
          </div>
          <div class="text-h6">
            Your basic membership is free forever. As a premium member you gain access to verified model templates, downloads of Model Templates (OpenSCAD scripts), the ability to save template settings, private model storage, branded Creator Pages and access to advanced Creator tools.
            
            <div class="my-8">Premium features are free for everyone while the application is in beta.</div>
            
            <span class="font-italic">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.account-page{
  background: url('@/assets/bg.jpg') no-repeat center center / cover;
  background-size: cover;
}
</style>
<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "AuthStateApp",
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
    };
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  },
};
</script>
