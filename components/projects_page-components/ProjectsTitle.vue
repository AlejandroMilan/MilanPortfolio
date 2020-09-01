<template>
  <section class="projects-title">
    <div class="container">
      <h1 class="font-weight-bold">{{ title }}</h1>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.projects-title .container
  padding-top: 2rem
  padding-bottom: 2rem
  text-align: center
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: 'Some projects made by me',
    }
  },
})
</script>
