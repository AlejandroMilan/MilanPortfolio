<template>
  <h1>Navbar</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',

  data: () => {
    return {
      navLinks: [
        {
          name: 'Home',
          destination: '/',
        },
        {
          name: 'About me',
          destination: '/about',
        },
        {
          name: 'My services',
          destination: '/services',
        },
        {
          name: 'Skills',
          destination: '/skills',
        },
      ],
    }
  },
})
</script>
