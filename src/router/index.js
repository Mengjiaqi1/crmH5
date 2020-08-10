import Vue from "vue";
import VueRouter from "vue-router";
import MyHome from "../views/Home.vue";
import Home from "../pages/Home.vue";
import Visitor from "../pages/Visitor.vue";
import Work from "../pages/Work.vue";
import Mine from "../pages/Mine.vue";
import News from "../pages/News.vue";
import Selection from "../pages/Selection";
import CommonForms from "../pages/CommonForms";
import CustomHome from "../pages/CustomHome";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/work",
        name: "Work",
        component: Work
    },
    {
        path: "/news",
        name: "News",
        component: News
    },
    {
        path: "/visitor",
        name: "Visitor",
        component: Visitor
    },
    {
        path: "/mine",
        name: "Mine",
        component: Mine
    },
    {
        path: "/myHome",
        name: "myHome",
        component: MyHome
    },
    {
        path: "/selection",
        name: "Selection",
        component: Selection
    },
    {
        path: "/commonForms",
        name: "CommonForms",
        component: CommonForms
    },
    {
        path: "/customHome",
        name: "CustomHome",
        component: CustomHome
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // 按需加载模式
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.path === "/") {
        next();
    } else {
        let token = localStorage.getItem("token");

        if (token === null || token === "") {
            next("/");
        } else {
            next();
        }
    }
});

export default router;