const app = getApp();
import util from '../../utils/util.js'
import { getArticleList } from '../../utils/api.js'
Page({
  data: {
    // imageUrl: app.globalData.imageUrl,
    list: [],
    page: 1,
    page_size: 20,
    morecontent: '',
    isEnd: false
  },
  onLoad: function (options) {
    this.getData();
  },
  startPullDownRefresh() {
    this.getData(() => {
    });
  },
  getData(callback) {
    let { page, page_size, isEnd } = this.data;
    if (isEnd === false) {
      getArticleList({
        page,
        page_size
      }).then(({ data }) => {
        if (callback) {
          callback();
        }
        const { list } = this.data;
        //todo
        data.items = util.dataListPage
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