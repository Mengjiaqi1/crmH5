<template>
  <div class="wrap">
    <myHeader>
      <div class="h_center">自定义首页</div>
      <div class="h_right"></div>
    </myHeader>
    <main>
      <div class="chart_type">
        <div class="custom_tit">选择数据图形类型</div>
        <div class="chart_box">
          <div
            :class="[chartFlag == false ? 'chart_active' : 'chart_left']"
            @click="changeChart(1)"
          >
            <img src="../common/images/Line_chart.png" type="a" alt="" />
          </div>
          <div
            :class="[chartFlag == true ? 'chart_active' : 'chart_left']"
            @click="changeChart(2)"
          >
            <img src="../common/images/Bar_chart.png" type="b" alt="" />
          </div>
        </div>
      </div>
      <div class="chart_type">
        <div class="custom_tit">已添加的卡片</div>
        <div class="add_card">
          <div class="fluid container">
            <div class="col-md-3">
              <draggable
                class="list-group"
                tag="ul"
                handle=".handle"
                :name="'flip-list'"
              >
                <li
                  class="list-group-item"
                  v-for="element in addCard"
                  :key="element.menuId"
                >
                  <p>
                    <img
                      :src="forms_reduce"
                      alt=""
                      class="reducer"
                      @click="removeAdd(element.menuId, element.name)"
                    />
                    <span class="text">{{ element.name }} </span>
                  </p>
                  <span class="badge">
                    <img
                      src="../common/images/c_order.png"
                      class="sort"
                      alt=""
                    />
                  </span>
                </li>
              </draggable>
              <!-- <rawDisplayer class="col-3" :value="addCard" title="flip-list" /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="chart_type">
        <div class="custom_tit">更多卡片</div>
        <div class="more_card">
          <div class="fluid container">
            <div class="col-md-3">
              <draggable class="list-group" tag="ul">
                <li
                  class="list-group-item"
                  v-for="element in custommenu"
                  :key="element.menuId"
                  handle=".handle"
                >
                  <p>
                    <img
                      :src="element.checked ? forms_reduce : forms_add"
                      alt=""
                      class="reducer"
                      @click="removeAt(element.menuId, element.name)"
                    />
                    <span class="text">{{ element.name }} </span>
                  </p>
                  <span class="badge">
                    <img
                      src="../common/images/c_order.png"
                      class="sort"
                      alt=""
                    />
                  </span>
                </li>
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import DragGable from "../components/DragGable.vue";
import { getCustommenu, getCreatemneu, getquery } from "../services/custom";
import draggable from "vuedraggable";
// import rawDisplayer from "rawDisplayer";
const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];
export default {
  name: "wrap",
  display: "Handle",
  data() {
    return {
      type: "a",
      dragging: false,
      chartFlag: false,
      flag: false,
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: "",
      editable: true,
      isDragging: false,
      isDragging1: false,
      delayedDragging: false,
      typeCode: 0,
      typeFlag: true,
      forms_add: require("../assets/forms_add.png"),
      forms_reduce: require("../assets/forms_reduce.png"),
      custommenu: "", // 更多卡片数据
      addCard: "", // 已添加卡片
      count: 1
    };
  },
  mounted() {
    // this.list = this.custommenu.map((name, index) => {
    //   return { name, order: index + 1, fixed: false };
    // });
    if (this.count <= 1) {
      this.typeFlag = true;
    }
    console.log(this.count);
    console.log(this.typeFlag, "false");
    if (this.count >= 1) {
      this.removeAdd();
      this.getqueryData();
      this.removeAt();
      this.getCustomData();
    }
  },

  created() {},

  methods: {
    changeChart() {
      this.chartFlag = !this.chartFlag;
    },
    // 查询已添加的卡片
    getqueryData() {
      getquery().then(res => {
        // console.log(res, "22");
        if (res.code == 200) {
          this.addCard = res.data;
          for (var i = 0; i < this.addCard.length; i++) {
            console.log(this.addCard.length);
            this.count = this.addCard.length;
            if (this.count <= 1) {
              this.typeFlag = false;
            }
          }
        }
      });
    },
    // 删除 已添加卡片
    removeAdd(id, name) {
      getCreatemneu(0, id, name, (this.typeCode = "1")).then(res => {
        if (res.code == 200) {
          this.count -= 1;
          if (this.count >= 2) {
            this.count = 2;
            this.typeFlag = false;
            this.$toast({
              message: "必须保留一条卡片",
              position: "center"
            });
          }
          console.log((this.count = 2), "count");
          this.getCustomData();
          this.getqueryData();
        }
      });
    },
    // 删除 添加 更多卡片
    removeAt(id, name) {
      this.custommenu &&
        this.custommenu.map(each => {
          if (each.menuId == id && each.checked == false) {
            this.typeCode = 0;
            this.count++;
            console.log(this.count, "+");
            if (this.count > 1) {
              this.typeFlag = true;
            }
          }
          if (each.menuId == id && each.checked == true) {
            this.typeCode = 1;
            this.count -= 1;
            console.log(this.count, "-");
            if (this.count >= 2) {
              this.count = 2;
              this.typeFlag = false;
            }
          }
        });

      if (this.count >= 1) {
        getCreatemneu(0, id, name, this.typeCode).then(res => {
          if (res.code == 200) {
            this.getCustomData();
            this.getqueryData();
          }
        });
      }
    },
    // 获取自定义更多卡片
    getCustomData() {
      getCustommenu().then(res => {
        if (res.code == 200) {
          console.log(res);
          this.custommenu = res.data;
        }
      });
    },
    orderList1() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove1({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },

    dragOptions1() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
  },
  components: {
    DragGable,
    draggable
    // rawDisplayer
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  main {
    flex: 1;
    overflow: scroll;
    margin-top: 0.44rem;
    .custom_tit {
      width: 100%;
      height: 0.32rem;
      padding-left: 0.12rem;
      display: flex;
      align-items: center;
      background: rgba(248, 248, 248, 1);
      font-size: 0.12rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 0.17rem;
      box-sizing: border-box;
    }
    .chart_type {
      box-sizing: border-box;
      padding: 0 0.12rem;
      background: rgba(248, 249, 250, 1);
      .chart_box {
        width: 100%;
        height: 1.28rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .chart_left {
          width: 48%;
          height: 1.04rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 1);
          img {
            width: 0.6rem;
            height: 0.6rem;
          }
        }
        .chart_active {
          width: 48%;
          height: 1.04rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.04rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 106, 255, 1);
          background: rgba(242, 247, 255, 1);
          border: 0.01rem solid rgba(0, 106, 255, 1);
          background: url("../common/images/Select.png") no-repeat bottom right;
          background-size: 0.18rem 0.18rem;
          box-sizing: border-box;
          img {
            width: 0.6rem;
            height: 0.6rem;
          }
        }
      }
    }
  }
}
.list-group-item {
  width: 100%;
  height: 0.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.15rem;
}
.button {
  margin-top: 35px;
}

.text {
  margin-left: 0.1rem;
}
.reducer {
  width: 0.15rem;
  height: 0.15rem;
}
.sort {
  width: 0.24rem;
  height: 0.24rem;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
li.list-group-item {
  cursor: move;
  border-bottom: 0.01rem solid #eceff2;
  &:nth-last-child(1) {
    // background: red;
    border_bottom: none;
  }
}
.list-group-item i {
  cursor: pointer;
}
.handle {
  float: left;
  padding-top: 0.08rem;
  padding-bottom: 0.08rem;
}
</style>
