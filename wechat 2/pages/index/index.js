//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    core: [
      { id: 'wc', name: '附近厕所', disabled: true },
      { id: 'jiudian', name: '附近酒店', disabled: true },
      { id: 'daohang', name: '到经院', disabled: true },
      { id: 'department', name: '部门申请', disabled: true },
      { id: 'repair', name: '报修平台', disabled: true },
      { id: 'shangke', name: '上课时间', disabled: true },
      { id: 'tel', name: '校园电话', disabled: true },
      { id: 'run', name: '经院跑步', disabled: true },
      { id: 'explore', name: '曾经运动', disabled: true },
      { id: 'wx_sport', name: '经院运动', disabled: true },
      { id: 'kb', name: '课表查询', disabled: false},
      { id: 'cj', name: '成绩查询', disabled: false},
      { id: 'ks', name: '考试安排', disabled: false},
      { id: 'kjs', name: '空教室', disabled: false},
      { id: 'xs', name: '晨跑查询', disabled: false},
      { id: 'ykt', name: '一卡通', disabled: false},
      { id: 'jy', name: '借阅信息', disabled: false},
      { id: 'xf', name: '学费信息', disabled: false},
      { id: 'sdf', name: '电费查询', disabled: false},
      { id: 'bx', name: '物业报修', disabled: false},
      { id: 'szf', name: '素质分', disabled: false},
      { id: 'kz', name: '等级考试', disabled: false},
      { id: 'qnjs', name: '青年集市', disabled: false}
    ]
  },
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res.data)
      }
    })
    wx.getStorage({
      key: 'sessionkey',
      success: function (res) {
        console.log(res.data)
      }
    })
    
    wx.login({
      success: function (res) {
        wx.getWeRunData({
          success: function (res) {
            that.setData({
              encryptedData: res.encryptedData,
              iv: res.iv
            })
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
                console.log(abc);
                that.setData({
                  step: abc
                });
              }
            })

          }
        })
      }
    });
  },
  onShareAppMessage: function () {
    return {
      title: '玩转经院',
      desc: '碎片化、一站式、一体化校园移动门户',
      path: '/pages/index/index'
    };
  },
  disabled_item: function () {
    console.log(core.show)
  }
});