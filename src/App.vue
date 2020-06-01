<template>
  <div id="app">
    <ul class="topheader">
      <el-form :inline="true" class="demo-form-inline">
        <i class="el-icon-sunny"></i>
        <h1 class="title">攀枝花天然气门户网站</h1>
        <div class="searchDiv">
          <el-form-item>
            <el-input v-model="keyWord" placeholder="全站搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button round @click="searchCilck(keyWord)">查询</el-button>
          </el-form-item>
        </div>
      </el-form>
    </ul>
    <ul style="padding-left:0px">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item
          v-for="(o,index) in typeList"
          :key="index"
          :id="o.type"
          :index="o.path"
          @click="clickType(o.type)"
        >{{o.type}}</el-menu-item>
        <el-submenu v-for="(item,index) in slotTypeList" :key="index+'t'" :index="index+'t'">
          <template slot="title">{{item.type}}</template>
          <el-menu-item
            v-for="(item2,index2) in item.secendTypeList"
            :index="item2.path"
            :key="index2+'c'"
            @click="clickType(item2.type)"
          >{{item2.type}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="/feedback">留言</el-menu-item>
        <el-menu-item index="/downinfo">文章下载</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
      </el-menu>
    </ul>
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, onMounted } from '@vue/composition-api'
import { GetArticleTypeList } from './api/index.js'
export default {
  setup (props, { root }) {
    const activeIndex = ref('/index')
    const typeList = ref([])
    const keyWord = ref('')
    const slotTypeList = ref([])
    const loadingData = ref(false)
    const getArticleTypeList = () => {
      GetArticleTypeList().then((response) => {
        typeList.value = response.data[0]
        slotTypeList.value = response.data[1]
      })
    }
    const clickType = (type) => {
      root.$router.push({ path: '/articleList', query: { typeStr: type } })
    }
    const searchCilck = () => {
      root.$router.push({ path: '/search', query: { keyWord: keyWord.value } })
    }
    const handleSelect = (key, keyPath) => {

    }
    onMounted(() => {
      // 加载状态
      loadingData.value = true
      // 获取列表
      getArticleTypeList()
      loadingData.value = false
    })
    return {
      activeIndex,
      keyWord,
      typeList,
      slotTypeList,
      getArticleTypeList,
      clickType,
      searchCilck,
      handleSelect,
      onMounted
    }
  }

}
</script>

<style>
.imgs {
  width: 4em;
  height: 4em;
}
.el-menu {
  height: 60px;
}
.topheader {
  position: relative;
}
.el-icon-sunny {
  font-size: 50px;
  color: #ef9b9b;
}
.title {
  color: #716a6a;
  position: absolute;
  top: -18px;
  left: 110px;
}
.searchDiv {
  position: absolute;
  margin-left: 50vw;
  top: 10px;
}
.login {
  /* position: absolute !important; */
  float: right !important;
  margin-right: 2vw !important;
}
.register {
  float: right !important;
}
.loginShow {
  float: right !important;
}
</style>
