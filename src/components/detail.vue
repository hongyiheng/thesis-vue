<template>
  <div style="background-color: #b8e82221;">
    <link
      href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css"
      rel="stylesheet"
    />
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24" class="titleDiv">
            <center>
              <strong>
                <div v-html="title" />
              </strong>
            </center>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" class="centerDiv">
            <div class="markdown-body" v-html="content" />
            <!-- <p placeholder v-html= "content" :disabled="true" class="article">{{content}}</p> -->
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row style="margin-top: 3px;">
          <el-button type="success" @click="comeback()">返回</el-button>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import 'mavon-editor/dist/css/index.css'
import { onMounted, ref } from '@vue/composition-api'
import { GetArticle } from '../api/article.js'
export default {
  setup (props, { root }) {
    const content = ref('')
    const title = ref('')
    const getArticle = () => {
      GetArticle(root.$route.query.articleId)
        .then((response) => {
          content.value = response.data.content
          title.value = response.data.title
        // console.log(response.data.content)
        })
    }
    onMounted(() => {
      getArticle()
    })
    const comeback = () => {
      root.$router.go(-1)
    }
    return {
      comeback,
      onMounted,
      content,
      title
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
  margin-bottom: 12px;
}
</style>
