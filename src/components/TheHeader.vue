<template>
  <header class="header">
    <div class="header__inner">
      <router-link to="/" class="header__logo">
        <img src="@/assets/icons/logo.svg" alt="">
      </router-link>
      <div class="header__burger" @click="open">
        <img src="@/assets/icons/burger.svg" alt="">
      </div>
      <TheNav :active="isOpen" @close="close"/>
    </div>
  </header>
</template>

<script>
import TheNav from '@/components/TheNav.vue'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  components: {
    TheNav
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0 30px;
  &__inner {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    display: inline-block;
    width: 160px;
  }
  &__burger {
    width: 34px;
    cursor: pointer;
  }
  @media (max-width: 48em) {
    padding: 0 20px;
    &__inner {
      height: 70px;
    }
    &__logo {
      width: 130px;
    }
    &__burger {
      width: 34px;
    }
  }
}
</style>