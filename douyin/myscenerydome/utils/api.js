import { request } from './http.js';
const baseAddr = 'http://apis.qiche98.cn/';
export function userLogin(data) {
    return request(baseAddr + 'user/login', data);
}