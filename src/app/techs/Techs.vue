<template>
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import tech from './Tech.vue';

export default {
  name: 'Techs',
  data() {
    return {
      techs: []
    };
  },
  created() {
    return this.$http
      .get('app/techs/techs.json')
      .then(response => response.json())
      .then(response => {
        this.techs = response;
      });
  },
  components: {
    tech
  }
};
</script>
