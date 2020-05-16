<template>
  <div>
    <link href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css" rel="stylesheet">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24" class="titleDiv">
            <center><strong><div v-html="title"/></strong></center>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" class="centerDiv">
            <div  class="markdown-body"   v-html="content"/>
            <!-- <p placeholder v-html= "content" :disabled="true" class="article">{{content}}</p> -->
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-button type="success" @click="comeback()">返回</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import command from '../util/command.js'
import 'mavon-editor/dist/css/index.css'
export default {
  mounted () {
    this.$post('/Article/getOne',
      command.getUrlParam('articleId')
    ).then((response) => {
      this.content = response.data.content
      this.title = response.data.title
      // console.log(response.data.content)
    })
  },
  data () {
    return {
      content: '',
      title: ''
    }
  },
  methods: {
    comeback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.article {
  font-size: 18px;
  height: auto;
  overflow: hidden;
  white-space: normal;
}
.centerDiv {
  margin-left: 12.5%;
}
.el-footer {
  height: 45px !important;
}
.el-main {
  height: calc(100vh - 220px);
}
.titleDiv {
  font-family: 黑体;
  font-size: 24px;
  margin-bottom: 12px
}
</style>
