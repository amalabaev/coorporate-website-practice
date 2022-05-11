<template>
  <div class="home">
    <TopSlider/>
    <TheServices/>
    <TopCompany/>
    <TheEstimate/>
    <TheContact/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopSlider from '@/components/sliders/TopSlider.vue'
import TheServices from '@/components/services/TheServices.vue'
import TopCompany from '@/components/company/TopCompany.vue'
import TheEstimate from '@/components/TheEstimate.vue'
import TheContact from '@/components/TheContact.vue'
import scrollToTop from '@/mixins/scrollToTop.js'

export default {
  name: 'HomeView',
  components: {
    TopSlider,
    TheServices,
    TopCompany,
    TheEstimate,
    TheContact
  },
  mixins: [scrollToTop]
}
</script>
