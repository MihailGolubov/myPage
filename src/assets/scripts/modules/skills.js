import Vue from 'vue';

const skill = {
    template : "#skill",
    props: {
        skillPercentage: Number,
        skillTitle: String
    },
    methods: {
        drawCircleDependsOnPercentage(){
            const circle = this.$refs['circle'];
            const dashOffset = parseInt
            (getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
            );
    
            const percent = (dashOffset / 100) * (100 - this.skillPercentage);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawCircleDependsOnPercentage();
    }
}

const skillsRow = {
    template: "#skills-item",
    props: {
        skillsGroupObj: Object
    },
    components: {
        skill
    }
}

new Vue({
    el: "#skills-component",
    data(){
        return{
            skills: {}
        }
    },
    components: {
      skillsRow
    },
    created() {
        this.skills = require('../../../data/skills.json');
    },
    template: "#skills-list",
});