<template>
  <div id="Dashboard" :style="styleObj1"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      styleObj1: { width: "100%", height: "1.45rem" },
      myChart: {}
    };
  },
  created() {
    let _this = this;
    window.onresize = function() {
      setTimeout(() => {
        _this.myChart.resize();
      }, 0);
    };
    setTimeout(() => {
      this.EchartBar();
    }, 0);
  },
  methods: {
    EchartBar() {
      this.myChart = this.$echarts.init(document.getElementById("Dashboard"));
      console.log(this.myChart);
      this.myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        textStyle: {
          color: "#000", //文字颜色
          fontStyle: "normal", //字体风格：'normal','italic','oblique'
          fontWeight: "normal", //字体粗细 ：'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
          fontFamily: "sans-serif", //字体系列： 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
          fontSize: 8 //字体大小
        },
        // backgroundColor: "#232d36",
        // tooltip: {
        //   formatter: "{a} <br/>值 : {c}"
        // },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        series: [
          {
            name: "正常数",
            type: "gauge",
            center: ["50%", "65%"],
            radius: "100%",
            min: 0, //最小刻度
            max: 20, //最大刻度
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    15 / 20,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(248,182,45,1)"
                      },
                      {
                        offset: 0.5,
                        color: "rgba(125,103,179,1)"
                      },
                      {
                        offset: 1,
                        color: "rgba(33,109,195,1)"
                      }
                    ])
                  ]
                  //   [1, "#2C3638"]
                ],
                width: 13
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            itemStyle: {
              show: false
            },
            detail: {
              textStyle: {
                fontSize: 12,
                fontWeight: "700",
                color: "#A582EA"
              },
              show: true,
              offsetCenter: [0, "40%"],
              formatter: value => {
                return [`${value}/${20} 正常`];
              }
            },
            title: {
              //标题
              show: true,
              offsetCenter: [0, -5], // x, y，单位px
              textStyle: {
                color: "#ff0",
                fontSize: 12, //表盘上的标题文字大小
                fontWeight: 400,
                fontFamily: "PingFangSC"
              }
            },
            data: [
              {
                // name: "m/min",
                value: 15
              }
            ],
            pointer: {
              show: true,
              length: "120%",
              radius: "10%",
              width: 5 //指针粗细
            },
            animationDuration: 4000
          }
        ]
      });
    }
  }
};
</script>
