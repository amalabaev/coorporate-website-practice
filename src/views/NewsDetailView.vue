<template>
  <div class="news-page">
    <page-banner>
      <template v-slot:title><h2>NEWS</h2></template>
      <template v-slot:subtitle><h1>お知らせ</h1></template>
    </page-banner>
    <bread-crumbs></bread-crumbs>
    <h1>{{$route.params.id}}</h1>
    <div class="titleNews">{{title}}</div>
    <TheContact/>
  </div>
</template>

<script>
import TheContact from '@/components/TheContact.vue'
import scrollToTop from '@/mixins/scrollToTop.js'
import axios from 'axios'

export default {
  data() {
    return{
      title : String
    }
  },
  components: {
    TheContact
  },
  mixins: [scrollToTop],
  methods : {
    async fetchNewsTitle(){
      const titleNews = await axios.get('http://localhost:3000/news/'+ this.$route.params.id)
      this.title = titleNews.data.title;
    }
  },
  created(){
    this.fetchNewsTitle()
  }
}
</script>


<style lang="scss" scoped>
h1 {
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 4rem;
}

.titleNews{
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 200px;
}
</style>