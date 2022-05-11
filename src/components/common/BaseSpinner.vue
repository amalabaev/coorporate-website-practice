<template>
  <div class="spinner">
    <img src="@/assets/spinner/spinner.gif" alt="">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
  }
}
</style>