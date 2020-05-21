<template>
  <div>
    <el-table :data="table_data.item" style="width: 100%"  v-loading="loadingData" @row-click="detail">
      <el-table-column prop="title" label="标题" ></el-table-column>
      <el-table-column prop="createBy" label="作者"  width="100%"></el-table-column>
      <el-table-column prop="updateDT" label="创建日期" :formatter="dateFormat" width="200%"></el-table-column>
    </el-table>
    <!-- <div class="black-space-30"></div> -->
    <!--底部分页-->
    <el-row>
      <el-pagination
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
// eslint-disable-next-line no-unused-vars
import { ref, reactive, onMounted, watch } from '@vue/composition-api'
import { GetArticleListByKeyWord } from '../api/article.js'
import moment from 'moment'

export default {
  setup (props, { root }) {
    const total = ref(0)
    const loadingData = ref(false)
    const page = reactive({
      page: 1,
      pageSize: 10
    })
    const formatData = () => {
      let requestData = {
        page: page.page,
        pageSize: page.pageSize,
        params: {}
      }
      // 分类
      if (root.$route.query.keyWord) {
        requestData.params.keyWord = root.$route.query.keyWord
      }
      return requestData
    }

    // eslint-disable-next-line camelcase
    const table_data = reactive({
      item: []
    })
    const dateFormat = (row, column) => {
      var date = row[column.property]
      if (date === undefined) { return '' };
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
    const getList = () => {
      // 单独处理数据
      let requestData = formatData()
      // 加载状态
      loadingData.value = true
      GetArticleListByKeyWord(requestData)
        .then(response => {
          let data = response.data
          // console.log(data)
          // 更新数据
          table_data.item = data.list
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

    watch(() => root.$route.query.keyWord, () => {
      getList()
    })
    const handleSizeChange = val => {
      page.page = val
    }
    const handleCurrentChange = val => {
      page.pageNumber = val
      getList()
    }
    const detail = (row, event, column) => {
      root.$router.push({ path: '/detail', query: { articleId: row.id } })
    }
    // onMounted(() => {
    //   // 获取列表
    //   getList()
    // })

    // expose to template
    return {
      // ref
      total,
      loadingData,
      // reactive
      table_data,
      // vue2.0 methdos
      getList,
      handleSizeChange,
      handleCurrentChange,
      detail,
      dateFormat
    }
  }
}
</script>
