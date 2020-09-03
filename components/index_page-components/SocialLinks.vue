<template>
  <div class="social-links container">
    <article
      v-for="socialLink in socialLinks"
      :key="socialLink.name"
      class="social-links-item"
    >
      <a class="social-link-item-icon" :href="socialLink.url" target="_blank">
        <font-awesome-icon :icon="['fab', socialLink.iconName]" />
      </a>
      <div class="social-link-item-title">
        <h3 class="h6">{{ socialLink.name }}</h3>
      </div>
    </article>
  </div>
</template>

<style lang="sass" scoped>
.social-links
  width: 100%
  padding: 2rem 0
  display: flex
  flex-wrap: wrap
  justify-content: center
  text-align: center
  column-gap: 1rem

  .social-link-item-icon
    font-size: 2rem
</style>

<script lang="ts">
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faGithub, faLinkedin)
export default Vue.extend({
  data: () => {
    return {
      socialLinks: [
        {
          name: 'Github',
          url: 'https://github.com/AlejandroMilan/',
          iconName: 'github',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/alejandro-milán-5a52491b6/',
          iconName: 'linkedin',
        },
      ],
    }
  },
})
</script>
