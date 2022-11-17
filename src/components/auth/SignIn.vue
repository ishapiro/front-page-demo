<template>
    <v-card elevation="5" class="px-14 rounded-xl">
        <v-form ref="form" @submit.prevent="signIn" lazy-validation>
            <v-row class=" mt-16">
                <v-col cols="12" class="align-self-center text-center text-md-left">
                    <div class="text-h3 primary--text text-center font-weight-bold pt-10">
                        Account Management
                        <div class="black--text font-weight-bold text-h4 mt-3">Sign in to your account
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <div class="text-subtitle-1 font-weight-bold text-center text-sm-left pb-2">
                        Username *
                    </div>
                    <v-text-field :rules="userNameRules" v-model="username" label="Enter your username..." outlined>
                    </v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                    <div class="text-subtitle-1 font-weight-bold text-center text-sm-left pb-2">
                        Password *
                    </div>
                    <v-text-field :rules="userPasswordRules" v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                        name="input-pass" label="Enter your password..." @click:append="show1 = !show1" outlined>
                    </v-text-field>
                    <div class="text-subtitle-1 black--text text-left pb-2">
                        Forgot Your Password?
                        <a link @click="$emit('changeTab','forgot')" href="javascript:void(0)"
                            class="secondary--text text-decoration-none">
                            Reset Password
                        </a>
                    </div>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn :loading="loading" :disabled="loading" block x-large type="submit"
                        class="text-subtitle-1 secondary white--text">
                        SIGN IN
                    </v-btn>
                    <div class="text-subtitle-1 black--text pt-6 pb-8">
                        Dont have an account?
                        <a link @click="$emit('changeTab','signup')" href="javascript:void(0)"
                            class="secondary--text text-decoration-none">
                            Create Account
                        </a>
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
        Auth
    } from "aws-amplify";

    export default {
        name: "SignIn",
        data() {
            return {
                loading: false,
                show1: false,
                username: '',
                password: '',
                userNameRules: [
                    v => !!v || 'Username field is required',
                ],
                userPasswordRules: [
                    v => !!v || 'Password field is required',
                ],
            };
        },
        methods: {
            async signIn() {
                if (!this.$refs.form.validate()) {
                    return;
                }
                this.loading = true;
                try {
                    this.loading = false;
                    await Auth.signIn(this.username, this.password);
                    await this.$refs.form.reset()
                    this.$router.push({
                        path: 'profile'
                    }).then(() => {}).catch(() => {});
                } catch (error) {
                    this.loading = false;
                    this.$root.$emit('alert-message', error.message);
                }
            }
        }
    };
</script>