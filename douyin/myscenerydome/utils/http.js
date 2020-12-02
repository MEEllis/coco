 export function request(url, data = {}, method = "POST", config) {
    return new Promise((resolve, reject) => {
        config = config || {};
        tt.request({
            url: url,
            data: data,
            method: method,
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'ERP-WX-TOKEN': tt.getStorageSync('token')
            },
            success: function (res) {
                if (res.statusCode == 200) {
                    if (res.data.status == 1) {
                        resolve(res.data);
                    }
                } else {
                    reject(res.errMsg);
                }

            },
            fail: function (err) {
                reject(err)
            }
        })
    });
}