<template>
  <main>
    <ContactForm></ContactForm>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactForm from '~/components/contact_page-components/ContactForm.vue'

export default Vue.extend({
  components: {
    ContactForm,
  },
})
</script>
