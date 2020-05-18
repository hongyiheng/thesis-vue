<template>
  <div class="block" style="background-color: #b8e82221;">
    <el-container>
      <el-main>
        <el-timeline>
          <div v-for="(item,index) in feedbackList" :key="index">
            <el-timeline-item :timestamp='item.createdDTStr' placement="top">
              <el-card>
                <h4>{{item.content}}</h4>
              </el-card>
            </el-timeline-item>
          </div>
        </el-timeline>
      </el-main>
      <el-footer>
        <el-row style="margin-top: 3px;">
          <el-col :span="20" style="margin-left:5vw">
            <el-input type="text" v-model="content" />
          </el-col>
          <el-col :span="2">
            <el-button type="primary" @click="addFeedback()">发送</el-button>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, reactive, onMounted } from '@vue/composition-api'
// eslint-disable-next-line no-unused-vars
import { AddFeedback, GetFeedbackList } from '../api/feedback.js'
export default {
  setup (props, { root }) {
    const feedbackList = ref([])
    const content = ref('')
    const feedback = reactive({
      content: ''
    })
    const getFeedbackList = () => {
      GetFeedbackList()
        .then(response => {
          let data = response.data
          feedbackList.value = data
        })
    }
    const addFeedback = () => {
      if (content.value === '') {
        alert('请输入留言')
        return false
      }
      feedback.content = content.value
      AddFeedback(feedback)
        .then(response => {
          //   alert(JSON.stringify(response.message))
          getFeedbackList()
          content.value = ''
        })
    }
    const comeback = () => {
      root.$router.go(-1)
    }
    onMounted(() => {
      getFeedbackList()
    })
    return {
      feedbackList,
      getFeedbackList,
      content,
      addFeedback,
      comeback
    }
  }
}
</script>

<style scoped>
.el-footer {
  background-color: #cab4173b;
  height: 45px !important;
}
.el-main {
  height: calc(100vh - 220px);
}
</style>
