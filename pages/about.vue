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
  head() {
    return {
      title: 'About me | MILAN',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Some things about me, my passions and my las jobs.',
        },
      ],
    }
  },

  transition: {
    name: 'slide-fade',
    mode: 'out-in',
  },
})
</script>
