import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: "qwe",
        data: 1
    },
    mutations: {
        set_token(state, token) {
            console.log(token, "token");
            state.token = token;
            localStorage.setItem("token", token);
        }
    },
    actions: {
        set_token({ commit }, i) {
            commit("set_token", i);
        }
    },
    modules: {}
});