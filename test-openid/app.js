App({
  data: {
    servsers: "http://192.168.0.253:3000",
    encryptedData:'',
    iv:'',
    session:'',
    step:{}
  },
  globalData: {
    encryptedData: null,
    iv: null,
    session: null
  },
  onLaunch: function () {
    var that=this
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
              that.globalData.session=res.data.session_key
            }
          })
          
          wx.getWeRunData({
            success(res) {
              const encryptedData = res.encryptedData
              //console.log('encryptedData')
             // console.log(res.encryptedData)
              //console.log('iv')
              //console.log(res.iv)
              that.globalData.iv = res.iv
              that.globalData.encryptedData = res.encryptedData
              var that = this
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
                 // console.log(res);
                  console.log(res.data);
                  //console.log(res.data);
                  that.globalData.step = res.data;
                  that.setData({
                    nic: res.data
                  })
                }
              })
            }
          })
          console.log(that.globalData.step);
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
        //console.log(res.code) //这就是code
        
      }
    });
  }
})