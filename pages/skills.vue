<template>
  <main>
    <skills-title />
    <skill-list />
    <div class="container"><hr /></div>
    <other-skills />
  </main>
</template>

<script>
import SkillsTitle from '@/components/skills/SkillsTitle'
import SkillList from '@/components/skills/SkillList'
import OtherSkills from '@/components/skills/OtherSkills'

export default {
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
}
</script>
