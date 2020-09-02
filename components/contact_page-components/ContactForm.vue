<template>
  <section class="contact-form">
    <div class="container">
      <form action="#" @submit="sendForm">
        <b-form-group>
          <b-form-input
            id="input-first_name"
            v-model="form.firstName"
            type="text"
            required
            placeholder="Your first name"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-last_name"
            v-model="form.lastName"
            type="text"
            required
            placeholder="Your first name"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            required
            placeholder="Your email"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-textarea
            id="textarea-message"
            v-model="form.message"
            placeholder="Your message"
            rows="3"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Send form</b-button>
      </form>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.form-control
  border: 0
  border-bottom: 1px solid #000
  padding: 0.25rem
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    }
  },
})
</script>
