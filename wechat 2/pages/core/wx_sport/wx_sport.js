var app = getApp();
Page({
  data: {
    userInfo: {}
  },
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        console.log('____')
        console.log(res)
        that.setData({
          userInfo: res.data
        })
        console.log('____')
      }
    })

    wx.getStorage({
      key: 'openid',
      success: function (res) {
        that.setData({
          openid: res.data
        })
        console.log(that.data.openid)
      }
    })
    wx.request({
      url: 'https://zjite.applinzi.com/api/apply/wx_sport_query.php',
      header: {
        'content-type': 'application/json'
      },
      data: {
        a: that.data.openid
      },
      success: function (res) {
        console.log('openid1111')
        console.log(res.data[0])
        that.setData({
          step: res.data
        })
      }
    })
  }
})