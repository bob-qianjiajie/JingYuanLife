//location.js
//获取应用实例
var app = getApp()
Page({
  data: {
    markers: [{
      latitude: 30.308980,
      longitude: 120.379030,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    circles:[{
      latitude: 30.308980,
      longitude: 120.379030,
      color: "#000000AA",
      fillColor: "#000000AA",
      strokeWidth: 400,
      radius:40
    }],
    covers: [{
      latitude: 30.308980,
      longitude: 120.379030,
      iconPath: '../../images/wechart.png',
      rotate: 10
    }, {
      latitude: 30.308980,
      longitude: 120.379030,
      iconPath: '../../images/wechart.png',
      rotate: 90
    }]
  },
  onLoad: function () {
    console.log('地图定位！')
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude: 30.308980,
          longitude: 120.379030,
          name: "浙江经济职业技术学院",
          scale: 16
        })
      }
    });
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '玩转经院',
      path: '',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
