<template>
  <main>
    <div class="for-main">
      <what-is-programming />
      <presentation />
      <social-links />
    </div>
  </main>
</template>

<script>
import WhatIsProgramming from '@/components/index/WhatIsProgramming'
import Presentation from '@/components/index/Presentation'
import SocialLinks from '@/components/SocialLinks'

export default {
  components: {
    WhatIsProgramming,
    Presentation,
    SocialLinks,
  },
}
</script>

<style lang="sass" scoped>
main
  min-width: 100%
  min-height: 100vh;
  background-color: var(--white)
  display: flex
  align-items: center

  .for-main
    width: 100%
</style>
