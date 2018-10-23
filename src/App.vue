<template>
  <div id="app">
    <Chart name="device_repartition" :data="baseData" :colors="colors" chart="Doughnut"/>
  </div>
</template>

<script>
import Chart from './components/GenericChart'

export default {
  name: 'app',
  components: {
    Chart
  },
  data() {
    return {
      colors: [
              "rgb(188,173,142)",
              "rgb(198,220,75)",
              "rgb(122,211,209)",
              "rgb(127,82,178)"
            ],
      baseData: {
        "key": "123456",
        "device_repartition": {
          "buckets": [
            {
              "key":"Computer",
              "doc_count": 3
            },
            {
              "key":"Mobile",
              "doc_count": 5
            },
            {
              "key":"Unknow",
              "doc_count": 28
            },
            {
              "key":"tablet",
              "doc_count": 7
            }
          ]
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
