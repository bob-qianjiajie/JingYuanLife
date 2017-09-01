import { log, promiseHandle } from 'utils/util';
//app.js
/*
1.openid
2.sessionkey
3.iv
4.encryptedData
5.userinfo
*/
App({
  //初始化
  onLaunch: function() {
    console.log('程序启动！')
    var that = this
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    /*wx.getLocation({
      success: function (res) {
        console.log(res)
      }
    })
    */
    wx.login({
      success: function (res) {
        if (res.code) {
          //openid
          wx.request({
            url: 'https://zjite.applinzi.com/api/openid.php',
            header: {
              'content-type': 'application/json'
            },
            data: {
              code: res.code
            },
            success: function (res) {
              wx.setStorage({
                key: 'sessionkey',
                data: res.data.session_key,
              })
              wx.setStorage({
                key: 'openid',
                data: res.data.openid,
              })
              //console.log(res.data)
            }
          })
          //userinfo
          wx.getUserInfo({
            success: function (res) {
              wx.setStorage({
                key: 'userInfo',
                data: res.userInfo,
              })
              //console.log(res)
            }
          })
       /* } else {
          console.log('获取用户登录态失败！' + res.errMsg)*/
        }
      }
    });
  },

  
  /*
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
          globalData: {
            userInfo: res.userInfo
          }
          console.log(that.globalData.userInfo)
        } 
      })
    }
  },*/

  globalData: {
    infi:null
  }
})
