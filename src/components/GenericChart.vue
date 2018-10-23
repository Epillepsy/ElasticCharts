<template>
  <component
    v-bind:is="dynamicChart"
    :options="options"
    :name="name"
    :chartData="data"
    :colors="colors">
  </component>
</template>

<script>
import Doughnut from "./Doughnut"

export default {
  name: 'GenericChart',
  props:["data", "chart", "options", "name", "colors"],
  components: {
    Doughnut
  },
  computed: {
    dynamicChart() {
      switch (this.chart) {
        case "Doughnut":
        case "Line":
        case "Bar":
          return this.chart;
        default:
          return "Error";
      }
    }
  }
}
</script>
