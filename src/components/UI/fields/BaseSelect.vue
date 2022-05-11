<template>
  <div class="field-wrap">
    <select 
      :name="name" id="" class="field select"
      :value="value || options[this.default].value"
      :class="{'field--error': error}"
      @change="validate($event.target.value)"
    >
      <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
      >{{ option.text }}</option>
    </select>
    <div v-if="error" class="text-error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    value: {
      type: String
    },
    name: {
      type: String,
    },
    message: {
      type: String,
    },
    reset: {
      type: Boolean,
      default: false
    },
    default: {
      type: Number,
    },
    validators: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      isTouched: false,
      error: false,
    };
  },
  methods: {
    validate(value) {

      for (let i = 0; i < this.validators.length; i++) {
          const error = this.validators[i](value, {
            value: this.options[0].value,
            message: this.message
          });
          
          if (error) {
            this.error = error;
            break;
          }
          this.error = false;
      }

      const isValid = !this.error

      this.$emit('onChange', value, this.name, isValid)
    },
  },
  watch: {
    reset() {
      console.log("watch")
      if (this.reset == true) {
          this.$emit('onChange', this.options[this.default].value, this.name, false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  font-family: inherit;
  font-weight: inherit;
  padding-right: 30px;
  background-image: url('@/assets/icons/select-arrow.svg');
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center right 27px;
  &.field--error {
    outline: none;
  }
  @media (max-width: 48em) {
    background-position: center right 18px;
  }
}
</style>