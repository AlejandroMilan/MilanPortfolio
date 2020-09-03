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

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'WhatIsProgramming',
  data: () => {
    return {
      adjectivePosition: 0,
      adjectives: ['interesting', 'awesome', 'an art'],
    }
  },

  mounted() {
    const changeText = (i: number) => {
      setTimeout(() => {
        this.changeText()
      }, 5000 * i)
    }
    for (let i = 0; i <= 50; i++) {
      changeText(i)
    }
  },

  methods: {
    changeText() {
      if (this.adjectivePosition + 1 === this.adjectives.length) {
        this.adjectivePosition = 0
      } else {
        this.adjectivePosition++
      }
    },
  },
})
</script>

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
