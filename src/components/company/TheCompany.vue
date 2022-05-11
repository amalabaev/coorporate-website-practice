<template>
  <div class="company">
    <div class="container">
      <div class="company__inner">
        <head-titles>
         <template v-slot:title><h3>メッセージ</h3></template>
        </head-titles>
        <h1 class="company__cap"><span>サイトのゴール = 夢を叶えること</span></h1>
        <div class="company__text">
          お客様の夢を叶えること。<br>
          それがWebサイトのゴールであり、私たちが目指すことです。<br>
          だからこそちゃんと成果を出すサイトを全力でお作りします。<br>
          お客様の笑顔を見たい。<br>
          夢を実現する手助けをさせてください。<br>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company {
  position: relative;
  padding-top: 90px;
  padding-bottom: 60px;
  text-align: center;
  &__inner {
    position: relative;
    z-index: 2;
  }
  &__cap {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-top: 26px;
    margin-bottom: 20px;
    span {
      display: inline;
      background-image: url(@/assets/icons/underline.svg);
      background-repeat: repeat;
      background-size: 1em;
      background-position: left top;
    }
  }
  &__text {
    font-size: 1.5rem;
    line-height: 1.7;
    letter-spacing: 0.05em;
    margin-bottom: 40px;
  }
  @media (max-width: 48em) {
    padding-top: 50px;
    padding-bottom: 10px;
    &__cap {
      font-size: 3.2rem;
      margin-top: 26px;
      margin-bottom: 27px;
    }
    &__text {
      font-size: 1.4rem;
      line-height: 1.6;
      letter-spacing: 0.05em;
      margin-bottom: 40px;
    }
  }
}
</style>