// pages/goods/goods.js
const {getSearch} = require("../../api/index.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData:[],
    search: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("hhh:", options.search)
    this.setData({
      search: options.search
    }),
    this.http(this.data.search)
      // this.setData({
      //   goodsData:JSON.parse(options.goodsData)
      // })
  },
  http(search){
    console.log("search:", this.data.search);
    getSearch({search}).then(res=>{
      if(!res.data.msg){
        this.setData({
          goodsData: res.data.data
        })
      }else {
        wx.showToast({
          title: res.data.msg,
          duration:1000
        })
      }
    })
  }
})