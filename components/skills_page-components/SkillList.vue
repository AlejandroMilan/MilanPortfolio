<template>
  <section class="skill-list">
    <div class="container">
      <article
        v-for="skill in skills"
        :key="skill.name"
        class="skill-list-item"
      >
        <div class="skill-list-item-icon">
          <font-awesome-icon :icon="[skill.iconType, skill.iconName]" />
        </div>
        <div class="skill-list-item-title">
          <h2>{{ skill.name }}</h2>
          <small>{{ skill.experienceTime }}</small>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.skill-list .container
  @media(min-width: 768px)
    display: grid
    grid-template-columns: 50% 50%
    column-gap: 1rem
  @media(min-width: 992px)
    grid-template-columns: 33.3% 33.3% 33.3%

.skill-list-item
  width: 100%
  padding: 1rem 0
  margin: 1rem 0
  text-align: center
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)

  .skill-list-item-icon
    font-size: 2rem
</style>

<script lang="ts">
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faPhp,
  faNode,
  faVuejs,
  faAngular,
} from '@fortawesome/free-brands-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faHtml5, faCss3, faJsSquare, faPhp, faNode, faVuejs, faAngular)

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
          iconName: 'css3',
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
