<template>
  <div class="bread-crumbs">
    <div class="container">
      <div class="bread-crumbs__inner">
        <ul class="bread-crumbs__list">
          <li>
            <router-link to="/">HOME</router-link>
          </li>
          <li>
            <span class="current">{{ page }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: '',
      page: ''
    }
  },
  mounted() {
    this.page = this.$route.name.toUpperCase()
  }
}
</script>

<style lang="scss" scoped>
.bread-crumbs {
  background-color: $bg-secondary;
  &__inner {
    height: 45px;
    display: flex;
    align-items: center;
  }
  &__list {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      margin-right: 7px;
      &::after {
        content: ">";
        font-size: 0.9em;
        margin-left: 7px;
        margin-bottom: 0.3em;

      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
    a {
      color: $accent;
    }
  }
  @media (max-width: 48em) {
    &__inner {
      height: 25px;
    }
    &__list {
      li {
        font-size: 1.1rem;
        margin-right: 10px;
        &::after {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>