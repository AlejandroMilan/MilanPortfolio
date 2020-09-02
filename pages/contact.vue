<template>
  <main>
    <ContactTitle class="title"></ContactTitle>
    <ContactForm class="contact-form"></ContactForm>
    <OtherContactMedias class="other-contact-ways"></OtherContactMedias>
    <SocialLinks class="social-links"></SocialLinks>
  </main>
</template>

<style lang="sass" scoped>
main
  @media(min-width: 992px)
    max-width: 960px
    margin: 0 auto
    display: grid
    grid-template-columns: 50% 50%
    grid-template-areas: "t f" "o f" "sl sl"

  .title
    @media(min-width: 992px)
      grid-area: t

  .contact-form
    @media(min-width: 992px)
      grid-area: f

  .other-contact-ways
    @media(min-width: 992px)
      grid-area: o

  .social-links
    @media(min-width: 992px)
      grid-area: sl
      margin-top: 5rem
</style>
<script lang="ts">
import Vue from 'vue'
import ContactForm from '~/components/contact_page-components/ContactForm.vue'
import ContactTitle from '~/components/contact_page-components/ContactTitle.vue'
import OtherContactMedias from '~/components/contact_page-components/OtherContactMedias.vue'
import SocialLinks from '~/components/index_page-components/SocialLinks.vue'

export default Vue.extend({
  components: {
    ContactForm,
    ContactTitle,
    OtherContactMedias,
    SocialLinks,
  },
})
</script>
