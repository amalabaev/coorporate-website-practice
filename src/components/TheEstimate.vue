<template>
  <div class="estimate">
    <div class="container">
      <div class="estimate__inner">
        <head-titles>
          <template v-slot:title>
            <h3>ESTIMATE</h3>
          </template>
          <template v-slot:subtitle>
            <h2>自動見積もり</h2>
          </template>
        </head-titles>
        <div class="estimate__form">
          <EstimateForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EstimateForm from "@/components/forms/EstimateForm.vue"

export default {
  components: {
    EstimateForm
  }
}
</script>

<style lang="scss">
.estimate {
  padding-top: 100px;
  padding-bottom: 120px;
  &__form {
    width: 400px;
    margin: 0 auto;
    margin-top: 37px;
  }
  @media (max-width: 48em) {
    .head-titles__cap {
      font-size: 3.8rem;
      letter-spacing: 0.03em;
    }
    padding-top: 66px;
    padding-bottom: 100px;
    &__form {
      width: 100%;
      margin: 0 auto;
      margin-top: 37px;
    }
    
  }
}
</style>