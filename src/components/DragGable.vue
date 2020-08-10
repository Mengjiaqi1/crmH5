<template>
  <div class="fluid container">
    <div class="col-md-3">
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        :move="onMove"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="(element, idx) in list" :key="idx">
            <p>
              <img
                :src="forms_reduce"
                alt=""
                class="reducer"
                @click="removeAt(element.id, element.name)"
              />
              <span class="text">{{ element.name }} </span>
            </p>
            <span class="badge">
              <img src="../common/images/c_order.png" class="sort" alt="" />
            </span>
          </li>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { getCreatemneu, getquery } from "../services/custom";
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
  name: "handle",
  components: {
    draggable
  },
  created() {
    this.removeAt();
  },
  mounted() {
    // console.log(this.menu, "i");
    // console.log(this.list2, "9");
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      list2: "",
      editable: true,
      isDragging: false,
      delayedDragging: false,
      type: 0,
      typeFlag: false,
      forms_add: require("../assets/forms_add.png"),
      forms_reduce: require("../assets/forms_reduce.png"),
      custommenu: "" // 更多卡片数据
    };
  },
  methods: {
    removeAt(id, name) {
      //   this.menu &&
      //     this.menu.map(each => {
      //       if (each.menuId == id && each.checked == false) {
      //         this.type = 0;
      //         this.typeFlag = true;
      //       }
      //       if (each.menuId == id && each.checked == true) {
      //         this.type = 1;
      //         this.typeFlag = false;
      //       }
      //     });

      getCreatemneu(0, id, name, this.type).then(res => {
        if (res.code == 200) {
          console.log(res);
        }
        // console.log(this.$emit("onChange"), "emit");
      });

      //   this.list.splice(id, 1);
    },

    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order;
      });
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
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
    // listString() {
    //   return JSON.stringify(this.list, null, 2);
    // },
    // list2String() {
    //   return JSON.stringify(this.list2, null, 2);
    // }
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
<style scoped>
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
    background: red;
    border_bottom: none;
  }
}
.list-group-item i {
  cursor: pointer;
}
</style>
