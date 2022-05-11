<template>
  <div class="news-page">
    <page-banner>
      <template v-slot:title><h2>NEWS</h2></template>
      <template v-slot:subtitle><h1>お知らせ</h1></template>
    </page-banner>
    <bread-crumbs></bread-crumbs>
    <ListNews/>
    <TheContact/>
  </div>
</template>

<script>
import TheContact from '@/components/TheContact.vue'
import ListNews from '@/components/news/ListNews.vue'
import scrollToTop from '@/mixins/scrollToTop.js'

export default {
  components: {
    TheContact,
    ListNews
  },
  mixins: [scrollToTop]
}
</script>
