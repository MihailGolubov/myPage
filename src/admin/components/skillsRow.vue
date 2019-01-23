<template lang="pug">
  .skills-row
    h2.title {{type.name}}
    table.table
      skills-comp(
        v-for="skill in skills"
        v-if="type.id === skill.category"
        :key="skill.id"
        :skill="skill"
      )   
      skills-comp(
        :editmode="true",
        :typeId="type.id"
      )
    HR
</template>

<script>
import SkillsComp from "./skillsComp";
export default {
  components: {
    SkillsComp
  },
  props: {
    type: {
      type: Object,
      default: () => {}
    },
    skills: {
      type: Array,
      default: () => []
    }
  }
};
</script>

