<template>
  <main>
    <AboutMe></AboutMe>
    <div class="container"><hr /></div>
    <LastJobs></LastJobs>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutMe from '~/components/about_page-components/AboutMe.vue'
import LastJobs from '~/components/about_page-components/LastJobs.vue'

export default Vue.extend({
  components: {
    AboutMe,
    LastJobs,
  },
})
</script>
