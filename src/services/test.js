import { post } from "./http.js";

export function test(mobile, num) {
    return post("/asfd", {
        mobile,
        num
    });
}