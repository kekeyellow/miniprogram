Page ({
  data: {
    message: '哈哈哈',
    list:{}
  },
  onLoad() {
    console.log('onload')
    const _this = this
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/home/multidata',
      success: function(res) {
        console.log(res)
        const data = res.data.data.banner.list;
        _this.setData({
          list: data
        })
      }
    })
  },
  handleViewClick() {
    this.setData({
      message:'lalala'
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  onPageScroll(obj) {
    console.log(obj);
  },
  onReachBottom() {
    console.log('页面滚到底部');
  },
  onPullDownRefresh() {
    console.log('刷新');
  }
})
