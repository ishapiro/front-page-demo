import Vue from "vue";
import VueRouter from "vue-router";
import FrontPage from "../components/FrontPage.vue";
import Account from "../components/Account.vue";
import Profile from "../components/Profile.vue";
import BecomeACreator from "../components/BecomeACreator.vue";
import BecomeAMember from "../components/BecomeAMember.vue";
import Customize3DModels from "../components/Customize3dModels.vue";
import SellYour3dModels from "../components/SellYour3dModels.vue";
import ManageSubscriptions from "../components/ManageSubscriptions.vue";
import  SignIn  from "../components/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPage,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/become-a-creator",
    name: "BecomeACreator",
    component: BecomeACreator,
  },
  {
    path: "/become-a-member",
    name: "BecomeAMember",
    component: BecomeAMember,
  },
  {
    path: "/customize-3d-models",
    name: "CustomizeModels",
    component: Customize3DModels,
  },
  {
    path: "/sell-your-3d-models",
    name: "SellModels",
    component: SellYour3dModels,
  },
  {
    path: "/manage-subscriptions",
    name: "ManageSubscriptions",
    component: ManageSubscriptions,
  },
  {
    path: "/Sign-In",
    name: "SignIn",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
