<template>
  <header>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">
        <img
          src="https://lh3.googleusercontent.com/I4niaWFoAVpElYyV_GK3LEGz9PQMFcrhABQVz94HkJ2vQwpkeIJJFq2xY7hfJ9Vn6Z5yXKuSm8KEzv47hp82y5NjsLcL_NzzlyQDHMO4n7AGR57juCQv3o-ij0MVVY_YcT3YZeirxm_DfHw5ZIwvvaI0YnW6P0wJT68ZpYvVEZM6ZkjpkInjFR0iukofr46Osl3pZy6q0avGKbd5uPd2cHhB6DgPCTd3drlkfundqGaSOg3lBU1gxQy706oePO2n9hWiLCxw9nyOVaQM7vEvi9_V4b_pddEKrwT6Oa96u4PWT5gdsnwGyzeNQUiRQyZq7FOpd_CcKKpTaU-MZq6PMPnXWCGeGq9dkxT_DSwRsm3-Rk8x6bDMZVXWp7dGJFVdA_xYeXtdj9b_PXZX09LLj-0r_rakPqG1FWd-VttMKK6FPcYN9VpHkmcT362E4z9InKTCEB_w2q0UZcVdxYO4V7hbzdTs3W90QMX_ljU6mXuYJU_gLzUkzG2PLPE_4vtsP4c8OFfVyvG83Wn7UwRxW6TdhWdYZKy2gComGqwzKh2Ay_HHGN7WwjEiEIOZdlQgjkkYraZ3Bnrf2Ecc-0S-jfAD234Y2aI2wAucCcLtvurvCSmuJofFg4_Kt94__ZxMfaDHI1h9xlMCXicbhYYUhjTBYAezG5Tx03kMXRvuLMcBE65qbZdPkH3h1YW-=s500-no?authuser=3"
          alt="Logo"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="navbar"></b-navbar-toggle>

      <b-collapse id="navbar" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="navLink in navLinks"
            :key="navLink.name"
            :to="navLink.destination"
          >
            {{ navLink.name }}
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <transition name="slide-fade" mode="out-in">
            <CTAButton></CTAButton>
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
  width: 100%
  @media(min-width: 992px)
    max-width: 992px
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
