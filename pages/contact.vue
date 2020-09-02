<template>
  <main>
    <ContactTitle></ContactTitle>
    <ContactForm></ContactForm>
    <OtherContactMedias></OtherContactMedias>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactForm from '~/components/contact_page-components/ContactForm.vue'
import ContactTitle from '~/components/contact_page-components/ContactTitle.vue'
import OtherContactMedias from '~/components/contact_page-components/OtherContactMedias.vue'

export default Vue.extend({
  components: {
    ContactForm,
    ContactTitle,
    OtherContactMedias,
  },
})
</script>
