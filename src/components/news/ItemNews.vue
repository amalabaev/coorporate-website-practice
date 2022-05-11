<template>
  <router-link :to="'/news/' + id" class="item">
    <div class="item__date">{{ date }}</div>
    <div class="item__tag">{{ tag }}</div>
    <div class="item__title">{{ title }}</div>
  </router-link>
</template>

<script>
export default {
  props: ['date', 'title', 'tag', 'id']
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 14.5px;
  &:last-child {
    margin-bottom: 0;
  }
  &__date {
    font-family: $font-family-secondary;
    letter-spacing: 0.1em;
    width: 110px;
    flex-shrink: 0;
    font-size: 1.5rem;
  }
  &__tag {
    font-family: $font-family-secondary;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    min-width: 82px;
    border-radius: 50px;
    background-color: #E3F1F6;
    margin-right: 20px;
  }
  &__title {
    font-size: 1.5rem;
    letter-spacing: 0.05em;
  }
  @media (max-width: 48em) {
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 29.5px;
    &__date {
      width: 106px;
    }
    &__tag {
      font-size: 1.1rem;
      min-width: 82px;
      border-radius: 50px;
    }
    &__title {
      margin-top: 9px;
      width: 100%;
      font-size: 1.4rem;
      letter-spacing: 0.05em;
    }
  }
}
</style>