<template>
  <label :for="forid" class="label">
    <slot></slot>
    <span v-if="required" class="label__note">{{ '*必須' }}</span>
    <span v-if="note" class="label__note">{{ note }}</span>
  </label>
</template>

<script>
export default {
  props: {
    forid: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    note: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  letter-spacing: 0.07em;
  color: #333333;
  &__note {
    display: inline-block;
    font-size: 1.2rem;
    color: $accent;
    margin-left: 15px;
  }
  @media (max-width: 48em) {
    font-size: 1.6rem;
    letter-spacing: 0.07em;
    margin-bottom: 10px;
    &__note {
      display: inline-block;
      font-size: 1.2rem;
      color: $accent;
      margin-left: 15px;
    }
  }
}
</style>