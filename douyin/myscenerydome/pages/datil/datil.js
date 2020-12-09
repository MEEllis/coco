import { getArticleDetail } from '../../utils/api.js'
import util from '../../utils/util.js'
import { setCollectArticle, setCancelCollectArticle, getArticleCollectStatus } from '../../utils/api'

Page({
  data: {
    info: {},
    isShoucang: false,
  },
  onLoad: function (options) {
    const { id } = options;
    if (id !== undefined) {
      getArticleDetail({
        article_id: id,
      }).then(({ data }) => {
        this.setData(
          {
            info: data,
          }
        );
      })
      const userInfo = tt.getStorageSync("userInfo");
      if (userInfo) {
        getArticleCollectStatus({
          article_id: id,
        }).then(({ data }) => {
          this.setData({
            isShoucang: data.status
          })
        })
      }
    }
  },
  bindPaishe() {
    util.loginByTT().then(() => {
      const { isShoucang } = this.data;
      if (isShoucang) {
        setCancelCollectArticle({
          article_id: this.data.info.id,
        }).then(() => {
          this.setData(
            {
              isShoucang: false,
            },
          );
          tt.showToast({
            title: '取消收藏成功',
            icon: 'success',
          })
        })
      } else {
        setCollectArticle({
          article_id: this.data.info.id,
        }).then(() => {
          this.setData(
            {
              isShoucang: true,
            },
          );

          tt.showToast({
            title: '收藏成功',
            icon: 'success',
          })
        })
      }
    })
  },
})