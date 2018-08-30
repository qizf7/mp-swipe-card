//index.js
//获取应用实例
const app = getApp()

const nameList = ['杀生丸殿下', '犬夜叉', '巫女桔梗', '日暮戈薇'];

Page({
  data: {
    pushList: []
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    setInterval(() => {
      this.setData({
        pushList: [{
          id: Math.floor(Math.random() * 1000),
          name: nameList[Math.floor(Math.random() * 3.99)],
        },{
          id: Math.floor(Math.random() * 1000),
          name: nameList[Math.floor(Math.random() * 3.99)],
        },{
          id: Math.floor(Math.random() * 1000),
          name: nameList[Math.floor(Math.random() * 3.99)],
        },{
          id: Math.floor(Math.random() * 1000),
          name: nameList[Math.floor(Math.random() * 3.99)],
        }]
      })
    }, 5000)
  },
  handleSwipeOut(...args) {
    console.log(args)
  },
  handleClickCard(...args) {
    console.log(args)
  },
  getUserInfo: function(e) {
    
  }
})
