// pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  get3rdSession: function () {
    let that = this
    wx.request({
      url: 'https://zjite.applinzi.com/api/openid.php',
      data: {
        code: this.data.code
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        var sessionId = res.data;
        that.setData({ sessionId: sessionId })
        wx.setStorageSync('sessionId', sessionId)
        that.decodeUserInfo()
      }
    })
  },
  decodeUserInfo: function () {
    let that = this
    wx.request({
      url: 'https://zjite.applinzi.com/api/sport/demo.php',
      data: {
        encryptedData: that.data.encryptedData,
        iv: that.data.iv,
        session: wx.getStorageSync('sessionId')
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        let todayStep = res.data.stepInfoList.pop()
        that.setData({
          step: todayStep.step
        });
      }
    })
  },
  onLoad: function () {
    let that = this
    wx.login({
      success: function (res) {
        let code = res.code
        that.setData({ code: code })
        wx.getWeRunData({//解密微信运动
          success(res) {
            const wRunEncryptedData = res.encryptedData
            that.setData({ encryptedData: wRunEncryptedData })
            that.setData({ iv: res.iv })
            that.get3rdSession()//解密请求函数
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})