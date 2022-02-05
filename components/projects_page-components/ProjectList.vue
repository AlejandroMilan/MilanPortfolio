<template>
  <section class="project-list">
    <div class="container">
      <article
        v-for="(project, index) in projects"
        :key="index"
        class="project-list-item"
      >
        <div class="project-list-item-image">
          <b-aspect aspect="16:9">
            <img :src="project.imageSource" alt="Project image" />
          </b-aspect>
        </div>
        <div class="project-list-item-description">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <div class="technologies-used">
            <small>Technologies used:</small>
            <b-badge
              v-for="technology in project.technologiesUsed"
              :key="technology"
              variant="primary"
              >{{ technology }}</b-badge
            >
          </div>
          <div class="repo-button">
            <b-button
              :disabled="!project.gitRepo"
              variant="primary"
              :href="project.gitRepo"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
              View in Github
              <small v-if="!project.gitRepo"
                >This is a private repository</small
              ></b-button
            >
          </div>
          <div v-if="project.projectLink" class="project-link">
            <b-link
              :href="project.projectLink"
              target="_blank"
              class="font-weight-bold"
              >Visit project</b-link
            >
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="sass" scoped>
img
  width: 100%

.project-list .container
  @media(min-width: 768px) and (max-width: 992px)
    display: flex
    column-gap: 1%

.project-list-item
  padding: 0 1rem 1rem 1rem
  margin: 2rem 0
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  @media(min-width: 768px) and (max-width: 992px)
    width: 50%
  @media(min-width: 992px)
    display: flex
    padding: 0

  .project-list-item-image
    @media(min-width: 992px)
      width: 70%

  .project-list-item-description
    @media(min-width: 992px)
      padding: 1rem

  .badge
    margin: 0 2px

  .repo-button
    padding: 1rem 0
</style>

<script lang="ts">
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faGithub)
export default Vue.extend({
  data: () => {
    return {
      projects: [
        {
          name: 'Custom Ecommerce project',
          description:
            'I am working on building a custom ecommerce engine for variety of business with an accessible cost.',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Nuxt.js',
            'Vuetify',
            'Express.js',
            'Mongodb',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2Fecommerce.jpeg?alt=media&token=3b581294-ab9f-4838-8cb4-982aeb49e74e',
        },
        {
          name: 'San Judas Tadeo Website',
          description:
            'I built the website for a clinic analyzis lab located at my natal city.',
          projectLink: 'https://labsanjudastadeo.com/',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Nuxt.js',
            'Bootstrap',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2FScreenshot_2021-01-24%20Laboratorio%20San%20Judas%20Tadeo%20An%C3%A1lisis%20cl%C3%ADnicos%20en%20San%20Juan%20del%20R%C3%ADo%2C%20Quer%C3%A9taro.png?alt=media&token=359f5c14-accc-4182-bc49-497af1466f87',
        },
        {
          name: 'Technical Panel',
          description:
            'Technical panel is a "Mobile First Administration Panel" focused to mobile devices repairs.',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Express.js',
            'Mongodb',
            'Vue.js',
            'Vuetify',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2FCaptura%20de%20pantalla%20(20).png?alt=media&token=0c02b524-89b0-40e5-9a1e-8eb05c285050',
          projectLink: 'https://www.t-panel.app/',
          gitRepo: 'https://github.com/AlejandroMilan/T-Panel_client',
        },

        {
          name: 'My portfolio',
          description: 'I created my own portfolio to take myself know.',
          gitRepo: 'https://github.com/AlejandroMilan/MilanPortfolio',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Nuxt.js',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2FScreen%20Shot%202020-09-01%20at%2016.37.24.png?alt=media&token=d5bcbcfb-e080-4363-b5e4-cff61c1fbcd1',
        },
        {
          name: 'Telefonía Feydi POS System',
          description:
            'POS System focused to get better repairs control in the business.',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Firebase services',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2FScreen%20Shot%202020-09-01%20at%2016.34.26.png?alt=media&token=f28afe47-20ae-44e7-830b-1b26c67fe4e3',
        },
        {
          name: 'Dev Tek Website',
          description:
            'Responsive website for Dev Tek, bussiness dedicated to create digital strategies for other business.',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Nuxt.js',
            'Bootstrap',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2FScreen%20Shot%202020-09-01%20at%2017.46.20.png?alt=media&token=30d86063-8183-4dc1-bdcd-fe9a5b7d1587',
        },
        {
          name: 'Telefonía Feydi Website',
          description: 'Feydi is a mobile devices solutions business.',
          projectLink: 'https://feydi.com.mx/',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Nuxt.js',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2FScreenshot_2021-01-24%20Telefon%C3%ADa%20Feydi%20Soluciones%20en%20telefon%C3%ADa%20m%C3%B3vil%20de%20calidad%20en%20Quer%C3%A9taro.png?alt=media&token=a483f97b-964c-4819-b0a7-fdb6a7848101',
        },
      ],
    }
  },
})
</script>
