// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@unlok-co/nuxt-stripe'],
  stripe: {
    client: {
      key: 'pk_test_51P3MkWCzSI00rA1V0QfsOEhJFA0tx8eRTSVTnciAW2wgK9cr9Zk1Ra8oU4xwvJubsf1he4EbEvDfi33Gi5QS2prh00AGzSJTcW',
      // your api options override for stripe client side
      options: {

      }
    }
  }

})
