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
          <div class="contact-media-item-icon"></div>
          <div class="contact-media-item-content">
            {{ contactMedia.content }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      contactMedias: [
        {
          content: 'alejandro.milan.serrano@gmail.com',
          iconName: '',
        },
        {
          content: '+52 427-227-8479',
          iconName: '',
        },
      ],
    }
  },
})
</script>
