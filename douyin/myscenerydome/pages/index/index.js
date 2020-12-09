
const app = getApp();
import util from '../../utils/util.js'
import { getArticleList, getArticleVoucher, addUserVoucher } from '../../utils/api.js'
Page({
   data: {
      logurl: "indeximg/logo.jpg",
      // imageUrl: app.globalData.imageUrl,
      postion: "山东烟台市1",
      yhmoney: "100元千户苗寨兑换券",
      yhdate: "2020-11-18  11：50",
      hotgltext: "马来西亚是个多民族、多元文化国家，官方宗教为伊斯兰教。马来西亚是资本主义国家，其经济在20世纪90年代突飞猛进，为亚洲四小虎之一，已成为亚洲地区引人注目的多元化新兴工业国家",
      hotgldate: "2020-11-18  11：50",
      hotimg: [

         {
            hoturl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg",
            hottitle: "热门景点2236",
            hotmoney: "128元"
         },
         {
            hoturl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg",
            hottitle: "热门景点2236",
            hotmoney: "128元"
         },
         {
            hoturl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg",
            hottitle: "热门景点2236",
            hotmoney: "128元"
         },
         {
            hoturl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg",
            hottitle: "热门景点2236",
            hotmoney: "128元"
         },

      ],
      topadress: {
         address: "山东烟台黄务卧龙中路",
         latitude: 37.47834,
         longitude: 121.374641,
      },
      jl: "",
      phoneNumber: '18184122851',
      jqgllist: [],
      peoplelist: [
         {
            headimg: "indeximg/people/1.jpeg",
            bgcolor: "#4C3058",
            name: "牛野",
            goodat: "作图，规划和剪辑视频并且与客户更好的对接",
            others: "规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接",
         },
         {
            headimg: "indeximg/people/1.jpeg",
            bgcolor: "#A05B7A",
            name: "牛野",
            goodat: "作图，规划和剪辑视频并且与客户更好的对接",
            others: "规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接",
         }, {
            headimg: "indeximg/people/2.jpeg",
            bgcolor: "#4C3058",
            name: "牛野",
            goodat: "作图，规划和剪辑视频并且与客户更好的对接",
            others: "规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接",
         },
         {
            headimg: "indeximg/people/3.jpeg",
            bgcolor: "#A05B7A",
            name: "牛野",
            goodat: "作图，规划和剪辑视频并且与客户更好的对接",
            others: "规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接",
         }, {
            headimg: "indeximg/people/4.jpg",
            bgcolor: "#4C3058",
            name: "牛野",
            goodat: "作图，规划和剪辑视频并且与客户更好的对接",
            others: "规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接规划和剪辑视频并且与客户更好的对接",
         }
      ],
      url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg",
      color1: "#EF3461",
      color2: "#242424",
      vediolist: [
         {
            vsrc: "https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4",
            headicon: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg",
            likecount: 7,
            vname: "一条带泪的鱼",
            vadate: "2020-1-29"
         }, {
            vsrc: "https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4",
            headicon: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg",
            likecount: 7,
            vname: "一条带泪的鱼",
            vadate: "2020-1-29"
         }, {
            vsrc: "https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4",
            headicon: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg",
            likecount: 7,
            vname: "一条带泪的鱼",
            vadate: "2020-1-29"
         }, {
            vsrc: "https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4",
            headicon: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg",
            likecount: 7,
            vname: "一条带泪的鱼",
            vadate: "2020-1-29"
         }, {
            vsrc: "https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4",
            headicon: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg",
            likecount: 7,
            vname: "一条带泪的鱼",
            vadate: "2020-1-29"
         }, {
            vsrc: "https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/1534422848153.mp4",
            headicon: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4053869279,3012795408&fm=111&gp=0.jpg",
            likecount: 7,
            vname: "一条带泪的鱼",
            vadate: "2020-1-29"
         }
      ]
      ,
      background: ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166193275,1247763676&fm=26&gp=0.jpg"],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500
   },
   binderror(err) {
      console.log('图片加载失败', err);
   },
   bindload(e) {
      console.log('图片加载成功', e);
   }
   ,
   onLoad: function (options) {
      tt.getLocation({
         success: (res) => {
            var jl = util.getFlatternDistance(res.latitude, res.longitude, this.data.topadress.latitude, this.data.topadress.longitude)
            var desc;
            if (jl > 100) {
               desc = `距您>100km`
            } else {
               desc = `距您>${jl}km`
            }
            this.setData(
               {
                  jl: desc,
               },
            );
         },
         fail(res) {
            console.log(`getLocation调用失败`);
         },
      });
      this.getData();
   },
   getData() {
      getArticleList({
         page: 1,
         page_size: 20
      }).then(({ data }) => {
         //todo
         data.items = util.dataListPage
         this.setData(
            {
               jqgllist: data.items,
            }
         );
      })
      getArticleVoucher({ article_id: 2 }).then((res) => {
         this.setData({
            hotimg: res.data
         })
      })
   },
   onJqglClick(event) {
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
   bindPhoneNumber() {
      console.log(this)
      tt.makePhoneCall({
         phoneNumber: this.data.phoneNumber,
         // success: function () {
         //    console.log(0000);
         // }
      })
   },
   bindTopadress() {
      tt.openLocation({
         latitude: this.data.topadress.latitude,
         longitude: this.data.topadress.longitude,
         scale: 18,
         success() {
            console.log("打开地图成功");
         },
         fail(res) {
            console.log("打开地图失败:", res.errMsg);
         },
      })
   },
   bindPaishe() {
      tt.chooseVideo({
         success: () => {

         }
      })
   },
   bindSee(event) {
      const { id, article_id } = event.currentTarget.dataset;
      util.loginByTT().then(() => {
         addUserVoucher({ voucher_id: id, article_id }).then((res) => {
            tt.showToast({
               title: '领取成功~',
               icon: 'success',
            })
         })
      })
   },
});