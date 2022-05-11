<template>
    <picture class="slide">
      <source  
        :srcset="require(`@/assets/images/slider/${name}@2x.${format}`) + ' 2x'"> 
      <img 
        :src="require(`@/assets/images/slider/${name}.${format}`)" 
        :alt="alt" 
        class="img"
      >
    </picture>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      format: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
      },
    },
  };
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  height: 100vh;
  width: 100%;
    display: block;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>