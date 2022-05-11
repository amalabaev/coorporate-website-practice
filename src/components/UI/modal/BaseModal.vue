<template>
  <div class="modal" :class="{active: active}">
    <div class="modal__overlay" @click="close"></div>
    <div class="modal__inner">
      <slot></slot>
    </div>
  </div>
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
.modal {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: none;
  padding: 100px;
  &.active {
    display: flex;
  }
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &__inner {
    margin: auto;
    position: relative;
    z-index: 10;
  }
  @media (max-width: 48em) {
    padding: 20px;
    &.active {
      display: flex;
    }
  }
}
</style>