<template>
  <main>
    <SkillsTitle></SkillsTitle>
    <SkillList></SkillList>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import SkillsTitle from '~/components/skills_page-components/SkillsTitle.vue'
import SkillList from '~/components/skills_page-components/SkillList.vue'

export default Vue.extend({
  components: {
    SkillsTitle,
    SkillList,
  },
})
</script>
