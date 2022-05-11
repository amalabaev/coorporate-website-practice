<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <ul class="footer__list">
          <li><router-link to="/news">お知らせ</router-link></li>
          <li><router-link to="/company">会社概要</router-link></li>
          <li><router-link to="/contact">お問い合わせ</router-link></li>
        </ul>
        <div class="footer__copyright">© HOGE DESIGN</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: #0E1419;
  &__list {
    display: flex;
    justify-content: center;
    margin-bottom: 21px;
    li {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      font-family: $font-family-secondary;
      font-weight: 700;
      font-size: 1.4rem;
      color: $color-light;
      text-decoration: none;
    }
  }
  &__copyright {
    font-family: $font-family-secondary;
    font-size: 1rem;
    color: #AAAAAA;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 48em) {
    padding-top: 54px;
    padding-bottom: 60px;
    &__list {
      margin-bottom: 33px;
    }
  }
}
</style>