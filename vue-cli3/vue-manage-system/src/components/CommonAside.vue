<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#6d7993"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.path" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/video',
          label: '视频管理',
          icon: 'video-play'
        },
        {
          path: '/user',
          label: '用户管理',
          icon: 'user'
        },
        {
          label: '其他',
          icon: 'setting',
          children: [
            {
              path: '/page1',
              label: '页面1'
            },
            {
              path: '/page2',
              label: '页面2'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
