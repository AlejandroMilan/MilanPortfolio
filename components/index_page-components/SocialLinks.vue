<template>
  <div class="social-links container">
    <article
      v-for="socialLink in socialLinks"
      :key="socialLink.name"
      class="social-links-item"
    >
      <a class="social-link-item-icons" href="socialLink.url">
        <font-awesome-icon :icon="['fas', socialLink.iconName]" />
      </a>
      <div class="social-link-item-title">
        <h3 class="h5">{{ socialLink.name }}</h3>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { name of your icon in camelCase } from "@fortawesome/free-solid-svg-icons";
// For example, I want to use fa-enveloper-open-text, then it's faEnvelopeOpenText
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Then add it to library
library.add(faEnvelopeOpenText)
export default Vue.extend({
  data: () => {
    return {
      socialLinks: [
        {
          name: 'Github',
          url: '',
          iconName: '',
        },
        {
          name: 'LinkedIn',
          url: '',
          iconName: '',
        },
      ],
    }
  },
})
</script>
