<template>
  <div>
    <Navbar></Navbar>
    <Nuxt class="nuxt" />
  </div>
</template>

<style lang="sass" scoped>
.nuxt
  padding-top: 100px
  @media(min-width: 850px)
    padding-top: 150px
  @media(min-width: 992px)
    padding-top: 100px
</style>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/layout/Navbar.vue'
export default Vue.extend({
  components: {
    Navbar,
  },
})
</script>
