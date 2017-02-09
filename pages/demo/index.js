// pages/demo/index.js
Page({
  data:{
    name:"郭帅",
    show:0,
    age:"80",
    scrollHeight:'400',
    items:[
      {date:'2017-1-15',job:'清洁工',salary:'2000',connection:'18817514389',address:'江南大道988号'},{date:'2017-1-15',job:'领快递',salary:'200',connection:'18817514389',address:'前卫'},{date:'2017-1-15',job:'销售员',salary:'2000',connection:'18817514389',address:'江南大道988号'},
      {date:'2017-1-14',job:'程序员',salary:'8000',connection:'18817514389',address:'一街区'},
      {date:'2017-1-14',job:'黑车',salary:'200',connection:'18817514389',address:'一街区'}
    ],


     imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  

 changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  wanted:function(){
    wx.setNavigationBarTitle({
      title: '招聘'
    });
  },
  sale:function(){
      wx.setNavigationBarTitle({
        title: '活动优惠'
      });
  },
  car:function(){
      wx.setNavigationBarTitle({
        title: '拼车/叫车'
      });
  },
  bagua:function(){
      wx.setNavigationBarTitle({
        title: '八卦'
      });
  },
  hideswiper:function(e){
      console.log(e.detail.scrollTop);
      this.setData({show:1});
      this.setData({scrollHeight:'550'});

  }

})