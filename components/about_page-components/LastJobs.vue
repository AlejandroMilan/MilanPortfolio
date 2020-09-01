<template>
  <section id="last-jobs">
    <div class="container">
      <h2 class="font-weight-bold">{{ title }}</h2>
      <div class="last-jobs-container">
        <article
          v-for="(job, index) in jobs"
          :key="index"
          class="last-jobs-item"
        >
          <h3 class="font-weight-bold">{{ job.title }}</h3>
          <h4>{{ job.employer }}</h4>
          <small>{{ job.initDate }} to {{ job.finishDate }}</small>
          <p>{{ job.description }}</p>
          <div class="tech-used">
            <strong>I used:</strong>
            <b-badge
              v-for="tech in job.technologiesUsed"
              :key="tech"
              variant="primary"
              >{{ tech }}</b-badge
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: 'My last jobs',
      jobs: [
        {
          title: 'Web Developer',
          employer: 'Grupo SMIN',
          initDate: 'November, 2016',
          finishDate: 'March, 2018',
          description: 'Build a responsive website with catalog integrated.',
          technologiesUsed: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
        },
      ],
    }
  },
})
</script>
