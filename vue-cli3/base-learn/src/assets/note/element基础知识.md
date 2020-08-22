常用弹出组件
- el-dialog
- el-popover

sync 修饰符的作用
```
// 关闭或是点击空白处无需特别处理，通过 .sync 修饰符传递给父组件当前值状态
<el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
// 需要在 beforeClose 方法内手动处理 this.dialogVisible = false
<el-dialog :visible="dialogVisible" :before-close="handleClose">
```

通过插槽实现自定义内容