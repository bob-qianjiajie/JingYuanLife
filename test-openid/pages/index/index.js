//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  globalData: {
    encryptedData: null,
    iv: null,
    session: null,
    step:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(getApp().data)
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        // success
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
          province: res.userInfo.province,
          city: res.userInfo.city
        })
        switch (res.userInfo.gender) {
          case 0:
            that.setData({
              sex: '未知'
            })
            break;
          case 1:
            that.setData({
              sex: '男'
            })
            break;
          case 2:
            that.setData({
              sex: '女'
            })
            break;
        }
      },
      fail: function () {
        // fail
        console.log("获取失败！")
      },
      complete: function () {
        // complete
        console.log("获取用户信息完成！")
      }
    })

    /*
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
              //console.log(res);
              //console.log(res.data);
              //console.log(res.data.session_key);
              that.globalData.session = res.data.session_key
            }
          })

          wx.getWeRunData({
            success(res) {
              const encryptedData = res.encryptedData
              //console.log('encryptedData')
              //console.log(res.encryptedData)
              //console.log('iv')
              //console.log(res.iv)
              that.globalData.iv = res.iv
              that.globalData.encryptedData = res.encryptedData
              wx.request({
                url: 'https://zjite.applinzi.com/api/sport/demo.php',
                header: {
                  'content-type': 'application/json'
                },
                data: {
                  sessionKey: that.globalData.session,
                  iv: that.globalData.iv,
                  encryptedData: that.globalData.encryptedData
                },
                success: function (res) {
                  //console.log(res);
                  console.log(res.data);
                  that.globalData.step = res.data;
                  console.log(that.globalData.step);
                }
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }

        //console.log(res.code) //这就是code

      }
    });
    */
  }
})
