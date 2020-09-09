<template>
  <div style="height: 100%" ref="echart">
    echart
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    // 指定图表的配置项和数据
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        }
      }
    },
    // 有横纵坐标的图表
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  },
  watch: {
    // chartData 改变就重新初始化图表
    chartData: {
      handler: function() {
        this.initChart()
      },
      deep: true
    }
  },
  data() {
    return {
      echart: null,
      axisOption: {
        xAxis: [
          {
            type: 'category',
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: []
      }, // 有坐标轴
      normalOption: {
        series: []
      } // 无坐标轴
    }
  },
  methods: {
    // 初始化
    initChart() {
      this.initChartData() // 渲染数据
      // 初始化图表
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        console.log('normal')
      }
    }
  }
}
</script>
