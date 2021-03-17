import { userLogin } from './api'



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
        const userInfo = tt.getStorageSync("userInfo");
        if (userInfo) {
            return new Promise(() => {
                resolve({ loginRes: userInfo });
            })
        } else {
            return tt.login({
                success: (codeRes) => {
                    tt.authorize({
                        scope: "scope.userInfo",
                        success: () => {
                            tt.getUserInfo({
                                withCredentials: true,
                                success(infoRes) {
                                    const { code } = codeRes;
                                    const { userInfo } = infoRes;
                                    // tt.setStorageSync('userInfo', userInfo);
                                    // tt.setStorageSync('token', "cd0c8d0d71f07071ea60b598b0080132");
                                    // resolve({ loginRes: userInfo })
                                    // return;
                                    userLogin({ 'code': code }).then((dataRes) => {
                                        debugger
                                        tt.setStorageSync('userInfo', userInfo);
                                        tt.setStorageSync('token', dataRes.data.token);
                                        resolve({ loginRes: userInfo })
                                    }).catch((data) => {
                                        tt.showToast({
                                            title: data.message || '服务君繁忙~',
                                            icon: 'fail',
                                        })
                                    })
                                },
                                fail(res) {
                                    console.log(`getUserInfo 调用失败`);
                                    reject(res);
                                },
                            });
                        },
                    });
                },
                fail: (res) => {
                    console.log(res)
                    reject(res);
                },
            });
        }

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
const dataListPage = [

];
for (let i = 0; i < 20; i++) {
    dataListPage.push({

        "id": i,
        "title": "优选店铺0000" + (i + 1),
        "price": 2000 + i,
        "cover_img": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"

    })
}

module.exports = {
    loginByTT,
    getUserInfo,
    getFlatternDistance,
    dataListPage,
}