<template>
  <section class="contact">
    <div class="container">
      <h1 class="font-weight-bold">{{ title }}</h1>
      <p class="font-weight-light">{{ introduction }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: "Let's work together",
      introduction:
        'Just fill the form and i will contact with you. Thank you for your interest.',
    }
  },
})
</script>
