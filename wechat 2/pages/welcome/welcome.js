var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          nickName: res.data.nickName,
          avatarUrl: res.data.avatarUrl
        });
        //console.log(res.data)
      }
    })
    wx.getStorage({
      key: 'sessionkey',
      success: function (res) {
        that.setData({
          sessionkey:res.data
        });
      }
    })
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        that.setData({
          openid: res.data
        });
      }
    })
    //运动api
    wx.getWeRunData({
      success: function (res) {
        that.setData({
          encryptedData: res.encryptedData,
          iv: res.iv
        })
        // console.log(that.data.encryptedData)
        //console.log(that.data.iv)
        wx.request({
          url: "https://zjite.applinzi.com/api/sport/demo.php",
          header: {
            'content-type': 'application/json'
          },
          data: {
            sessionKey: that.data.sessionkey,
            iv: that.data.iv,
            encryptedData: that.data.encryptedData
          },
          success: function (res) {
            var abc = res.data.replace(/},{"timestamp"/g, "");
            var abc = abc.replace(/,"step"/g, "");
            var abc = abc.replace(/}],"watermark"/g, "");
            var abc = abc.split(":");
            console.log(abc[63]);
            wx.setStorage({
              key: 'step',
              data: abc
            })
            //step插入数据库
            wx.request({
              url: 'https://zjite.applinzi.com/api/apply/wx_sport.php',
              header: {
                'content-type': 'application/json'
              },
              data: {
                a: that.data.openid,
                b: abc[63],
                c: that.data.avatarUrl,
                d: that.data.nickName
              },
              success: function (res) {
                console.log('success')
              }
            })
          }
        })

      }
    })
    

    //下载图片
    wx.request({
      url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN',
      success: function (res) {
        var data = res.data;
        // 取一个随机数，让图片动态显示
        var n = Math.round(Math.random() * 8);
        // 处理获取的url
        data.images[n].url = data.images[n].url.replace('1920x1080', '1080x1920');
        var url = 'https://www.bing.com' + data.images[n].url;
        // 处理获取的版权信息
        //var copyright = '© ' + data.images[n].copyright.split('，')[0];
        that.setData({
          url: url,
          copyright: '玩转经院 © ZJTIE'
        });
      }
    });
   //登陆
    /*
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              that.setData({
                nickName: nickName,
                avatarUrl: avatarUrl
              });
              wx.setStorage({
                key: 'userInfo',
                data: res.userInfo,
              })  
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });*/
  }
  ,
  onTap: function () {
    console.log('Get Welcome！')
    wx.switchTab({
      url: '../index/index',
    });
  },
  onshow:function(){
    var that = this;
    wx.request({
      url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN',
      success: function (res) {
        var data = res.data;
        // 取一个随机数，让图片动态显示
        var n = Math.floor(Math.random() * 8);
        // 处理获取的url
        data.images[n].url = data.images[n].url.replace('1920x1080', '1080x1920');
        var url = 'https://www.bing.com' + data.images[n].url;
        // 处理获取的版权信息
        var copyright = '© ' + data.images[n].copyright.split('，')[0];
        that.setData({
          url: url,
          copyright: '玩转经院 © ZJTIE'
        });
      }
    });
  }
})
