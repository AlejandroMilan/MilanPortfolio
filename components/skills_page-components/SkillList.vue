<template>
  <section class="skill-list">
    <div class="container">
      <article class="skill-list-item" v-for="skill in skills" :key="skill.name">
        <div class="skill-list-item-icon">
	  <font-awesome-icon :icon="[skill.iconType, skill.iconName]" />
	</div>
        <div class="skill-list-item-title">
          <h2>{{skill.name}}</h2>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faCss3, faJsSquare, faPhp, faNode, faVuejs, faAngular } from '@fortawesome/free-brands-svg-icons'
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
