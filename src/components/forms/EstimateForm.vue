<template>
  <div class="form">
    <form class="form__form" @submit.prevent>
      <div class="form__inner">
        <div class="form__item">
          <base-label :required="true">フォームの有無</base-label>
          <div class="form__raido-list">
            <base-radio
              v-for="item in formData.radio.values"
              :key="item.value"
              @onChange="checkField"
              :value="item.value"
              :reset="isReset"
              :default="formData.radio.default"
              :checked="item.value == formData.radio.value"
              name="radio"
              class="form__radio"
            >{{ item.text }}</base-radio>
          </div>
        </div>
        <div class="form__item">
          <base-label :required="true">想定ページ数</base-label>
          <base-select
            :options="formData.select.options"
            :value="formData.select.value"
            name="select"
            :validators="[isSelected]"
            :message="formData.select.message"
            :default="formData.select.default"
            :reset="isReset"
            @onChange="checkField"
          ></base-select>
        </div>
        <div class="form__button">
          <base-button 
            :disabled="!isFormValid" 
            @click="estimate"
          >見積もりする</base-button>
        </div>
        <div class="form__message" v-if="isSend">{{messages.status}}</div>
      </div>
    </form>
    <Teleport to="body">
      <base-modal :active="isOpen" @close="close">
        <div class="result">
          <p class="result__title">合計金額(税込)</p>
          <p class="result__price">¥{{ estimatedPrice }}</p>
          <p class="result__date">見積もり日：{{ date.y }}{{ date.m }}{{ date.d }}</p>
          <button type="button" class="result__copy" @click="copy">
            クリップボードにコピーする
            <span v-if="isCopied">copied</span>
          </button>
        </div>
      </base-modal>
    </Teleport>
  </div>
</template>

<script>
import validators from "@/mixins/validators";
import formValidator from "@/mixins/formValidator";
import dtos from "@/mixins/dtos";

export default {
  data() {
    return {
      isOpen: false,
      clipboard: '',
      estimatedPrice: '',
      isCopied: false,
      date: {
        y: '',
        m: '',
        d: '',
      },
      formData: {
        radio: {
          type: 'radio',
          value: "20000",
          default: "20000",
          isValid: true,
          required: false,
          values: [
            {
              value: "20000",
              text: "なし",
            },
            {
              value: "40000",
              text: "あり",
            },
          ],
        },
        select: {
          type: 'select',
          value: null,
          default: 0,
          isValid: false,
          required: true,
          message: "my error message",
          options: [],
        },
      },
    };
  },
  methods: {
    estimate() {

      let count = 0
      count = this.formData.select.value * this.formData.radio.value
      count = count * (1 + 10/100)
      this.estimatedPrice = count.toLocaleString('ja', {
        style: 'currency',
        currency: 'YEN',
        maximumFractionDigits: 0
      }).replace(/YEN/, '')
      this.open()
    },
    open() {
      this.isOpen = true
    },
    close() {
      console.log('close')
      this.isOpen = false
    },
    options(number = 10) {
      const arr = [{value: "-",text: "-"}]

      for ( let i = 1; i < number; i++) {
        arr.push({
          value: i + '',
          text: i + '枚'
        })
      }
      const date = new Date()
      this.date.y = date.toLocaleString('ja', {year:'numeric'})
      this.date.m = date.toLocaleString('ja', {month:'numeric'})
      this.date.d = date.toLocaleString('ja', {day:'numeric'})
      this.formData.select.options = arr
    },
    copy() {
      const radioText = this.formData.radio.values.find(
        item => this.formData.radio.value === item.value
      ).text
      const listCount = this.formData.select.value
      const date = `${this.date.y}${this.date.m}${this.date.d}`
      this.clipboard = `フォームの有無：${radioText}\n想定ページ：${listCount}枚\n合計金額(税込)：${this.estimatedPrice}\n(見積もり日時：${date})`
      console.log(this.clipboard)
      navigator.clipboard.writeText(this.clipboard).then(() => {
        this.isCopied = true
        setTimeout(() => {this.isCopied = false}, 1000)
      }, function(err) {
        this.isCopied = false
        console.error('Async: Could not copy text: ', err);
      });
    }
  },
  computed: {
  },
  created() {
    this.options()
  },
  mixins: [validators, formValidator, dtos],
};
</script>

<style lang="scss" scoped>
.form {
  &__form {
    padding: 56px 66px;
    padding-bottom: 60px;
    border-radius: 15px;
    background-color: $bg-secondary;
  }
  @media (max-width: 48em) {
    &__form {
      padding: 54px 29px;
      padding-bottom: 60px;
      border-radius: 15px;
      background-color: $bg-secondary;
    }
  }
}
.result {
  text-align: center;
  padding: 50px 55px;
  color: $color-primary;
  background-color: $bg-primary;
  border-radius: 16px;
  &__title {
    font-size: 1.6rem;
    margin-bottom: 5px;
  }
  &__price {
    font-family: $font-family-secondary;
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  &__date {
    font-size: 1.2rem;
    margin-bottom: 14px;
  }
  &__copy {
    position: relative;
    font-size: 1.4rem;
    font-weight: 700;
    color: $accent;
    background-color: transparent;
    border: none;
    span {
      position: absolute;
      top: 110%;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 400;
      color: $color-light;
      padding: 4px 10px;
      border-radius: 5px;
      background-color: $bg-dark;
    }
  }
  @media (max-width: 48em) {
    padding: 50px 50px;
    &__title {
      margin-bottom: 5px;
    }
    &__price {
      margin-bottom: 5px;
    }
    &__date {
      font-size: 1.2rem;
      margin-bottom: 14px;
    }
    &__copy {
      font-size: 1.4rem;
    }
  }
}
</style>