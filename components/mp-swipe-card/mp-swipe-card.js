// components/mp-swipe-card/mp-swipe-card.js

const HTRESHOLD = 150;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pushList: {
      type: Array,
      value: [],
      observer(value) {
        this.setData({
          list: value.concat(this.data.list)
        })
      }
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    list: [
     
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTouchStart(e) {
      if (this.data.disabled) return;
      const touche = e.touches[0];
      this.setData({
        startPosition: {
          x: touche.clientX,
          y: touche.clientY,
        }
      })
    },
    handleTouchMove(e) {
      if (this.data.disabled) return;
      const touche = e.touches[0];
      const startPosition = this.data.startPosition;
      this.setData({
        position: {
          x: (touche.clientX - startPosition.x) * 2,
        }
      })
    },
    handleTouchEnd(e) {
      if (this.data.disabled) return;
      const currentPosition = this.data.position;
      if (currentPosition.x > HTRESHOLD) {
        this.triggerEvent('swipeout', {
          direction: 'right',
          item: this.data.list.slice(-1)[0],
          list: this.data.list,
        });
        this.translate(currentPosition, {x: 1000, y:0, z: 0}, 300, this.popTop.bind(this));
      } else if (currentPosition.x < -HTRESHOLD) {
        this.triggerEvent('swipeout', {
          direction: 'left',
          item: this.data.list.slice(-1)[0],
          list: this.data.list,
        });
        this.translate(currentPosition, {x: -1000, y:0, z: 0}, 300, this.popTop.bind(this));
      } else {
        this.triggerEvent('swipereset', {
          item: this.data.list.slice(-1)[0],
          list: this.data.list,
        });
        this.resetPosition();
      }
    },
    popTop() {
      this.setData({
        position: {
          x: 0,
        },
        list: [
          ...this.data.list.slice(0, -1)
        ]
      })
    },
    translate(fromPosition, toPosition, duration, cb) {
      const startTime = Date.now();
      const run = () => {
        setTimeout(() => {
          const nowTime = Date.now();
          let percent = (nowTime - startTime) / duration;
          if (percent > 1) {
            percent = 1;
          }
          const deltaX = (toPosition.x - fromPosition.x) * percent;
          const nextPosition = (fromPosition.x + deltaX);
          this.setData({
            position: {
              x: nextPosition,
              y: 0,
              z: 0,
            }
          })
          if (percent < 1) {
            run()
          } else {
            cb && cb()
          }
        }, 1000 / 60);
      }
      run()
    },
    resetPosition() {
      const currentPosition = this.data.position;
      this.translate(currentPosition, {x: 0, y:0, z: 0}, 300);
    }
  }
})
