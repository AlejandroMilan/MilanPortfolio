<template>
  <div class="what-is-programming container">
    <h1 class="font-weight-bold">
      Web development is
      <transition name="fade"
        ><span>{{ adjectives[adjectivePosition] }}</span></transition
      >
    </h1>
  </div>
</template>

<style lang="sass" scoped>
.what-is-programming
  width: 100%
  text-align: center
  text-transform: uppercase
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      adjectivePosition: 0,
      adjectives: ['interesting', 'awesome', 'an art'],
    }
  },
})
</script>
