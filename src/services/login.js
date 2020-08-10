import { post, get } from "./http.js";

export function getLogin(code) {
    return post("/app/login", { code });
}

export function getToken() {
    return get("/app/getToken", {});
}