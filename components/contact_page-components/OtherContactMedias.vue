<template>
  <section class="other-contact-medias">
    <div class="container">
      <h2>Other ways to contact with me</h2>
      <div class="contact-medias">
        <article
          v-for="(contactMedia, index) in contactMedias"
          :key="index"
          class="contact-medias-item"
        >
          <div class="contact-media-item-icon">
            <font-awesome-icon
              :icon="[contactMedia.iconType, contactMedia.iconName]"
            />
          </div>
          <div class="contact-media-item-content">
            {{ contactMedia.content }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.other-contact-medias
  text-align: center
  padding: 2rem 0
  @media(min-width: 992px)
    text-align: left
    padding: 0

  h2
    @media(min-width: 992px)
      font-size: 1.5rem

  .contact-medias-item
    display: flex
    justify-content: center
    column-gap: 5px
    margin: 10px 0
    @media(min-width: 992px)
      justify-content: left
</style>

<script lang="ts">
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faWhatsapp, faEnvelope)

export default Vue.extend({
  data: () => {
    return {
      contactMedias: [
        {
          content: 'alejandro.milan.serrano@gmail.com',
          iconName: 'envelope',
          iconType: 'fas',
        },
        {
          content: '+52 427-227-8479',
          iconName: 'whatsapp',
          iconType: 'fab',
        },
      ],
    }
  },
})
</script>
