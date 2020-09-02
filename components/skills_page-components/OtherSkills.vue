<template>
  <section class="other-skills">
    <div class="title container">
      <h2 class="font-weight-bold">{{ title }}</h2>
    </div>
    <div class="badges">
      <b-badge v-for="skill in skills" :key="skill" variant="primary">{{
        skill
      }}</b-badge>
    </div>
  </section>
</template>

<style lang="sass">
.other-skills
  padding: 2rem 0
  text-align: center

  .badge
    margin: 0 2px
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: 'Other skills',
      skills: [
        'SQL',
        'MySQL',
        'MongoDB',
        'Firebase services',
        'REST APIs Development',
	'Git',
	'Docker',
	'Bootstrap',
	'Bulma.css',
	'Vuetify',
      ],
    }
  },
})
</script>
