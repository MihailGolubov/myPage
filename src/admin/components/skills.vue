<template lang="pug">
  #about
    h1 Страница обо мне
    skills-row(
      v-for="type in types"
      :key="type.id"
      :type="type"
      :skills="skills"
    ) 
</template>

<script>
import SkillsRow from './skillsRow'
import { mapActions, mapState } from "vuex";

export default {
  components: {
    SkillsRow
  },
  data() {
    return {
      types: [
        {id: 0, name: 'frontend'},
        {id: 1, name: 'backend'},
        {id: 2, name: 'workflow'},
      ],
    }
  },
  computed: {
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  },
};
</script>
