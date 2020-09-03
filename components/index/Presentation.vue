<template>
  <div class="presentation container">
    <h2 class="font-weight-light h5">
      Hello, my name is Alejandro and I am interested to work with you.
    </h2>
    <div class="container">
      <CTAButton />
    </div>
  </div>
</template>

<script>
import CTAButton from '@/components/layout/CTAButton'

export default {
  name: 'Presentation',
  components: {
    CTAButton,
  },
}
</script>

<style lang="sass" scoped>
.presentation
  width: 100%
  text-align: center
</style>
