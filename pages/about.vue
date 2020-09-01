<template>
  <main>
    <AboutMe></AboutMe>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutMe from '~/components/about_page-components/AboutMe.vue'

export default Vue.extend({
  components: {
    AboutMe,
  },
})
</script>
