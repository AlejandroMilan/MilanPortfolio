<template>
  <section class="about-me">
    <div class="container">
      <div class="image">
        <img
          src="https://lh3.googleusercontent.com/nk_hvhcUnBvu1Fw1GPg5PW5e5xsZWZGiFMXN4EOg2AoKWnGuKgvu3GbFpjS1FOKSkiceHoRFMMCUBDpLmzvIb13xhaQ47kSsCvpGJK5PCV00vgabVDp7CLRMgETPlTbrNKXr4xkeDTX_Wx84dim2hBoY-8kUC21Cww6ek1PvTmoBYnBuQ1EaWetVa0pnps-MqpWVxVcMvUG1NkPg7bSywWwrWAlPBrE3lnbEb0h5sHiKkugajVKyBdizH40QPLBGE-479q1f7qYptWGLnQXPyAYQ01_Va1OyV7sn3bmLn4mrPjYtnI1k6hTe4kiM809IJAjTh6cJdWi_LokMaRwifE2vPDcp5k50vBeKMzZpHN-L7mKYB6PgxogYYanjv472gishS91XfX-6OeUHf_LdikXxMYfpefoQQOFZswnBrsU8_mOrbxtXBPjI2itKp_RIasR2f9nNF0VGqda7rFnOnCGuojjlWDizmNnb2WRQuF_EMKlqS-_418SKBz_d2wh3afCc8TMo183_BEfpxAiy_5f3Vb9OX7lC-ZrUQW8oKRK88BbhqlCT7glLl9By6oKhZgj2euqP90C1k4Vpqh283D-8BD9AkxGicoCOAgcLEerZtUOA05ZopnBsTj3w1HH4liB4Mv_pv4RIo5ds93fNqvgQIYB6xCce-gKUC1Afluhz2qSf0tTVOgA-tjlp=w882-h767-no?authuser=3"
          alt="My photo working"
        />
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
    @media(min-wdth: 992px)
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
        'My complete name is Alejandro Milán Serrano, I am from Mexico and I am 19 years old. I like to play guitar and do sports in my free time.',
        'I am a technology lover and my passion for programming started at 13 years when I tried to do my own videogames, that is when i learned about videogames development with Unity, C# and Javascript.',
        'At my 15 years old I was required to build a website to a Real State business, wich had to include a catalog of properties. Since then I am dedicating to web development.',
      ],
    }
  },
})
</script>
