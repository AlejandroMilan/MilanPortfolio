<template>
  <main>
    <projects-title />
    <project-list />
  </main>
</template>

<script>
import ProjectsTitle from '@/components/projects/ProjectsTitle'
import ProjectList from '@/components/projects/ProjectList'

export default {
  components: {
    ProjectsTitle,
    ProjectList,
  },
  head() {
    return {
      title: 'Projects | MILAN',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Some projects made by me.',
        },
      ],
    }
  },
}
</script>
