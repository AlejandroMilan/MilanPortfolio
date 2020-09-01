<template>
  <main>
    <ProjectsTitle></ProjectsTitle>
    <ProjectList></ProjectList>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectsTitle from '~/components/projects_page-components/ProjectsTitle.vue'
import ProjectList from '~/components/projects_page-components/ProjectList.vue'

export default Vue.extend({
  components: {
    ProjectsTitle,
    ProjectList,
  },
})
</script>
