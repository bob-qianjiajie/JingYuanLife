// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    session: '',
    encryptedData:'',
    iv:'',
    steprun:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
            wx.request({
                url: 'https://zjite.applinzi.com/api/openid.php',
                header: {
                  'content-type': 'application/json'
                },
                data: {
                  code: res.code
                },
                success: function (res) {
                    that.setData({
                      session: res.data.session_key
                    })
                    console.log(that.data.session)
                }
            })
        }
        wx.getWeRunData({
          success: function (res) {
            that.setData({
              encryptedData: res.encryptedData,
              iv: res.iv
            })
            console.log(that.data.encryptedData)
            console.log(that.data.iv)
            wx.request({
              url: 'https://zjite.applinzi.com/api/sport/demo.php',
              header: {
                'content-type': 'application/json'
              },
              data: {
                sessionKey: that.data.session,
                iv: that.data.iv,
                encryptedData: that.data.encryptedData
              },
              success: function (res) {
                //console.log(res.data);
                that.setData({
                  steprun: res.data
                })
                console.log(that.data.steprun);
              }
            })
            
          }
        })
      }
    });
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