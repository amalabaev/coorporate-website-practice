<template>
  <div class="service">
    <picture class="service__img">
      <source  
        :srcset="require(`@/assets/images/services/${name}@2x.${format}`) + ' 2x'"> 
      <img 
        :src="require(`@/assets/images/services/${name}.${format}`)" 
        :alt="alt" 
        class="img"
      >
    </picture>
    <div class="service__title">{{ title }}</div>
    <div class="service__text">{{ text }}</div>
  </div>
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
      title: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    }
  };
</script>

<style lang="scss" scoped>
.service {
  &__img {
    display: block;
    height: 220px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 28px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-family: $font-family-secondary;
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 15px;
  }
  &__text {
    font-size: 1.5rem;
    letter-spacing: 0.05em;
  }
  @media (max-width: 48em) {
    &__img {
      height: 210px;
      margin-bottom: 20px;
    }
    &__title {
      margin-bottom: 4px;
    }
    &__text {
      font-size: 1.4rem;
      line-height: 1.8;
      letter-spacing: 0.05em;
    }
  }
}
</style>