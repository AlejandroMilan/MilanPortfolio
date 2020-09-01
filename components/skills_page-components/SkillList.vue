<template>
  <section class="skill-list">
    <div class="container">
      <article class="skill-list-item">
        <div class="skill-list-item-icon"></div>
        <div class="skill-list-item-title">
          <h2></h2>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      skills: [
        {
          name: 'HTML',
          iconName: '',
          iconType: '',
          experienceTime: '',
        },
        {
          name: 'CSS',
          iconName: '',
          iconType: '',
          experienceTime: '',
        },
        {
          name: 'Javascript',
          iconName: '',
          iconType: '',
          experienceTime: '',
        },
        {
          name: 'PHP',
          iconName: '',
          iconType: '',
          experienceTime: '',
        },
        {
          name: 'Node.js',
          iconName: '',
          iconType: '',
          experienceTime: '',
        },
        {
          name: 'Vue.js',
          iconName: '',
          iconType: '',
          experienceTime: '',
        },
        {
          name: 'Angular',
          iconName: '',
          iconType: '',
          experienceTime: '',
        },
      ],
    }
  },
})
</script>
