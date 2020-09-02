export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    // 方便传递数据
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home'
      }
    ]
  },
  mutations: {
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        // 如果没有就添加到 tabs 中，如果有就不添加
        let result = state.tabsList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''
      } else {
        state.currentMenu = null
      }
    },
    // 点击标签后触发删除方法
    closeTab(state, val) {
      // 如果在 tabsList 中找到就删除
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
