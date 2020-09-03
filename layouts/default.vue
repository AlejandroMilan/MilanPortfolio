<template>
  <div>
    <navbar />
    <nuxt class="app" />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="sass" scoped>
.app
  padding-top: 100px
  @media(min-width: 850px)
    padding-top: 150px
  @media(min-width: 992px)
    padding-top: 100px
</style>
