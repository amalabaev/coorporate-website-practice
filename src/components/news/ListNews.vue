<template>
  <div class="news">
    <div class="container">
      <div class="news__inner">
        <base-spinner class="spinner" v-show="loading">loading</base-spinner>
        <div class="news__list" :class="{loading: loading}">
          <ItemNews 
            v-for="item in news" 
            :key="item.id"
            :title="item.title"
            :date="item.date"
            :tag="item.tag"
            :id="item.id" 
          />
        </div>
        <the-pag :items="totalNews" :current="page" :limit="limit" @click="getQyertParamsFromURL" :disabled="loading"></the-pag>
      </div>
    </div>
  </div>
</template>

<script>
import ItemNews  from '@/components/news/ItemNews.vue'
import axios  from 'axios'

export default {
  data() {
    return {
      loading: true,
      limit: 10,
      page: 1,
      totalNews: 24,
      news: []
    }
  },
  components: {
    ItemNews
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      const response = await axios.get('http://localhost:3000/news', {
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })
      this.totalNews = +response.headers['x-total-count']
      this.news = response.data
      this.loading = false;
    },
    getQyertParamsFromURL() {
      const url_string = window.location.href;
      const url = new URL(url_string);
      const pageParam = url.searchParams.get("_page")
      const limitParam = url.searchParams.get("_limit")
      this.page = pageParam ? +pageParam : this.page
      this.limit = limitParam ? +limitParam : this.limit
    }
  },
  created() {
    this.getQyertParamsFromURL()
    this.fetchNews()
  },
  watch: {
    page() {
      console.log("watch")
      this.fetchNews()
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  padding-top: 60px;
  padding-bottom: 120px;
  &__inner {
    max-width: 910px;
    margin: 0 auto;
  }
  &__list {
    margin-bottom: 40px;
    position: relative;
  }
  .loading {
    filter: blur(5px);
  }
  .spinner {
    position: absolute;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
  }
  @media (max-width: 48em) {
    padding-top: 40px;
    padding-bottom: 100px;
    &__inner {
      max-width: 910px;
      margin: 0 auto;
    }
    &__list {
      margin-bottom: 40px;
    }
  }
}
</style>