import { getCollectArticle } from '../../utils/api.js'
Page({
  data: {
    list: [],
    page: 1,
    page_size: 20,
    morecontent: '',
    isEnd: false
  },
  onShow: function () {
    this.getData();
  },

  getData(callback) {

    let { page, page_size, isEnd } = this.data;
    if (isEnd === false) {
      getCollectArticle({
        page,
        page_size
      }).then(({ data }) => {
        // data = {
        //   items: []
        // }
        // for (let i = 0; i < 0; i++) {
        //   data.items.push({
        //     "id": 1,
        //     "title": "2",
        //     "price": 2,
        //     "article_id": 1,
        //     "create_time": "2020-05-29",
        //     "cover_img": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
        //   })
        // }
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
  onItemClick(event) {
    var id = event.currentTarget.dataset.id;
    tt.navigateTo({
      url: `/pages/datil/datil?id=${id}`,
      success(res) {
        console.log(res);
      },
      fail(res) {
        console.log("navigateTo调用失败");
      },
    });
  },
  //监听用户下拉动作
  onPullDownRefresh() {
    this.setData(
      {
        page: 1,
        isEnd: false,
      }
    );
    this.getData(() => {
      this.setData(
        {
          list: [],
        }
      );
      tt.stopPullDownRefresh();
    });
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
  }

});