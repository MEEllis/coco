const app = getApp();
Page({
   data: {
      hedaimg: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg",
   },
   tapName: function (event) {
      debugger
      this.color1 = this.color2;
      console.log(event);
   },
   onLoad: function (options) {
      // Do some initialize when page load.
      console.log(11)
    },
})