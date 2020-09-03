<template>
  <main>
    <SkillsTitle></SkillsTitle>
    <SkillList></SkillList>
    <div class="container"><hr /></div>
    <OtherSkills></OtherSkills>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import SkillsTitle from '~/components/skills_page-components/SkillsTitle.vue'
import SkillList from '~/components/skills_page-components/SkillList.vue'
import OtherSkills from '~/components/skills_page-components/OtherSkills.vue'

export default Vue.extend({
  transition: {
    name: 'slide-fade',
    mode: 'out-in',
  },

  components: {
    SkillsTitle,
    SkillList,
    OtherSkills,
  },
})
</script>
