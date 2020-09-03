<template>
  <div class="social-links container">
    <article
      v-for="socialLink in socialLinks"
      :key="socialLink.name"
      class="social-links-item"
    >
      <a class="social-link-item-icon" :href="socialLink.url" target="_blank">
        <font-awesome-icon :icon="['fab', socialLink.iconName]" />
      </a>
      <div class="social-link-item-title">
        <h3 class="h6">{{ socialLink.name }}</h3>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  data: () => {
    return {
      socialLinks: [
        {
          name: 'Github',
          url: 'https://github.com/AlejandroMilan/',
          iconName: 'github',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/alejandro-milán-5a52491b6/',
          iconName: 'linkedin',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.social-links
  width: 100%
  padding: 2rem 0
  display: flex
  flex-wrap: wrap
  justify-content: center
  text-align: center
  column-gap: 1rem

  .social-link-item-icon
    font-size: 2rem
</style>
