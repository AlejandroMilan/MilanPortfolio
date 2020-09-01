<template>
  <main>
    <div class="for-main">
      <WhatIsProgramming></WhatIsProgramming>
      <Presentation></Presentation>
      <SocialLinks></SocialLinks>
    </div>
  </main>
</template>

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

<script lang="ts">
import Vue from 'vue'
import WhatIsProgramming from '~/components/index_page-components/WhatIsProgramming.vue'
import Presentation from '~/components/index_page-components/Presentation.vue'
import SocialLinks from '~/components/index_page-components/SocialLinks.vue'

export default Vue.extend({
  components: {
    WhatIsProgramming,
    Presentation,
    SocialLinks,
  },
})
</script>
