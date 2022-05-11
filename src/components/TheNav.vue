<template>
    <nav class="nav" :class="{active: active}">
      <div class="nav__inner">
        <div class="nav__list" @click="close">
          <router-link to="/news">お知らせ</router-link>
          <router-link to="/company">会社概要</router-link>
          <router-link to="/contact">お問い合わせ</router-link>
        </div>
        <button type="button" class="nav__button" @click="close">
          <img src="@/assets/icons/close.svg" alt="">
        </button>
      </div>
    </nav>
</template>

<script>
export default {
  props: ['active'],
  methods: {
    close() {
      this.$emit('close', false)
      this.body.classList.remove('overflow-hidden')
    },
  },
  mounted() {
    this.body = document.querySelector('body')
  },
  watch: {
    active() {
      if (this.active) {
        this.body.classList.add('overflow-hidden')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  overflow: auto;
  background-color: $accent;
  display: none;
  &.active {
    display: block;
  }
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__button {
    position: absolute;
    right: 15px;
    top: 15px;
    padding: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    img {
      width: 17px;
    }
  }
  a {
    font-size: 2rem;
    padding: 20px 35px;
    color: $color-light;
  }
  @media (max-width: 48em) {
    a {
      font-size: 1.6rem;
      padding: 10px 0px;
    }
  }
}
</style>