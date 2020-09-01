<template>
  <div class="presentation container">
    <h2 class="font-weight-light h5">
      Hello, my name is Alejandro and I am interested to work with you.
    </h2>
    <div class="container">
      <CTAButton></CTAButton>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.presentation
  width: 100%
  text-align: center
</style>

<script lang="ts">
import Vue from 'vue'
import CTAButton from '~/components/layout/CTAButton.vue'

export default Vue.extend({
  components: {
    CTAButton,
  },
})
</script>
