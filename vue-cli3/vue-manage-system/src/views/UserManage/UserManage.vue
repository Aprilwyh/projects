<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
      <common-form :form="operateForm" :formLabel="operateFormLabel"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <common-form inline :form="searchForm" :formLabel="formLabel">
        <el-button type="primary" @click="getList">搜索</el-button>
      </common-form>
    </div>
    <common-table :tableLabel="tableLabel" :tableData="tableData" :config="config" @changePage="getList" @edit="editUser" @del="delUser"></common-table>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm'
import CommonTable from '../../components/CommonTable'
export default {
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      operateType: 'add', // 新增 or 编辑
      isShow: false,
      searchForm: {
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: ''
        }
      ],
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'addr',
          label: '地址'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'birth',
          label: '出生日期'
        },
        {
          prop: 'sexLabel',
          label: '性别'
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名'
        },
        {
          model: 'addr',
          label: '地址'
        },
        {
          model: 'age',
          label: '年龄'
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        }
      ]
    }
  },
  methods: {
    getList() {
      this.config.loading = true
      this.$http
        .get('/api/user/getUser', {
          params: {
            page: this.config.page,
            name: this.searchForm.keyword ? this.searchForm.keyword : ''
          }
        })
        .then(res => {
          this.tableData = res.data.list.map(item => {
            // 对性别数据二次处理
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
          this.config.total = res.data.count
          this.config.loading = false
        })
    },
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    confirm() {
      if (this.operateType === 'edit') {
        this.$http.post('/api/user/edit', this.operateForm).then(res => {
          console.log(res)
          this.isShow = false
          this.getList()
        })
      } else if (this.operateType === 'add') {
        this.$http.post('/api/user/add', this.operateForm).then(res => {
          console.log(res)
          this.isShow = false
          this.getList()
        })
      }
    },
    delUser(row) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let id = row.id
          this.$http
            .get('/api/user/del', {
              params: {
                id
              }
            })
            .then(res => {
              console.log(res.data)
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getList()
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    addUser() {
      this.operateType = 'add'
      this.isShow = true
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common';
</style>
