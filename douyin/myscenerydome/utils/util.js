import { userLogin } from './api'
function checkSession() {
    return new Promise((resolve, reject) => {
        tt.checkSession({
            success: () => {
                resolve(true);
            },
            fail: () => {
                reject(false);
            }
        })
    });
}

function login() {
    return new Promise((resolve, reject) => {
        tt.login({
            success: (res) => {
                if (res.code) {
                    //登录远程服务器
                    resolve(res);
                } else {
                    reject(res);
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function getUserInfo() {
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            withCredentials: true,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
        })
    });
}


function loginByTT() {
    return new Promise((resolve, reject) => {
        // 先获取用户信息权限
        return tt.authorize({
            scope: "scope.userInfo",
            success: () => {
                //检查是否已经存在code

                tt.checkSession({
                    success: (res) => {
                        debugger
                        tt.getUserInfo({
                            withCredentials: true,
                            success: (res) => {
                                resolve(res)
                            },
                            fail(res) {
                                reject(res);
                            },
                        });
                    },
                    fail: (res) => {
                        console.log(`session 已过期，需要重新登录`);
                        tt.login({
                            success: (loginRes) => {
                                tt.getUserInfo({
                                    withCredentials: true,
                                    success(infoRes) {
                                        const { code } = loginRes;
                                        userLogin({ code }).then((userInfo) => {
                                            resolve({ loginRes, infoRes, userInfo })
                                        })
                                    },
                                    fail(res) {
                                        console.log(`getUserInfo 调用失败`);
                                        reject(res);
                                    },
                                });
                            },
                            fail: (err) => {
                                reject(res);
                                console.log("登录失败", err);
                            },
                        });
                    },
                });
            },
            fail: (res) => {
                console.log(res)
                reject(res);
            }
        });
    });
}


function showErrorToast(msg) {
    tt.showToast({
        title: msg || '服务君繁忙~',
        icon: 'none',
    })
}



function getRad(d) {
    return d * Math.PI / 180.0;
}

function getFlatternDistance(lat1, lng1, lat2, lng2) {
    var f = getRad((lat1 + lat2) / 2);
    var g = getRad((lat1 - lat2) / 2);
    var l = getRad((lng1 - lng2) / 2);

    var sg = Math.sin(g);
    var sl = Math.sin(l);
    var sf = Math.sin(f);

    var s, c, w, r, d, h1, h2;
    var EARTH_RADIUS = 6378137.0;
    var a = EARTH_RADIUS;
    var fl = 1 / 298.257;

    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;

    s = sg * (1 - sl) + (1 - sf) * sl;
    c = (1 - sg) * (1 - sl) + sf * sl;

    w = Math.atan(Math.sqrt(s / c));
    r = Math.sqrt(s * c) / w;
    d = 2 * w * a;
    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;

    var aaa = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
    return Math.round(aaa / 1000);
}

module.exports = {
    loginByTT,
    getUserInfo,
    getFlatternDistance
}