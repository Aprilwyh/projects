<template>
  <!-- 样式绑定 -->
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{ todo.content }}</label>
    <button @click="delItem"></button>
  </div>
</template>
<script>
  export default {
    name: 'todoItem',
    props: {
      todo: Object // 指定从父组件传递过来的 todo 类型为 Object
    },
    methods: {
      delItem() {
        this.$emit('del', this.todo.id)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    input
      width: 50px
      height: 30px
      text-align: center
      cleanDefaultStyle()

      &:after
        content: ''
        background-image: url('~images/uncheck.svg')
        background-size: 25px 25px
        width: 25px
        height: 25px
        display: block
        margin: 4px auto

      &:checked:after
        content: ''
        background-image: url('~images/check.svg')
        background-size: 25px 25px
        width: 25px
        height: 25px

    label
      flex: 1
      transition: color 0.4s

    button
      width: 40px
      background-color: transparent
      cleanDefaultStyle()
      cursor: pointer
</style>