<template>
  <section class="contact-form">
    <div class="container">
      <form @submit="sendForm">
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
            placeholder="Your last name"
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
            placeholder="Your message (optional)"
            rows="3"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary" :disabled="isSending">
          <b-spinner
            v-if="isSending"
            label="Sending..."
            variant="light"
            small
          ></b-spinner>
          {{ buttonTitle }}</b-button
        >
      </form>
      <b-alert :show="isSuccess" variant="primary" fade>
        Message sended, thanks :)
      </b-alert>
      <b-alert :show="error" variant="danger" fade>
        Something went wrong, sorry :( | Error: {{ error }}
      </b-alert>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.form-control
  border: 0
  border-bottom: 1px solid #000
  padding: 0.25rem

.alert
  margin: 1rem 0
</style>

<script lang="ts">
import Vue from 'vue'
import emailjs from 'emailjs-com'

export default Vue.extend({
  data: () => {
    return {
      buttonTitle: 'Send',
      isSuccess: false,
      isSending: false,
      error: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    }
  },

  methods: {
    sendForm() {
      this.isSending = true
      const serviceId = process.env.NUXT_ENV_EMAIL_SERVICE_ID
      const templateId = process.env.NUXT_ENV_EMAIL_SERVICE_TEMPLATE
      const userId = process.env.NUXT_ENV_EMAIL_USER_ID
      emailjs.send(serviceId, templateId, this.form, userId).then(
        () => {
          this.isSuccess = true
          this.isSending = false
        },
        (error) => {
          this.error = error
          this.isSending = false
        }
      )
    },
  },
})
</script>
