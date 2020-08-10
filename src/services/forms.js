import {get, post } from "./http.js";

export function getTreeselect() {
    return get("/app/formsettings/treeselect", {});
}

//新增表单
export function getCreate(userId, name, icon, type, id) {
    return post("/app/customIndex/create", { userId, name, icon, type, id });
}

// 修改表单
export function getcustomIndex() {
    return get("/app/customIndex/getData", {});
}