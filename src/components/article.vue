<template>
  <div>
    <el-row>
      <el-col :span="16" id="title">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="7">
        <el-select v-model="type" placeholder="请选择类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button class="submitBT" type="info" round @click="submit">提交</el-button>
      </el-col>
    </el-row>
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 70vh" />
  </div>
</template>
<style scoped>
.submitBT {
  /* margin-right: 13vw;
  float: right; */
  margin-left: 2vw;
}
#title {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 2vh;
}
</style>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: '',
  props: [],
  components: {
    mavonEditor
  },
  data () {
    return {
      title: '',
      content: '',
      html: '',
      type: '',
      configs: {},
      options: [{
        value: 'news',
        label: '新闻'
      }, {
        value: 'recreation',
        label: '娱乐'
      }, {
        value: 'sports',
        label: '体育'
      }]
    }
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      let formdata = new FormData()
      this.$upload.post('/上传接口地址', formdata).then(res => {
        console.log(res.data)
        this.$refs.md.$img2Url(pos, res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    // 所有操作都会被解析重新渲染
    change (value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    // 提交
    submit () {
      console.log(this.html)
      console.log('title:' + this.title)
      this.$post('/Article/add', {
        content: this.html,
        title: this.title,
        type: this.type
      })
        .then((response) => {
          alert(JSON.stringify(response.message))
        })
      // this.$message.success('提交成功，已打印至控制台！')
    }
  },
  mounted () {

  }
}
</script>
