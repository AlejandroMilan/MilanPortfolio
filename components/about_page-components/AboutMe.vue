<template>
  <section class="about-me">
    <div class="container">
      <div class="image">
        <img src="../../static/DSC_0448.JPG" alt="My photo working" />
      </div>
      <div class="about-me-text">
        <h1 class="font-weight-bold">
          {{ title }}
        </h1>
        <p v-for="(paragraph, index) in paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
img
  width: 100%
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)

.about-me
  width: 100%

  .container
    width: 100%
    @media(min-width: 992px)
      display: grid
      grid-template-columns: 30% 70%
      column-gap: 2rem

    .image
      width: 100%
      @media(max-width: 992px)
        padding: 1rem 0
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: 'Front-End Developer with 4 years of experience',
      paragraphs: [
        'My full name is Alejandro Milán Serrano and I am from Mexico. I like to play guitar and do sports in my free time.',
        'I am a technology lover and my passion for programming started at 13 years when I tried to do my own videogames, that is when I learned about videogames development with Unity, C# and Javascript.',
        'At my 15 years old I was required to build a website to a Real State business, which had to include a catalog of properties. Since then I am dedicating to web development.',
      ],
    }
  },
})
</script>
