<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :key="itemClass.index" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
const LENGTH = 5; // 代表五颗星
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
export default {
  props: ['size', 'score'],
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2; // 乘2取地板再除以2，得到0.5的倍数
      let hasDecimal = score % 1 !== 0; // 判断是否有余数（有余数即为半颗星）
      let integer = Math.floor(score); // 直接取到整数，是几就有几颗星星
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON); // 有几颗星星循环几颗星星出来
      }
      if (hasDecimal) {
        result.push(CLS_HALF); // 半星最多只会出现一个，判断有就push
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF); // 补全星星
      }
      return result;
    }
  }
};
</script>

<style lang="less">
.star {
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
}
.star-48 {
  .star-item {
    width: 20px;
    height:20px;
    margin-right: 22px;
    background-size: 20px 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  .on {
    background-image: url('./star48_on@2x.png');
  }
  .half {
    background-image: url('./star48_half@2x.png');
  }
  .off {
    background-image: url('./star48_off@2x.png');
  }
}
.star-36 {
  .star-item {
    width: 15px;
    height:15px;
    margin-right: 6px;
    background-size: 15px 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .on {
    background-image: url('./star36_on@2x.png');
  }
  .half {
    background-image: url('./star36_half@2x.png');
  }
  .off {
    background-image: url('./star36_off@2x.png');
  }
}
.star-24 {
  .star-item {
    width: 10px;
    height:10px;
    margin-right: 3px;
    background-size: 10px 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  .on {
    background-image: url('./star24_on@2x.png');
  }
  .half {
    background-image: url('./star24_half@2x.png');
  }
  .off {
    background-image: url('./star24_off@2x.png');
  }
}
</style>
