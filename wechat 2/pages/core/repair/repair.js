Page({
  data: {
    array: ['校级', '社团', '分院', '班级'],
    index: 0
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
      url: 'https://wanzhuanjingyuan.duapp.com/api/apply/department.php',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {//这里写你要请求的参数
        a: e.detail.value.department_area,
        b: e.detail.value.department_name,
        c: e.detail.value.department_suggest,
        d: e.detail.value.department_conacts_name,
        e: e.detail.value.department_conacts_tel,
        f: e.detail.value.department_conacts_qq,
        g: e.detail.value.department_qqqun
      }
    })
    if (e.detail.value.department_name == '') {
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
      wx.hideLoading()
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
