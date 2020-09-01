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
          Front-End Developer with 4 years of experience
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
img
  width: 100%

.about-me
  width: 100%

  .container
    width: 100%
    display: grid
    grid-template-columns: 30% 70%
    column-gap: 2rem

    .image
      width: 100%
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
