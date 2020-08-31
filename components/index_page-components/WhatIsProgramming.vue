<template>
  <div class="what-is-programming container">
    <h1 class="font-weight-bold">
      Web development is
      <transition name="slide-fade" mode="out-in"
        ><span :key="adjectives[adjectivePosition]">{{
          adjectives[adjectivePosition]
        }}</span></transition
      >
    </h1>
  </div>
</template>

<style lang="sass" scoped>
.what-is-programming
  width: 100%
  text-align: center
  text-transform: uppercase

.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0
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

  mounted() {
    setTimeout(() => {
      this.adjectivePosition++
    }, 2000)
  },
})
</script>
