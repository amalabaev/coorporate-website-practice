<template>
  <div class="field-wrap">
      <input 
        v-if="type !== 'textarea'"
        :type="type" 
        :placeholder="placeholder" 
        :value="value"
        :class="{'field--error': error}"
        @input="validate($event.target.value)"
        @blur="touched($event.target.value)"
        class="field"
      >
      <textarea 
        v-if="type === 'textarea'"
        name="" 
        id="" 
        :placeholder="placeholder" 
        :value="value"
        :class="{
          'field--error': error,
        }"
        @input="validate($event.target.value)"
        @blur="touched($event.target.value)"
        class="field field--textarea"
      ></textarea>
      <div v-if="error" class="text-error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    reset: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
    },
    maxlength: {
      type: Number,
      default: 50
    },
    minlength: {
      type: Number,
      default: 3
    },
    validators: {
      type: Array,
    }
  },
  data() {
    return {
      isTouched: false,
      error: false,
    };
  },
  methods: {
    touched(value) {
      this.isTouched = true;
      this.validate(value);
    },
    validate(value) {
      if (!this.isTouched) return;

      for (let i = 0; i < this.validators.length; i++) {
          const error = this.validators[i](value, {
            maxlength: this.maxlength,
            minlength: this.minlength,
          });
          
          if (error) {
            this.error = error;
            break;
          }
          this.error = false;
      }

      const isValid = this.isTouched && !this.error
      
      this.$emit('onInput', value, this.name, isValid)
    },
  },
  watch: {
    reset() {
      console.log("watch")
      if (this.reset == true) {
          this.$emit('onInput', '', this.name, false)
      }
    }
  }
}
</script>