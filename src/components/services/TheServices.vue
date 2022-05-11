<template>
  <div class="services">
    <div class="container">
      <div class="services__inner">
        <head-titles>
          <template v-slot:title><h1>SERVICE</h1></template>
          <template v-slot:subtitle><h2>事業内容</h2></template>
        </head-titles>
        <div class="services__list">
          <ItemService 
            v-for="service in services" 
            :key="service.id"
            :name="service.name"
            :format="service.format"
            :alt="service.alt"
            :title="service.title"
            :text="service.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemService from "@/components/services/ItemService.vue"

export default {
  data() {
    return {
      services: [
        {
          id: 1,
          name: "service1",
          format: 'jpg',
          alt: 'alter',
          title: 'Webサイト制作',
          text: '新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。'
        },
        {
          id: 2,
          name: "service2",
          format: 'jpg',
          alt: 'alter',
          title: 'Webサイト運用',
          text: 'サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案をいたします。'
        },
        {
          id: 3,
          name: "service3",
          format: 'jpg',
          alt: 'alter',
          title: 'アプリ開発',
          text: 'スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。'
        },
      ]
    }
  },
  components: {
    ItemService
  }
}
</script>

<style lang="scss" scoped>
.services {
  padding-top: 120px;
  padding-bottom: 100px;
  &__list {
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
  @media (max-width: 48em) {
    padding-top: 80px;
    padding-bottom: 65px;
    &__list {
      margin-top: 36px;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 40px;
    }
  }
}
</style>