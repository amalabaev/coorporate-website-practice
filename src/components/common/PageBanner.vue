<template>
  <div class="banner">
    <div class="banner__cap">
      <slot name=title></slot>
    </div>
    <div class="banner__sub">
      <slot name=subtitle></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  height: 240px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $accent;
  background-image: url(@/assets/images/bg/page-banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  &__cap {
    font-family: $font-family-secondary;
    font-weight: 700;
    font-size: 3.6rem;
    color: $color-light;
    opacity: 0.7;
  }
  &__sub {
    font-weight: 700;
    font-size: 1.3rem;
  }
  @media (max-width: 48em) {
    height: 190px;
    padding-top: 30px;
    &__cap {
      font-size: 3rem;
    }
    &__sub {
      font-size: 1.3rem;
    }
  }
}
</style>