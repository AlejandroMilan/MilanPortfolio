<template>
  <section class="other-skills">
    <div class="title container">
      <h2 class="font-weight-bold">{{ title }}</h2>
    </div>
    <div class="badges">
      <b-badge
        v-for="(skill, index) in skills"
        :key="index"
        variant="primary"
        >{{ skill }}</b-badge
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'OtherSkills',
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
}
</script>

<style lang="sass">
.other-skills
  padding: 2rem 0
  text-align: center

  .badge
    margin: 0 2px
</style>
