// pages/details/coupons4.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: false,
    animationData: {},
    list: [
      {
        name: '权益类50%',
        text1: [
          { value: '添富盈系列' },
          { value: '新三板系列' },
          { value: '股权投资系列' }
        ],
        text2: [
          { value: '汇添富港深新价值' },
          { value: '汇添富价值精选' },
          { value: '汇添富蓝筹稳健' },
          { value: '汇添富中证中药C' }
        ]
      },
      {
        name: '固定收益类40%',
        text1: [
          { value: '五谷丰登系列' },
          { value: '添添盈系列' },
          { value: '季季高系列' }
        ],
        text2: [
          { value: '汇添富达欣混合' },
          { value: '汇添富增强收益' },
          { value: '汇添富高息债' }
        ]
      },
      {
        name: '货币类10%',
        text1: [
          { value: '汇添富现金宝' }
        ],
        text2: []
      },
    ]
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.rotate(360).step()

    this.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      this.setData({
        img: true
      })
    }.bind(this), 1500)
  }
})