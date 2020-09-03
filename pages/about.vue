<template>
  <main>
    <about-me />
    <div class="container"><hr /></div>
    <last-jobs />
  </main>
</template>

<script>
import AboutMe from '@/components/about/AboutMe'
import LastJobs from '@/components/about/LastJobs'

export default {
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
}
</script>
