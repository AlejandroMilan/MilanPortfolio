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
          <h3>{{ job.title }}</h3>
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

<style lang="sass" scoped>
.last-jobs-container
  @media(min-width: 992px)
    display: grid
    grid-template-columns: 50% 50%

.last-jobs-item
  padding: 1rem 0

  .badge
    margin: 0 2px
</style>

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
        {
          title: 'Web Developer and TI Manager',
          employer: 'Telfonía Feydi',
          initDate: 'June, 2019',
          finishDate: 'April, 2020',
          description:
            'Build a responsive website and create POS system focused in phone repairs. Integrate digital strategies to improve the team productivity.',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'TS',
            'Node.js',
            'Vue.js',
            'Firebase services',
          ],
        },
      ],
    }
  },
})
</script>
