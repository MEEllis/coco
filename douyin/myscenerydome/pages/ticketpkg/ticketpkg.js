import { getUserVoucher } from '../../utils/api.js'

Page({
    data: {
        activeIndex: 1,
        page: 1,
        page_size: 20,
        list: [],
        morecontent: '',
        isEnd: false
    },
    onLoad() {
        this.getData();
    },
    bindTicket(event) {
        const { index } = event.currentTarget.dataset;
        this.setData(
            {
                activeIndex: Number(index),
                page: 1,
                list:[],
                isEnd:false,
            }
        );
        this.getData();
    },
    getData(callback) {
        const { activeIndex, page, page_size,isEnd } = this.data;
        if (isEnd === false) {
            getUserVoucher({
                page,
                page_size,
                status: activeIndex,
            }).then(({ data }) => {
                
                if (callback) {
                    callback();
                }
                const { list } = this.data;
                const addList = list.concat(data.items);
                let morecontent = "";
                let isEnd = "";
                if (data.items.length == page_size) {
                    morecontent = "下拉加载更多";
                    isEnd = false;
                } else {
                    morecontent = "我是有底线的";
                    isEnd = true;
                }
                this.setData(
                    {
                        morecontent: morecontent,
                        isEnd: isEnd,
                        page: page + 1,
                        list: addList,
                    }
                );
            })
        } else {
            if (callback) {
                callback();
            }
        }
    },
    onReachBottom() {
        let { isEnd } = this.data;
        if (isEnd === false) {
            this.setData(
                {
                    morecontent: '正在加载中.....',
                }
            );
            this.getData();
        }
    },
    bindSee(event){
        const { id } = event.currentTarget.dataset;
        tt.navigateTo({
            url: `/pages/ticketpakdetail/ticketpakdetail?id=${id}`,
            success(res) {
              console.log(res);
            },
            fail(res) {
              console.log("navigateTo调用失败");
            },
          });
    }
})