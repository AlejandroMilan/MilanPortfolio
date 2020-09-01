<template>
  <section class="title">
    <div class="container">
      <h1 class="font-weight-bold">{{ title }}</h1>
      <p class="font-weight-light">{{ introduction }}</p>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.title
  width: 100%
  text-align: center
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: 'My principal skills',
      introduction:
        'Here is some knowledge that i have and the corresponding experience time of each.',
    }
  },
})
</script>
