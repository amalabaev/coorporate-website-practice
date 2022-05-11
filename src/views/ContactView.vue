<template>
  <div class="company-page">
    <page-banner>
      <template v-slot:title><h2>CONTACT</h2></template>
      <template v-slot:subtitle><h1>お問い合わせ</h1></template>
    </page-banner>
    <bread-crumbs></bread-crumbs>
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '@/components/forms/ContactForm.vue'
import scrollToTop from '@/mixins/scrollToTop.js'

export default {
  components: {
    ContactForm
  },
  mixins: [scrollToTop]
}
</script>
