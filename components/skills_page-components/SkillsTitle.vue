<template>
  <section class="title">
    <div class="container">
      <h1 class="font-weight-bold">{{ title }}</h1>
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
      title: 'My principal skills'
    }
  },
})
</script>
