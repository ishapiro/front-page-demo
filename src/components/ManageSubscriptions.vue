<template>
  <v-container fluid>
    <!-- now the search dialog -->
    <v-row justify="space-around" class="mb-0 pb-0 mr-0 pr-0">
      <v-col cols="12" md="6">
        <p
          :style="{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }"
        >
          Manage Subscriptions
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div id="zf-widget-root-id"></div>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-spacer />
      <v-col cols="12" md="3">
        <v-btn
          class="px-15 ma-10"
          rounded
          color="primary"
          dark
          target="_blank"
          href="https://subscriptions.zoho.com/portal/makewithtechtest"
          :x-large="$vuetify.breakpoint.mdAndUp"
          :small="$vuetify.breakpoint.xsAndUp"
        >
          Manage Your Subscriptions
        </v-btn>
      </v-col>
      <v-spacer />
      </v-row>
  </v-container>
</template> 

<script>
export default {
  name: "ManageSubscriptions",
  data() {
    return {};
  },
  mounted: async function () {
    console.trace();
    var pricingTableComponentOptions = {
      id: "zf-widget-root-id",
      product_id:
        "2-cc60dad600f750cd00cb4f0966e716cbd78a635bcf08d36aec43a18352f285a195e1203d7a19dcb158bcad6fd428a6fd734729c385142f2d0b00f51473f23b3d",
      template: "elegant",
      most_popular_plan: "",
      is_group_by_frequency: false,
      isFrequencyDropdown: false,
      isCurrencyDropdown: false,
      can_show_plan_freq: true,
      pricebooks: [
        {
          pricebook_id: "3550152000000011001",
          currency_code: "USD",
          currency_symbol: "$",
          plans: [
            {
              plan_code: "ty",
              url: "https://subscriptions.zoho.com/subscribe/734729c385142f2dea7a2b59efad6afe2d1433f07e0c1f74ad482bf477cf719e/ty",
              recurring_price: "2",
              recurring_price_formatted: "$2.00",
              hp_settings_id: "3550152000000024003",
            },
            {
              plan_code: "mth",
              url: "https://subscriptions.zoho.com/subscribe/734729c385142f2dea7a2b59efad6afe2d1433f07e0c1f74ad482bf477cf719e/mth",
              recurring_price: "15",
              recurring_price_formatted: "$15.00",
              hp_settings_id: "3550152000000024003",
            },
            {
              plan_code: "yr",
              url: "https://subscriptions.zoho.com/subscribe/734729c385142f2dea7a2b59efad6afe2d1433f07e0c1f74ad482bf477cf719e/yr",
              recurring_price: "99",
              recurring_price_formatted: "$99.00",
              hp_settings_id: "3550152000000024003",
            },
          ],
        },
      ],
      group_options: [],
      plans: [
        { plan_code: "ty", selectedAddons: [] },
        { plan_code: "mth", selectedAddons: [] },
        { plan_code: "yr", selectedAddons: [] },
      ],
      theme: { color: "#F56E06", theme_color_light: "" },
      button_text: "Subscribe",
      product_url: "https://subscriptions.zoho.com",
      price_caption: "Lets learn something together.",
      language_code: "en",
      open_inSameTab: false,
    };
    // eslint-disable-next-line no-undef
    ZFWidget.init("zf-pricing-table", pricingTableComponentOptions);
  },
};
</script>

<style>
</style>