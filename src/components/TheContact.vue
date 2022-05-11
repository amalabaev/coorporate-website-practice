<template>
  <div class="contact">
    <div class="container">
      <div class="contact__inner">
        <head-titles>
          <template v-slot:title>
            <h3>CONTACT</h3>
          </template>
          <template v-slot:subtitle>
            <h2>お問い合わせ</h2>
          </template>
        </head-titles>
        <div class="contact__text">Webサイトの制作のご依頼やお見積りなど、お気軽にご相談ください。</div>
        <div class="contact__button">
          <button-link href="/contact">MORE</button-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  padding: 80px 0;
  background-color: $bg-secondary;
  &__text {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 26px;
  }
  &__button {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 48em) {
    padding: 60px 0;
  }
}
</style>