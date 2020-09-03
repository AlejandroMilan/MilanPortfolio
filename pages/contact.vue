<template>
  <main>
    <contact-title class="title" />
    <contact-form class="contact-form" />
    <other-contact-medias class="other-contact-ways" />
    <social-links class="social-links" />
  </main>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm'
import ContactTitle from '@/components/contact/ContactTitle'
import OtherContactMedias from '@/components/contact/OtherContactMedias'
import SocialLinks from '@/components/SocialLinks'

export default {
  components: {
    ContactForm,
    ContactTitle,
    OtherContactMedias,
    SocialLinks,
  },
  head() {
    return {
      title: 'Contact | MILAN',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact me. Let me help you.',
        },
      ],
    }
  },
}
</script>

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
