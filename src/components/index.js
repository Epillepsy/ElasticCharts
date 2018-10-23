import Vue from "vue";
import Chart from './GenericChart.vue'

const Components = {
  Chart,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
