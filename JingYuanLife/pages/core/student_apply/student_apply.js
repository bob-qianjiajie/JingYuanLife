Page({
  data: {
    array: ['数字信息技术学院', '物流技术学院', '财会金融学院', '汽车技术学院', '商贸物流学院', '管理技术学院', '文化艺术学院'],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  formSubmit: function (e) {
    wx.request({
      url: 'https://wanzhuanjingyuan.duapp.com/api/apply/student.php',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {//这里写你要请求的参数
        a: e.detail.value.a,
        b: e.detail.value.b,
        c: e.detail.value.c,
        d: e.detail.value.d,
        e: e.detail.value.e,
        f: e.detail.value.f
      }
    })
    if (e.detail.value.b == '') {
      wx.showToast({
        title: '失败',
        icon: 'loading',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    setTimeout(function () {
      wx.navigateBack()
    }, 2000)
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})
