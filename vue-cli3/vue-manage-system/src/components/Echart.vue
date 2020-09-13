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
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  watch: {
    // chartData 改变就重新初始化图表
    chartData: {
      handler: function() {
        this.initChart()
      },
      deep: true
    },
    isCollapse() {
      setTimeout(() => {
        this.resizeChart()
      }, 300)
    }
  },
  data() {
    return {
      echart: null,
      axisOption: {
        // 设置顶部图例
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        // 设置偏移量
        grid: {
          left: '20%'
        },
        // 设置悬浮气泡框
        tooltip: {
          trigger: 'axis' // 触发时机：针对坐标轴
        },
        // 图标X轴数据
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: { color: '#333' }
        },
        // 图标 y 轴数据
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3',
          '#e5cf0d',
          '#97b552',
          '#95706d',
          '#dc69aa',
          '#07a2a4',
          '#9a7fd1',
          '#588dd5',
          '#f5994e',
          '#c05050',
          '#59678c',
          '#c9ab00',
          '#7eb00a',
          '#6f5553',
          '#c14089'
        ],
        // 定义图标类型（柱状图、折线图等）
        series: []
      }, // 有坐标轴
      normalOption: {
        tooltip: {
          trigger: 'item' // 触发时机：针对每一项
        },
        color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
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
        this.normalOption.series = this.chartData.series
      }
    },
    resizeChart() {
      // resize() 是 Echarts 官网的方法
      this.echart ? this.echart.resize() : ''
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeChart)
  },
  destroyed() {
    // 避免内存泄漏
    window.removeEventListener('resize', this.resizeChart)
  }
}
</script>
