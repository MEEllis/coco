const app = getApp();
import util from '../../utils/util.js'
Page({
  data: {
    loginState: 0,
    userInfo: {},
    hedaimg: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg"
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  // Event handler.
  viewTap: function () {
    this.setData(
      {
        text: "Set some data for updating view.",
      },
      function () {
        // this is setData callback
      },
    );
  },
  bindLogin: function () {
    util.loginByTT().then(({loginRes,infoRes}) => {
      this.setLogin(infoRes);
    })
  },
  setLogin(res){
    this.setData(
      {
        loginState: 1,
        userInfo: res.userInfo,
      },
      function () {
        // this is setData callback
      },
    );
  },
  customData: {
    foo: "bar",
  },
})