<template>
  <div class="company">
    <div class="container">
      <div class="company__inner">
        <head-titles>
         <template v-slot:title><h3>COMPANY</h3></template>
         <template v-slot:subtitle><h2>私たちについて</h2></template>
        </head-titles>
        <h1 class="company__cap"><span>サイトのゴール = 夢を叶えること</span></h1>
        <div class="company__text">
          お客様の夢を叶えること。<br>
          それがWebサイトのゴールであり、私たちが目指すことです。<br>
          だからこそちゃんと成果を出すサイトを全力でお作りします。<br>
          お客様の笑顔を見たい。<br>
          夢を実現する手助けをさせてください。<br>
        </div>
        <button-link href="/company">MORE</button-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company {
  position: relative;
  padding: 120px 0;
  text-align: center;
  &__inner {
    position: relative;
    z-index: 2;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    height: calc(100% - 83px);
    transform: skew(0, -3deg);
    background-color: $bg-accent;
  }
  &__cap {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-top: 26px;
    margin-bottom: 29px;
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
    line-height: 1.8;
    margin-bottom: 29px;
  }
  @media (max-width: 48em) {
    padding: 115px 0;
    &::before {
      top: 45px;
      height: calc(100% - 90px);
      transform: skew(0, -12deg);
    }
    &__cap {
      font-size: 3.2rem;
      letter-spacing: 0.05em;
      margin-top: 26px;
      margin-bottom: 34px;
    }
    &__text {
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.65;
      margin-bottom: 24px;
    }
  }
}
</style>