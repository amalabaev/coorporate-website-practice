<template>
  <div class="slider">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 30000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
      }"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <top-slide :name="slide.name" :format="slide.format" :alt="slide.alt" :path="slide.path"></top-slide>
      </swiper-slide>
    </swiper>
    <div class="slider__content">
      <div class="slider__title">
        お客様の夢を叶える <br />
        Webサイトを制作
      </div>
      <button-link class="slider__button button--transparent" href="/contact">CONTACT</button-link>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { EffectFade, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import TopSlide from "@/components/sliders/TopSlide.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "slide1",
          format: 'jpg',
          alt: 'alter',
        },
        {
          id: 2,
          name: "slide2",
          format: 'jpg',
          alt: 'alter',
        },
        {
          id: 3,
          name: "slide3",
          format: 'jpg',
          alt: 'alter',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    TopSlide,
  },
  setup() {
    const onSwiper = () => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [EffectFade, Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.slider {
  position: relative;
  &__content {
    padding-top: 85px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: $color-light;
    margin-bottom: 25px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 26px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .bullet {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 1px solid $color-light;
    margin-right: 5px;
    &.active {
      background-color: $bg-primary;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__button {
    width: 220px;
  }
  @media (max-width: 48em) {
    &__content {
      padding: 20px;
      padding-top: 15px;
      left: 0;
      transform: translate(0, -50%);
    }
    &__title {
      font-size: 1.6rem;
      line-height: 1.7;
    }
    .swiper-pagination {
      bottom: 22px;
    }
  }
}
</style>