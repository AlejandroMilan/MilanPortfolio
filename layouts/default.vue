<template>
  <div>
    <Navbar></Navbar>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/layout/Navbar.vue'
export default Vue.extend({
  components: {
    Navbar,
  },
})
</script>
