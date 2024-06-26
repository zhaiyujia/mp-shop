const { getBanner } = require("../../api/index.js")

Page({
  data: {
    swiperOptions: {
      indicatorDots: true,
      autoplay: true,
      interval: 1000,
      duration: 3000,
      swiperData: []
    },
    navData: [
      {
        text: "数码",
        icon: "like",
        color: "#ff0000"
      },
      {
        text: "生鲜",
        icon: "star",
        color: "#ff0000"
      },
      {
        text: "会员",
        icon: "fire",
        color: "#ff0000"
      },
      {
        text: "优惠",
        icon: "gift",
        color: "#ff0000"
      },
      {
        text: "充值",
        icon: "phone",
        color: "#ff0000"
      },
      {
        text: "领券",
        icon: "gem",
        color: "#ff0000"
      },
      {
        text: "外卖",
        icon: "gift-card",
        color: "#ff0000"
      },
      {
        text: "美食",
        icon: "smile",
        color: "#ff0000"
      }
    ]
  },
  onLoad() {
    getBanner().then(res => {
      console.log(res.data.data.result);
      this.setData({
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        swiperData: res.data.data.result
      })
    })
  }
})
