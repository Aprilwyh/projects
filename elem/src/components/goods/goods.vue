<template>
  <div class="goods">
    <div class="menu" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" :key="item.index" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" :key="item.id" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" :key="food.id" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" alt="食品参考图" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import BetterScroll from 'better-scroll';
import BScroll from 'better-scroll';

/* let bs = new BetterScroll('.wrapper', {
  movable: true,
  zoom: true
}) */

/* import BScroll from '@better-scroll/core'

let bs = new BScroll('.wrapper', {}) */

// const ERR_OK = 0;
export default {
  /* props: {
    seller: {
      type: Object
    }
  }, */
  data() {
    return {
      goods: []
    };
  },
  props: ['seller'],
  created() {
    // 动态展示不同的class
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$axios.get('../api/data.json').then((result) => {
      // result = result.body;
      // if (result.errno === ERR_OK) {
      this.goods = result.data.goods;
      this.$nextTick(() => {
        this._initScroll();
      });
      // }
    });
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {});
    }
  }
};
</script>

<style lang="less">
.goods {
  display: flex;
  position: absolute;
  // 定义视口高度
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu {
    // 三个属性：等分、内容缩放、占位空间
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      line-height: 14px;
      padding: 0 12px;
      .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: bottom;
        // 有&是指向icon父级元素的意思，decrease是与icon同级的，也可以不带&写在icon外面
        &.decrease {
          background-image: url('./decrease_3@2x.png');
        }
        &.discount {
          background-image: url('./discount_3@2x.png');
        }
        &.guarantee {
          background-image: url('./guarantee_3@2x.png');
        }
        &.invoice {
          background-image: url('./invoice_3@2x.png');
        }
        &.special {
          background-image: url('./special_3@2x.png');
        }
      }
      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;
        &.border-1px::after {
          border-top: 1px solid rgba(7, 17, 27, .1);
        }
      }
    }
  }
  .foods {
    flex: 1;
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #D9DDE1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background-color: #F3F5F7;
    }
    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      &.border-1px::after {
        border-bottom: 1px solid rgba(7, 17, 27, .1);
      }
      &:last-child.border-1px::after {
        display: none;
        margin-bottom: 0px;
      }
      .icon {
        /* 宽度固定57px */
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .content {
        /* 宽度自适应 */
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc, .extra {
          line-height: 10px;
          color: rgb(147, 153, 159);
        }
        .desc {
          margin-bottom: 8px;
          font-size: 10px;
        }
        .extra {
          font-size: 0px;
          span {
            font-size: 10px;
          }
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
      }
    }
  }
}
</style>
