<template>
  <section class="other-skills">
    <div class="title container">
      <h2 class="font-weight-bold">{{ title }}</h2>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: 'Other skills',
    }
  },
})
</script>
