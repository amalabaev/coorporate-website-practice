<template>
  <div class="head-titles">
    <div class="head-titles__cap">
      <slot name=title></slot>
    </div>
    <div class="head-titles__sub">
      <slot name=subtitle></slot>
    </div>
  </div>
</template>
<style lang="scss">
.head-titles {
  text-align: center;
  &__cap {
    font-family: $font-family-secondary;
    font-weight: 600;
    font-size: 3.6rem;
    color: $accent;
    letter-spacing: 0.05em;
    margin-bottom: 2px;
  }
  &__sub {
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 0.12em;
  }
  @media (max-width: 48em) {
    text-align: center;
    &__cap {
      font-size: 3rem;
      letter-spacing: 0.05em;
      margin-bottom: 2px;
    }
    &__sub {
      letter-spacing: 0.12em;
    }
  }
}
</style>