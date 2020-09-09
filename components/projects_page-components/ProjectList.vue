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
              >View in Github
              <small v-if="!project.gitRepo"
                >This is a private repository</small
              ></b-button
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
export default Vue.extend({
  data: () => {
    return {
      projects: [
        {
          name: 'My portfolio',
          description: 'I created my own portfolio to take myself know.',
          gitRepo: 'https://github.com/AlejandroMilan/MilanPortfolio',
          technologiesUsed: [
            'HML',
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
            'Responsive website for Dev Tek, bussiness dedicated to digital strategies for business.',
          technologiesUsed: [
            'HTML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Nuxt.js',
          ],
          imageSource:
            'https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FPortfolio%2FScreen%20Shot%202020-09-01%20at%2017.46.20.png?alt=media&token=30d86063-8183-4dc1-bdcd-fe9a5b7d1587',
        },
      ],
    }
  },
})
</script>
