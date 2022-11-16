<template>
        <v-card elevation="5" class="px-14" rounded-xl>
            <v-form v-model="valid" ref="form" @submit.prevent="submitForgot" lazy-validation>
                <v-row class=" mt-16">
                    <v-col cols="12" class="align-self-center text-center text-md-left">
                        <div class="text-h3 primary--text text-center font-weight-bold pt-10">
                            Account Management
                            <div class="black--text font-weight-bold text-h4 mt-3">Reset your password
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
                    <v-col cols="12" class="text-center">
                        <v-btn block x-large type="submit" :loading="loading" :disabled="loading"
                            class="text-subtitle-1 secondary white--text">
                            Send Code
                        </v-btn>
                        <div class="text-subtitle-1 black--text pt-6 pb-8">
                            Dont have an account?
                            <v-btn link @click="$emit('changeTab','signin')" plain
                                class="secondary--text text-decoration-none">
                                Back to sign in
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
        Auth
    } from "aws-amplify";
    export default {
        name: "ForgotPassword",
        data() {
            return {
                valid: true,
                forgot_page: true,
                loading: false,
                show1: false,
                username: "",
                userNameRules: [
                    v => !!v || "Username field is required",
                ],
            };
        },
        methods: {
            async submitForgot() {
                if (!this.$refs.form.validate()) {
                    return;
                }
                this.loading = true;
                await Auth.forgotPassword(this.username)
                .then((result) => {
                        this.loading = false;
                        this.$emit('email', this.username);
                        this.$emit('changeTab', 'reset-password');
                        console.log('Code sent successfully',result);
                    })
                    .catch(error => {
                        this.loading = false;
                        this.$root.$emit('alert-message', error.message);
                    });
                
            }
        }
    };
</script>