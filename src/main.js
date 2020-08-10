import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/common/js/flexible.js";
import "@/common/style/index.scss";
import "./assets/iconfont/iconfont.css";
import Axios from "axios";
import echarts from "echarts";
import Vconsole from "vconsole";
import VueCookies from "vue-cookies";

let vConsole = new Vconsole();

import {
    NavBar,
    Toast,
    Swipe,
    SwipeItem,
    Divider,
    Tab,
    Tabs,
    Checkbox
} from "vant";

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Divider);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Checkbox);
Vue.use(vConsole);
Vue.use(VueCookies);

Vue.config.productionTip = false;
Vue.config.isToken = true;
// axios的一些配置
Axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
Vue.prototype.$http = Axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$cookies = VueCookies;

// Vue.prototype.$store = store;

Vue.component("myHeader", () => {
    return import ("@/components/my-header");
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");