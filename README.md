# 小程序卡片滑动组件


小程序的滑动片组件，类似探探的，支持无限滑动，可动态向卡片组中push新内容。

## 用法
```
git clone https://github.com/qizf7/mp-swipe-card.git
```
引入mp-swipe-card组件，mp-swipe-card组件依赖mp-swipe-card-item组件，定制卡片内容可以在此组件中编写，详见index页面。

由于无法使用scoped slot，目前使用一个单独的组件来定义卡片中的内容。在此项目中为mp-swipe-card-item组件,可修改为其他组件。

## 效果演示
![](https://raw.githubusercontent.com/qizf7/mp-swipe-card/master/doc/demo.gif)

## 属性

#### push-list(Array)
推入组件的数组。每次变化都会将新的数组推入组件中，在内容组件（mp-swipe-card-item）可以接收推入的数组项，自定义卡片内容。

#### disabled(Boolean)
是否禁止滑动

## 事件

#### swipeout
卡片滑出时触发
```javascript
// eventDetail
{
  direction: 'right',   // 方向，left左，right右
  item, // 被滑走的条目
  list, // 完整的数组
}
```
#### swipereset
滑动卡片重置位置时触发
```javascript
// eventDetail
{
  item, // 被滑走的条目
  list, // 完整的数组
}
```

## todo list
- [ ] 优化动画效果，新增多方向滑动
- [ ] 解决依赖子组件问题，scoped slot替代方案。


