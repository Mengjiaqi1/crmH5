import {get, post } from "./http.js";

// 自定义首页查询
export function getCustommenu() {
    return get("/app/custommenu/getCustommenu", {});
}

// 新增删除自定义菜单
export function getCreatemneu(userId, id, name, type) {
    return post("/app/customHome/create", { userId, id, name, type });
}

// 查询自定义菜单
export function getquery() {
    return get("/app/customHome/getData", {});
}