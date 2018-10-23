<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['chartData', 'options', 'name', 'colors'],
  data() {
    return ({
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
      },
      targetData: {
        "datasets": [
          {
            "data": [
              300,
              304,
              321,
              354
            ],
            "backgroundColor": [
              "rgb(188,173,142)",
              "rgb(198,220,75)",
              "rgb(122,211,209)",
              "rgb(127,82,178)"
            ]
          }
        ],
        "labels": [
          "Desktop",
          "Mobile",
          "Tablet",
          "Unknown"
        ]
      }
    })
  },
  mounted () {
    this.processData()
    this.renderChart(this.processData(), this.options)
  },
  methods: {
    processData() {
      const dataset = this.chartData[this.name].buckets.reduce((acc, value) => {
        acc.data = acc.data || []
        acc.labels = acc.labels || []
        return { data: [ ...acc.data, value.doc_count ], labels: [ ...acc.labels, value.key ] }
      })
      return {
        datasets: [ { data: dataset.data,  backgroundColor: this.colors } ],
        labels: dataset.labels
      }
    }
  }
}
</script>
