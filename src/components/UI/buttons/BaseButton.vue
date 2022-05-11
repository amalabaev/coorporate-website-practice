<template>
  <button class="button" :class="classes" :type="type">
    <span v-if="loading">Loading</span>
    <slot v-else/>
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: String
    }, 
    type: {
      type: String,
      default: 'submit'
    }, 
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>