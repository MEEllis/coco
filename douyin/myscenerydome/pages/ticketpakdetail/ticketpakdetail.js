import { getUserVoucher } from '../../utils/api.js'

Page({
    data: {
        info: {
            status:1,
        },
    },
    onLoad(options) {
        const { id } = options;
        if (id !== undefined) {
            this.getData();
        }
    },
    getData() {

    },
    bindHexiao(){
        //todo
        tt.showToast({
            title:  '功能调试中~',
        })
    }
})