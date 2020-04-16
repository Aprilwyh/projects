<template>
  <div class="header">
    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="seller.avatar" alt="用户头像" width="64" height="64">
      </div>
      <!-- 内容区 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <!-- 根据不同的类型显示图片，减/折等等 -->
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail(true)">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 公告区 -->
    <div class="bulletin" @click="showDetail(true)">
      <span class="title"></span><span class="text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景图片 -->
    <div class="background">
      <img :src="seller.avatar" alt="背景图片" width="100%" height="200%">
    </div>
    <!-- 详情弹出层 -->
    <div class="detail" v-show="detailShow">
      <div class="container clearfix">
        <div class="content">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="stars">
            <star :size="seller.ratingCount" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports" :key="item.index">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{ seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin-inner">
            <p class="content-inner">{{ seller.bulletin }}</p>
          </div>
        </div>
      </div>
      <div class="footer" @click="showDetail(false)">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
// 引入star组件
import star from '../star/star.vue';
// 导出该组件
export default {
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail(flag) {
      this.detailShow = flag;
    }
  },
  props: ['seller'],
  created() {
    // 动态展示不同的class
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    star
  }
};
</script>
<style lang="less">
.header {
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);
  position: relative;
  overflow: hidden;
  .main-content {
    padding: 24px 12px 18px 24px;
    font-size: 0px;
    position: relative;
    .avatar,
    .content {
      display: inline-block;
    }
    .avatar img {
      border-radius: 4px;
    }
    .content {
      margin-left: 16px;
      vertical-align: bottom;
      .title {
        margin: 2px 0px 8px 0px;
        .brand {
          display: inline-block;
          width: 30px;
          height: 18px;
          background-image: url('./brand@2x.png');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name {
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
          margin-left: 6px;
          vertical-align: bottom;
        }
      }
      .description {
        font-size: 12px;
        line-height: 12px;
      }
      .support {
        font-size: 10px;
        margin: 10px 0px 2px 0px;
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: bottom;
          // 有&是指向icon父级元素的意思，decrease是与icon同级的，也可以不带&写在icon外面
          &.decrease {
            background-image: url('./decrease_1@2x.png');
          }
          &.discount {
            background-image: url('./discount_1@2x.png');
          }
          &.guarantee {
            background-image: url('./guarantee_1@2x.png');
          }
          &.invoice {
            background-image: url('./invoice_1@2x.png');
          }
          &.special {
            background-image: url('./special_1@2x.png');
          }
        }
      }
    }
    .support-count {
      background-color: rgba(0, 0, 0, .2);
      height: 24px;
      line-height: 24px;
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      border-radius: 14px;
      text-align: center;
      .count,
      .icon-keyboard_arrow_right {
        vertical-align: middle;
        line-height: 24px;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right {
        margin-left: 2px;
      }
    }
  }
  .bulletin {
    height: 28px;
    line-height: 28px;
    background-color: rgba(7, 17, 27, .2);
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    .title {
      display: inline-block;
      width: 22px;
      height: 12px;
      background-image: url('./bulletin@2x.png');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .text {
      font-size: 10px;
      margin: 0 4px;
      vertical-align: middle;
    }
    .icon-keyboard_arrow_right {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 10px;
    }
  }
  .background {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(10px);
  }
  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, .8);
    .container {
      min-height: 99%;
      color: #fff;
      width: 100%;
      text-align: center;
      .content {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          line-height: 16px;
          font-weight: 700;
          font-size: 16px;
        }
        .stars {
          margin-top: 18px;
          padding: 2px 0;
          text-align: center;
        }
        .title {
          display: flex;
          width: 80%;
          margin: 28px auto 24px auto;
          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
          }
          .text {
            padding: 0 12px;
            font-weight: 700;
            font-size: 14px;
          }
        }
        .supports {
          width: 80%;
          margin: 0 auto;
          .support-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;
            text-align: left;
            &:last-child {
              margin-bottom: 0;
            }
            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 6px;
              background-size: 16px 16px;
              background-repeat: no-repeat;
              &.decrease {
                background-image: url('./decrease_2@2x.png');
              }
              &.discount {
                background-image: url('./discount_2@2x.png');
              }
              &.guarantee {
                background-image: url('./guarantee_2@2x.png');
              }
              &.invoice {
                background-image: url('./invoice_2@2x.png');
              }
              &.special {
                background-image: url('./special_2@2x.png');
              }
            }
            .text {
              line-height: 16px;
              font-size: 12px;
            }
          }
        }
        .bulletin-inner {
          width: 80%;
          margin: 0 auto;
          .content-inner {
            text-align: left;
            padding: 0 12px;
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
    }
    .footer {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
    }
  }
}
</style>
