<template>
  <div class="form">
    <div class="container">
      <div class="form__cap">Webサイトの制作のご依頼など、お気軽にご相談ください。</div>
      <form class="form__form" @submit.prevent>
        <div class="form__inner">
          <div class="form__item">
            <base-label :required="true">お問い合わせ種別</base-label>
            <div class="form__raido-list">
              <base-radio
                v-for="item in formData.radioName.values"
                :key="item.value"
                @onChange="checkField"
                :value="item.value"
                :reset="isReset"
                :default="formData.radioName.default"
                :checked="item.value == formData.radioName.value"
                name="radioName"
                class="form__radio"
              >{{ item.text }}</base-radio>
            </div>
          </div>
          <div class="form__item">
            <base-label :required="true">お名前</base-label>
            <base-field 
              type="name"
              name="name"
              :reset="isReset"
              placeholder="愛媛太郎"
              :value="formData.name.value"
              :validators="[isEmpty, maxlength]"
              :maxlength="formData.name.maxlength"
              @onInput="checkField"
            />
          </div>
          <div class="form__item">
            <base-label :required="true">メールアドレス</base-label>
            <base-field 
              name="email"
              :reset="isReset"
              placeholder="hoge@example.com" 
              :value="formData.email.value"
              :validators="[isEmpty , isEmail, maxlength]"
              :maxlength="formData.email.maxlength"
              @onInput="checkField"
            />
          </div>
          <div class="form__item">
            <base-label>想定ページ数</base-label>
            <base-field 
              type="tel"
              name="tel"
              :reset="isReset"
              placeholder="999999999"
              :value="formData.tel.value"
              :validators="[isTel]"
              :maxlength="formData.tel.maxlength"
              @onInput="checkField"
            />
          </div>
          <div class="form__item form__item--textarea">
            <base-label :required="true">お問い合わせ内容</base-label>
            <base-field 
              type="textarea"
              name="textarea"
              :reset="isReset"
              :value="formData.textarea.value"
              :validators="[isEmpty, maxlength]"
              :maxlength="formData.textarea.maxlength"
              @onInput="checkField"
            />
          </div>
          <div class="form__item">
            <base-label :required="true">HOGEをどちらでお知りになりましたか？</base-label>
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
              :disabled="isUploading || !isFormValid" 
              :loading="isUploading"
              @click="sendFormdata('applications')"
            >送信する</base-button>
          </div>
          <div class="form__message" v-if="isSend">{{messages.status}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import validators from "@/mixins/validators"
import formValidator from "@/mixins/formValidator"
import dtos from "@/mixins/dtos";

export default {
  data() {
    return {
      formData: {
        radioName: {
          type: 'radio',
          value: "1",
          default: "1",
          isValid: true,
          required: false,
          values: [
            {
              value: '1',
              text: 'お仕事のご依頼・ご相談'
            },
            {
              value: '2',
              text: '採用関連'
            },
            {
              value: '3',
              text: 'その他'
            },
          ]
        },
        name: {
          value: '',
          isValid: false,
          required: true,
          maxlength: 30
        },
        email: {
          value: '',
          isValid: false,
          required: true,
          maxlength: 50 
        },
        tel: {
          value: '',
          isValid: false,
          required: false,
          maxlength: 11
        },
        textarea: {
          value: '',
          isValid: false,
          required: true,
          maxlength: 300
        },
        select: {
          value: null,
          default: 0,
          isValid: false,
          required: true,
          message: "my error message",
          options: [
            {
              value: '1',
              text: '選択してください',
            },
            {
              value: '2',
              text: 'Google/Yahoo検索',
            },
            {
              value: '3',
              text: 'SNS',
            },
            {
              value: '4',
              text: 'ブログ',
            },
            {
              value: '5',
              text: '友人や知人',
            },
            {
              value: '6',
              text: 'その他',
            }
          ]
        },
      },
    }
  },
  mixins: [validators, formValidator, dtos]
}
</script>

<style lang="scss" scoped>
.form {
  padding-top: 66px;
  padding-bottom: 120px;
  &__form {
    padding: 88px 90px;
  }
  .label {
    margin-bottom: 9px;
  }
  &__item {
    .field-wrap {
      width: 300px;
    }
    &--textarea {
      .field-wrap {
        width: 600px;
      }
    }
  }
  @media (max-width: 48em) {
    padding-top: 66px;
    padding-bottom: 100px;
    &__form {
      padding: 30px 30px;
    }
    .label {
      margin-bottom: 9px;
    }
    &__radio {
      width: 100%;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__item {
      margin-bottom: 40px;
      .field-wrap {
        width: 100%;
      }
      &--textarea {
        .field-wrap {
          width: 100%;
        }
      }
    }
    &__button {
      margin-top: 50px;
    }
  }
}
</style>