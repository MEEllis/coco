export function request(url, data = {}, method = "POST", config) {
    return new Promise((resolve, reject) => {
        config = config || {};
        tt.request({
            url: url,
            data: data,
            method: method,
            header: {
                'content-type': 'application/json',
                'content-token': tt.getStorageSync('token')
            },
            success: function (res) {
                if (res.statusCode == 200) {
                    if (res.data.status == 0) {
                        resolve(res.data);
                    } else if (res.data.status == -1) {
                        tt.removeStorageSync("userInfo")
                        tt.removeStorageSync("token")
                        tt.showToast({
                            title: '请先登录~',
                            icon: 'fail',
                        })
                    } else {
                        tt.showToast({
                            title: res.data.message,
                            icon: 'none',
                        })
                        reject(res.data);
                    }
                } else {
                    reject(res.data);
                }

            },
            fail: function (err) {
                reject(err)
            }
        })
    });
}