<template>
  <router-link :to="href" class="button" :class="classes">
    <slot/>
  </router-link>
</template>

<script>
export default {
  props: {
    classes: {
      type: String
    }, 
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>