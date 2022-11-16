<template>
    <v-card elevation="5" class="px-14" rounded-xl>
        <v-form ref="form" v-model="valid" @submit.prevent="signUp">
            <v-row class=" mt-16">
                <v-col cols="12" class="align-self-center text-center text-md-left">
                    <div class="text-h3 primary--text text-center font-weight-bold pt-10">
                        Account Management
                        <div class="black--text font-weight-bold text-h4 mt-3">Sign up to your account
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                        Username *
                    </div>
                    <v-text-field v-model="username" :rules="userNameRules" label="Enter your username..." outlined>
                    </v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                    <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                        Password *
                    </div>
                    <v-text-field v-model="password" :rules="userPasswordRules" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'" name="input-pass" label="Enter your password..."
                        hint="At least 8 characters"  @click:append="show1 = !show1" outlined></v-text-field>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <div class="text-h6 font-weight-bold text-center text-sm-left pb-2">
                        The verification/confirmation code is sent to this address  *
                    </div>
                    <v-text-field v-model="email" :rules="userEmailRules" label="Enter your username..." outlined>
                    </v-text-field>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn :loading="loading" :disabled="loading" block x-large type="submit" class="text-subtitle-1 secondary white--text">
                        SIGN UP
                    </v-btn>
                    <div class="text-subtitle-1 black--text pt-6 pb-8">
                        Already have an account?
                        <v-btn link @click="$emit('changeTab','signin')"  plain class="secondary--text text-decoration-none">
                            Sign in
                        </v-btn>
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
        name: "SignUpPage",
        created() {
            this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
                this.authState = authState;
                this.user = authData;
            });
        },
        data() {
            return {
                loading:false,
                valid: true,
                user: undefined,
                authState: undefined,
                unsubscribeAuth: undefined,
                show1: false,
                username: '',
                password: '',
                email: '',
                userNameRules: [
                    v => !!v || 'Username field is required',
                ],
                userPasswordRules: [
                    v => !!v || 'Password field is required',
                ],
                userEmailRules: [
                    v => !!v || 'Email field is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            };
        },
        beforeDestroy() {
            this.unsubscribeAuth();
        },
        methods: {
            async signUp() {
                if (!this.$refs.form.validate()) { 
                    return;
                }
                this.loading = true;
                
                try {
                    const {
                        user
                    } = await Auth.signUp({
                        username:this.username,
                        password:this.password,
                        attributes: {
                            email:this.email, // optional
                            //phone_number, // optional - E.164 number convention
                            // other custom attributes 
                        },
                        autoSignIn: { // optional - enables auto sign in after user is confirmed
                            enabled: true,
                        }
                    });
                    this.loading = false;
                    this.$emit('email', this.username);
                    this.$emit('changeTab', 'confirm-signup');
                    console.log(user);
                } catch (error) {
                    this.loading = false;
                    console.log('error signing up:', error);
                }
            }
        }

    };
</script>