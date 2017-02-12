// pages/demo/index.js
Page({
  data:{
    name:"郭帅",
    show:0,
    age:"80",
    scrollHeight:'400',
    title:{
    hire:'招聘/兼职',
    sale:'打折促销',
    car:'拼车',
    bagua:'聊聊八卦'
    },
    curr_actived:"hire",
    prev_actived:null,
    job_items:[
      {date:'3小时前',job:'清洁工',salary:'2000',connection:'18817514681',address:'江南大道988号'},{date:'2017-1-15',job:'领快递',salary:'200',connection:'18817518764',address:'前卫'},{date:'2017-1-15',job:'销售员',salary:'2000',connection:'18817512344',address:'江南大道988号'},
      {date:'2017-1-14',job:'程序员',salary:'8000',connection:'18817514589',address:'一街区'},
      {date:'2017-1-14',job:'黑车',salary:'200',connection:'18817514689',address:'一街区'}
    ],
    car_items:[
      {info_type:0,up_time:'2017-2-11',dest:'山西长治',go_time:'2017-2-16',connection:'19978742971'},
      {info_type:1,up_time:'2017-2-11',dest:'四川成都',go_time:'2017-2-18',connection:'19978332971'},
      {info_type:0,up_time:'2017-2-10',dest:'甘肃酒泉',go_time:'2017-2-26',connection:'18478002971'},
      {info_type:0,up_time:'2017-2-09',dest:'韩国釜山',go_time:'2017-2-16',connection:'19978742971'},
    ],
    sale_items:[
      {title:'老板凳三年庆',up_time:'2小时前',from_time:'2.11',to_time:'3.11',address:'老板凳火锅',tips:'优惠券大派送，先到先得'},
      {title:'凡仔开业',up_time:'1天前',from_time:'2.11',to_time:'2.16',address:'东部凡仔',tips:'开业大酬宾'},
       {title:'星星奶茶开业',up_time:'2天前',from_time:'2.05',to_time:'2.16',address:'东部凡仔',tips:'开玩笑的'}
    ],
    bagua_items:[
      {title:'直击人广改造后运营第一日：客流平稳 乘客点赞',detail:'新民网·最新报道】历时20多天的封站改造后，上海地铁1、8号线人广站今天（2月11日）终于揭开了神秘面纱。改造后站内新增的8部自动扶梯和1台无障碍电梯的体验如何？进出站闸机和安检区域的优化效果怎样？新民晚报新民网记者实地走访发现，“焕然一新”的人广站在元宵节的初次亮相，获得了市民好评。 '},
      {title:'学生翘课直播打游戏 老师发现后带全班集体围观',detail:'虽说不作不死终归一死，但如果遇到会玩套路的主，你不但会死，还会死得很尴尬。'},
       {title:'苹果库克再谈增强现实：将是规模庞大的大众化市场',detail:'腾讯科技讯 在增强现实市场，苹果已经落后于微软等对手。诸多迹象显示，苹果公司正在开发一款增强现实头盔，何时对外发布不得而知。日前，苹果首席执行官库克在接受英国媒体采访时，再次谈到了增强现实，他表示这一市场的规模将和智能手机一样大，并且能够改变人类的生活。'}
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
    // this.data.curr_actived='hire';
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
  changeView:function(e){
    var e=e.target.dataset.type;
    wx.setNavigationBarTitle({
      title: this.data.title[e]
    });
    this.setData({curr_actived:e});
  },
    hideswiper:function(e){
      console.log(e.detail.scrollTop);
      this.setData({show:1});
      this.setData({scrollHeight:'550'});

  },
  add: function(){
         wx.navigateTo({
      url: '../add/add'
    })
    }

})