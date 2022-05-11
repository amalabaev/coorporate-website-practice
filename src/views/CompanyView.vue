<template>
  <div class="company-page">
    <page-banner>
      <template v-slot:title><h2>COMPANY</h2></template>
      <template v-slot:subtitle><h1>私たちについて</h1></template>
    </page-banner>
    <bread-crumbs></bread-crumbs>
    <TheCompany/>
    <ProfileCompany/>
    <TheMap/>
    <TheContact/> 
  </div>
</template>

<script>
import TheContact from '@/components/TheContact.vue'
import TheCompany from '@/components/company/TheCompany.vue'
import ProfileCompany from '@/components/company/ProfileCompany.vue'
import TheMap from '@/components/TheMap.vue'
import scrollToTop from '@/mixins/scrollToTop.js'

export default {
  components: {
    TheContact,
    TheCompany,
    ProfileCompany,
    TheMap
  },
  mixins: [scrollToTop]
}
</script>
