<template>
  <main>
    <div class="left">
      <ContactTitle></ContactTitle>
    </div>
    <div class="right">
      <ContactForm></ContactForm>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactForm from '~/components/contact_page-components/ContactForm.vue'
import ContactTitle from '~/components/contact_page-components/ContactTitle.vue'

export default Vue.extend({
  components: {
    ContactForm,
    ContactTitle,
  },
})
</script>
