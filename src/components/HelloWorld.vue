<template>
  <div>
    <el-table :data="table_data.item" style="width: 100%" border v-loading="loadingData">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
    </el-table>
    <div class="black-space-30"></div>
    <!--底部分页-->
    <el-row>
      <el-pagination
        class="pull-right"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api'
import command from '../util/command.js'
import { GetList } from '../api/article.js'

export default {
  setup () {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })
    const total = ref(0)
    const loadingData = ref(false)
    const page = reactive({
      page: 1,
      pageSize: 10
    })
    const formatData = () => {
      let requestData = {
        page: page.page,
        pageSize: page.pageSize
      }
      // 分类ID
      if (command.getUrlParamChinese('type')) {
        requestData.type = command.getUrlParamChinese('type')
      }
      // 日期
      // if (date_value.value.length > 0) {
      //   requestData.startTiem = date_value.value[0]
      //   requestData.endTime = date_value.value[1]
      // }
      // 关键字
      // if (search_keyWork.value) {
      //   requestData[search_key.value] = search_keyWork.value
      // }
      return requestData
    }
    // eslint-disable-next-line camelcase
    const table_data = reactive({
      item: []
    })
    const getList = () => {
      // 单独处理数据
      let requestData = formatData()
      // 加载状态
      loadingData.value = true
      GetList(requestData)
        .then(response => {
          let data = response.data.data
          // 更新数据
          table_data.item = data.data
          // 页面统计数据
          total.value = data.total
          // 加载状态
          loadingData.value = false
        })
        .catch(error => {
          console.log(error)
          loadingData.value = false
        })
    }

    // expose to template
    return {
      // ref
      count,
      // reactive
      object,
      table_data,
      // vue2.0 methdos
      getList
    }
  }
}
</script>
