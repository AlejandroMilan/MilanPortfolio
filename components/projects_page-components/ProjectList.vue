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
          <div v-if="project.gitRepo" class="repo-button">
            <a :href="project.gitRepo" class="btn btn-primary"
              >View in github</a
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
    width: 70%

  .project-list-item-description
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
          gitRepo: 'Hola',
          technologiesUsed: [
            'HML',
            'CSS',
            'JS',
            'Node.js',
            'Vue.js',
            'Nuxt.js',
          ],
          imageSource:
            'https://lh3.googleusercontent.com/fX216Ry1_eKyJgdMoSms73yTZhU94mmQ67JykmadmKSzeluL93HcQ5dnmcBNLHRRimcIGZcvVCOQufo6VUwWHIONegNzA4rKRAqe3WnK0emrjTXUFQKycPYZxVw4OERjPwHGtoFSiKUJFMDbqff3yXSD6-wBnkFh8A_OQX83CiZpkO3f5UlkfySpQu8kuDvnebOkRSy9L5f-O6rfi2ebV_RLU-2qMYV-c4OwYpeMtQ2RxlF73vV1Zn2oQAx338k7Ho0mIcI36rWA6c89SA2ylnDIjfB9-yqU0catQdbRxl8XmTf7aGqwZj7VceN5y4G8JWGiUuxEBr8L9irwYCXouDMEQA9DQS6B2daLKLC_PXhYAoFubTN1odBrRkBBumvyoUdh6uCptJaCz1aAWhuBD5oecZIJV1PiQ4jCmIboYnv0z_s5WvCpoc1ZxpJUfl5m-b2bdkUAvvbB3VN-B8RZuT_m0QwpoArHagDxi14tI3ZTCbnuU43A-rntToYPCBQ4Bbtz8_r4GQ9pDgBWkpQpNIvgLQvdhN_4Yc0Gw7egZAkUxdsFylsVrrdxi8jA0i4fLlaIVMOwJMHZTunLoW85J8vugLr-NCAC7ktTcv-SsZQvNI-lL9et-d5AlXbdWxlbuTo9zMeh8kA1mu_YuXlIj08I7rgN8ju7H-OS0IRw8-TCoiFRfakmhqrksUuD=w1290-h720-no?authuser=3',
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
            'https://lh3.googleusercontent.com/B7j4PPkxjXc7fpfrU3Nz6-0k1evEeTEl9J94MRDPxE0igH1VkWau6_FKCbtPCpLBVKOstvk6XwkS1aSNwGQyzRsg6YoqL5W7yE4Wn1NsmCCMxmYdPdDaRQ12yBj7JTmwDMbyPl_ObEpHxTK9FfgQthXoeVjVmWqu_NEF0aFf0kGBdh7KAhhNs0XTnNmAu2l6eQRTOmo04Fo5an8Dd23rEFmucJm4Nd_aINczrSvYdbdmwlpTkGIrUNm1fdCPmbRhx_chr0nDMLnzdL8QgEpp0fBSc5aJZN-l75JnsRen3WnhWEm-dARLxX_QM23t_xxFypwVwL7XdHSvGRBp4H4dnOQKLwWOQI7_fgoGsT4DFgGVY2jwN6sZKAfPdgAcKd-y3S_XBaa4_zF88lm6foVmNfsxT-TxoBnelj6-9pusBSaK1y1IB1vYFzc8COWa0EQhGR_GKYLeNNQNvNxm03_EJ9433gjsQnep2LiHuE-xBYG1Jt98mvWC3lp4_ZSS71Seon9XD4Fgl8vEqxP4e0-AYRoHx0AID9j5JuG61VF8qL0K1Ln9teSJ1YV_P6nuNLSog0BFgNUk4u3m9aoxQ4J_LQ-6660EnyMHb08GOEx8uMUEVZz0fzfph8ZZK4m-dVGaohlI_Nf48nOWpoESQJdV0paFEWVIpkVv-ZW1svsUYuZcIGgU3DjV2StckCco=w347-h195-no?authuser=3',
        },
      ],
    }
  },
})
</script>
