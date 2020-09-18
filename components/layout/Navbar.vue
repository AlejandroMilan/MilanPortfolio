<template>
  <header>
    <b-navbar toggleable="lg">
      <b-navbar-brand to="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/alejandro-milan.appspot.com/o/assets%2FMIL%C3%81N%20Logo%20500x500.png?alt=media&token=257f6f17-f480-46ef-80a4-a7e1f084c663"
          alt="Logo"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="navbar"></b-navbar-toggle>

      <b-collapse id="navbar" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="navLink in navLinks"
            :key="navLink.name"
            :active="path == navLink.destination"
            :to="navLink.destination"
          >
            {{ navLink.name }}
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <transition name="slide-fade" mode="out-in">
            <CTAButton v-if="!isHidden"></CTAButton>
          </transition>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style lang="sass" scoped>
header
  background-color: var(--white)
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
  position: fixed
  z-index: 1
  width: 100%
  @media(min-width: 992px)
    max-width: 960px
    margin: 0 auto
    left: 0
    right: 0

.navbar-toggler
  background-color: #fff
  border: 0

.navbar-brand
  width: 20%
  @media(min-width: 768px)
    width: 10%
  @media(min-width: 992px)
    width: 5%

  img
    width: 100%


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
import CTAButton from '~/components/layout/CTAButton.vue'

export default Vue.extend({
  name: 'Navbar',

  components: {
    CTAButton,
  },

  data: () => {
    return {
      isHidden: true,
      path: '',
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
          name: 'My skills',
          destination: '/skills',
        },
        {
          name: 'Projects created',
          destination: '/projects',
        },
      ],
    }
  },

  watch: {
    $route() {
      if (this.$route.path === '/' || this.$route.path === '/contact') {
        this.isHidden = true
      } else {
        this.isHidden = false
      }
      this.path = this.$route.path
    },
  },

  created() {
    if (this.$route.path === '/' || this.$route.path === '/contact') {
      this.isHidden = true
    } else {
      this.isHidden = false
    }
    this.path = this.$route.path
  },
})
</script>
