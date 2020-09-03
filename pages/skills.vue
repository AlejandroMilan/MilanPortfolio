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
  components: {
    SkillsTitle,
    SkillList,
    OtherSkills,
  },
  head() {
    return {
      title: 'Skills | MILAN',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Found here my principal skills and knowledges.',
        },
      ],
    }
  },

  transition: {
    name: 'slide-fade',
    mode: 'out-in',
  },
})
</script>
