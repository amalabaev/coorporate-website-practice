<template>
  <div class="pagination">
    <div class="pagination__list">
      <router-link
        v-for="page in pages"
        :key="page"
        :to="`/news?_page=${page}&_limit=${limit}`"
        class="pagination__item"
        :class="{active: current == page}"
      >{{page}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Number,
      default: 0,
    }, 
    limit: {
      type: Number,
      default: 1 
    }, 
    current: {
      type: Number,
      default: 1 
    }
  },
  data() {
    return {
      pages: 10
    }
  },
  methods: {
    countingPagesFromItems() {
      this.pages = Math.ceil(this.items / this.limit)
    }
  },
  created() {
    this.countingPagesFromItems()
    console.log(this.pages)
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  &[disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }
  &__list {
    display: flex;
    justify-content: center;
  }
  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 100%;
    margin-right: 10px;
    font-size: 2rem;
    color: $accent-light;
    background-color: $accent;
    &.active {
      pointer-events: none;
      background-color: $accent-light;
      color: $accent;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>