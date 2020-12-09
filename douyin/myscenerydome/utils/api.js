import { request } from './http.js';
const baseAddr = 'http://apis.qiche98.cn/';

export function userLogin(data) {
    return request(baseAddr + 'user/login', data);
}

//文章列表
export function getArticleList(data) {
    return request(baseAddr + 'article/list', data, 'GET');
}

//文章详情
export function getArticleDetail(data) {
    return request(baseAddr + 'article/detail', data, 'GET');
}

//收藏文章
export function setCollectArticle(data) {
    return request(baseAddr + 'collect/article', data);
}

//取消收藏文章
export function setCancelCollectArticle(data) {
    return request(baseAddr + 'cancel/collect/article', data);
}

//文章收藏状态
export function getArticleCollectStatus(data) {
    return request(baseAddr + 'article/collect/status', data, 'GET');
}

//用户文章收藏列表
export function getCollectArticle(data) {
    return request(baseAddr + 'get/collect/article', data, 'GET');
}

//用户优惠券
export function getUserVoucher(data) {
    return request(baseAddr + 'get/user/voucher', data, 'GET');
}

//用户优惠券
export function getArticleVoucher(data) {
    return request(baseAddr + 'article/voucher', data, 'GET');
}

//领取优惠券
export function addUserVoucher(data) {
    return request(baseAddr + 'add/user/voucher', data);
}