//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    core: [
      { id: 'kb', name: '课表查询', disabled: true, show: false },
      { id: 'cj', name: '成绩查询', disabled: false, show: true },
      { id: 'ks', name: '考试安排', disabled: false, show: true },
      { id: 'kjs', name: '空教室', disabled: false, show: true},
      { id: 'xs', name: '晨跑查询', disabled: false, show: true},
      { id: 'ykt', name: '一卡通', disabled: false, show: true},
      { id: 'jy', name: '借阅信息', disabled: false, show: true},
      { id: 'xf', name: '学费信息', disabled: false, show: true},
      { id: 'sdf', name: '电费查询', disabled: false, show: true},
      { id: 'bx', name: '物业报修', disabled: false, show: true},
      { id: 'szf', name: '素质分', disabled: false, show: true},
      { id: 'kz', name: '等级考试', disabled: false, show: true},
      { id: 'qnjs', name: '青年集市', disabled: false, show: true}
    ]
  },
  onShareAppMessage: function () {
    return {
      title: '玩转经院',
      desc: '碎片化、一站式、一体化校园移动门户',
      path: '/pages/index/index'
    };
  }
});