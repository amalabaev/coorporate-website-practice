<template>
  <label class="radio">
    <input 
      type="radio" 
      class="radio__button" 
      :value="value" 
      :name="name" 
      hidden 
      :checked="checked"
      @change="change($event.target.value)"
    >
    <span class="radio__span"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    default: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false
    },
    reset: {
      type: Boolean,
      default: false
    },
  },
  
  methods: {
    change(value) {
      if (this.reset == true) {
          return
      }
      this.$emit('onChange', value, this.name, true)
    },
  },
  watch: {
    reset() {
      console.log("watch")
      if (this.reset == true && this.default == this.value) {
        console.log("reset radio")
        this.$emit('onChange', this.default, this.name, true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.radio {
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  &__button:checked + span {
    background-color: $accent;
    border-width: 3px;
  }
  &__span {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: $bg-secondary;
    border: 1px solid $border-color;
    margin-right: 3px;
  }
}
</style>