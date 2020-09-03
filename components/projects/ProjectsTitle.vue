<template>
  <section class="projects-title">
    <div class="container">
      <h1 class="font-weight-bold">{{ title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectTitle',
  data: () => {
    return {
      title: 'Some projects made by me',
    }
  },
}
</script>

<style lang="sass" scoped>
.projects-title .container
  padding-top: 2rem
  padding-bottom: 2rem
  text-align: center
</style>
