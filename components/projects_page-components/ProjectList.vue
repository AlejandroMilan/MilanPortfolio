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
            <a :href="project.gitRepo" target="_blank" class="btn btn-primary"
              >View in Github</a
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
            'https://lh3.googleusercontent.com/lh5FBl5gLziJ8moPjidtfyFvK9ilA45JiAyU6dSmnJofIsqwuNMJcXJ8zYhJ6NiEw-xp9gujsSTMFGpKuidrhdkCHHHXRa63i26jSG18kKYHlo7rtPXYsMuiP65GqBjHaFUeYY8g_pxUjmg7mi4NQT12cGmpGa60b_GKZVeEf3BS-axkqV-6mB9rVpMEQTZ-uAkIYyuGlIS8_UrTEj4-4zZFaHpduFolugeGEU7qgolE-kwgSKpKw1RCaOojhaUL2ZEZA5XObi7nTzHk1oXpTZJyjBIK4gblJac1uL6RtNffo-bjlNyiyXpZ8bvGs_-ukLN8jAPu-LfCuFjS9I3uYzfZpfKcNGxcT79iJJbg9SX29Sq5PZz7PRLQqISudhCtpQjq0hxTYlr6iyhm3jVxa8c_gETH1hx7NXhwC_-V2Z07b5xsUpFzQS9-AdDdayXFC60lMXbi4il_3JgXfBHs_o5QOMCkfd0AYky_pXZkhWoFUeAs6fEv7x4WevxQEYbUUjTDfAtmg7H2vA3gCKS_qXY5A0r_u9NxiL6WNrPSFu3Z-j5TrRR-Bwj6L4t9B9iqIeOXoHDFGqRSX0cdivQa-W06QflLP5h6LurmnLuLwmNnWNJJZwzEX2yxry8ANo4aOm-nKLIr6eiqOtoSdwRI0CI31ztj32YaTiuR_OVLcXLIyEIXZzSXjDpIb_QS=w1364-h767-no?authuser=3',
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
            'https://lh3.googleusercontent.com/lypSDs9KeyBvqXmkSPkdyZ5rukm0jI49oSds7nR0YQOV9vqFLKw2PUIEi9RIIumIOw7vlmhQScEzGAUXOborXD-ziQJDtkA6FNatC7B8l4boWR_5OjEs1Qjj6Vv3IppWifC9Ta2lffB_47BVjyXa5tyT6exdKO9VlTZ6HCZqvjVyezMPz69EoIoshYMOUnFvrIJNXdzc4uyd7rM_PUtfL6npjgDbWFHrgZui6ALuEhqNtqF37Yv2UT1Zp3VkzR57jVOVoUN70ULD5qVmlUuNKQjewyEjz7eE7UEV5Jiy0Ft4PTbEYG1XJyzLPzc4yP5jFzjff1FtIG1hT3Vk2VRTZsFblS2i2lrGkTu0YmJ5qMAaf5T_qZpWpAJvdYSXDNGALZ4Zesq8qab8PsqsbcWm9kz0tRjjXTa-VfBoCc1Er57kdYUhotVMZVXKAw7O5gQt6-aS9_mWnLotI-BkcILyTtB4FzlXoAzw_CV0_PB4Ig-otVeJiN6PcxP55u91hmEpNF9Udp9jcdnNaHdN6bBYhUu3rioLEcudjLJNN-3Si6bxTjoUfPefqepZI9EM7V7OK1NiRur9C7W7w_3wGVie9vgh9HPAuANSgUGLphtXhXWsbwVu_EuPl7-z-EIysnJNKp__Zy2A0RjGjVPCQDs3YnElheOpChNg522LEevpSeXNYkKccaZ4AyLk4gdl=w1364-h767-no?authuser=3',
        },
      ],
    }
  },
})
</script>
