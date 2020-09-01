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
          iconName: 'html5',
          iconType: 'fab',
          experienceTime: '4 years',
        },
        {
          name: 'CSS',
          iconName: 'css3-alt',
          iconType: 'fab',
          experienceTime: '4 years',
        },
        {
          name: 'Javascript',
          iconName: 'js-square',
          iconType: 'fab',
          experienceTime: '4 years',
        },
        {
          name: 'PHP',
          iconName: 'php',
          iconType: 'fab',
          experienceTime: '4 years',
        },
        {
          name: 'Node.js',
          iconName: 'node',
          iconType: 'fab',
          experienceTime: '2 years',
        },
        {
          name: 'Vue.js',
          iconName: 'vuejs',
          iconType: 'fab',
          experienceTime: '1 year',
        },
        {
          name: 'Angular',
          iconName: 'angular',
          iconType: 'fab',
          experienceTime: '1 year',
        },
      ],
    }
  },
})
</script>
