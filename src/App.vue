<template>
  <div>
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import "@/assets/fonts/fonts.scss";

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/button.scss";
@import "@/assets/styles/field.scss";
@import "@/assets/styles/form.scss";
nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  font-size: 30px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  font-family: $font-family-primary;
  color: $color-primary;
}
body {
  margin: 0;
  padding: 0;
  font-size: $font-size;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  border: none;
  color: inherit;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
}
img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: inline-block;
}
picture {
  display: block;
}
h1,h2,h3, h4, h5, h6, p {
  font: inherit;
  margin: 0;
}
ul, ol, li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.overflow-hidden {
  overflow: hidden;
}
.container {
  width: 100%;
  padding: 0 30px;
  max-width: 1170px;
  margin: 0 auto;
  @media (max-width: 48em) {
    padding: 0 20px;
  }
}

</style>
