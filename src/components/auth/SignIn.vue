<template>
    <v-card elevation="5" class="px-14 rounded-xl">
        <v-form v-model="valid" @submit.prevent="signIn">
            <v-row class=" mt-16">
                <v-col cols="12" class="align-self-center text-center text-md-left">
                    <div class="text-h3 primary--text text-center font-weight-bold pt-10">
                        Account Management
                        <div class="black--text font-weight-bold text-h4 mt-3">Sign in to your account
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                        Username *
                    </div>
                    <v-text-field v-model="username" label="Enter your username..." outlined>
                    </v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                    <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                        Password *
                    </div>
                    <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'" name="input-pass" label="Enter your password..."
                          @click:append="show1 = !show1" outlined></v-text-field>
                    <div class="text-subtitle-1 black--text text-left pb-2">
                        Forgot Your Password?
                            <!-- Reset Password -->
                        <!-- <v-btn link @click="$emit('changeTab','forgot')" plain class="secondary--text text-decoration-none">
                        </v-btn> -->
                        <a link @click="$emit('changeTab','forgot')" href="javascript:void(0)" class="secondary--text text-decoration-none">
                            Reset Password
                        </a>  
                    </div>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn block x-large type="submit" class="text-subtitle-1 secondary white--text">
                        SIGN IN
                    </v-btn>
                    <div class="text-subtitle-1 black--text pt-6 pb-8">
                        Dont have an account?
                        <!-- <v-btn link @click="$emit('changeTab','signup')" plain class="secondary--text text-decoration-none">
                            Create Account
                        </v-btn> -->
                        <a link @click="$emit('changeTab','signup')" href="javascript:void(0)" class="secondary--text text-decoration-none">
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
        onAuthUIStateChange
    } from "@aws-amplify/ui-components";
    import {
        Auth
    } from "aws-amplify";

    export default {
        name: "SignIn",
        created() {
            this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
                this.authState = authState;
                this.user = authData;
            });
        },
        data() {
            return {
                valid: true,
                user: undefined,
                authState: undefined,
                unsubscribeAuth: undefined,
                show1: false,
                username: '',
                password: '',
                rules: {
                    required: value => !!value || 'Required.'
                }
            };
        },
        beforeDestroy() {
            this.unsubscribeAuth();
        },
        methods: {
            async signIn() {
                try {
                    const user = await Auth.signIn(this.username, this.password);
                    console.log(user);
                } catch (error) {
                    console.log('error signing in', error);
                }
            }
        }

    };
</script>