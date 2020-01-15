<template>
  <div id="app">
    <ul class="topheader">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <i class="el-icon-sunny"></i>
        <h1 class="title">天然气门户网站</h1>
        <div class="searchDiv">
          <el-form-item>
            <el-input v-model="formInline.user" placeholder="全站搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button round @click="loginFormVisible = true">查询</el-button>
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
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/newsPage">政治</el-menu-item>
        <el-menu-item index="/recreationPage">娱乐</el-menu-item>
        <el-menu-item index="/sportsPage">体育</el-menu-item>
        <el-menu-item index="/article">文章</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
        <el-menu-item class="login" @click="loginFormVisible = true">登陆</el-menu-item>
        <el-menu-item class="register" @click="registerFormVisible = true">注册</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!-- <el-menu-item index="5" style="float:right">
          <img src="@//assets/37588923.jpg" class="imgs" />
        </el-menu-item>-->
      </el-menu>
    </ul>
    <router-view />

    <el-dialog title="登陆" :visible.sync="loginFormVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="loginform.name" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            type="password"
            v-model="loginform.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="loginform.age" autocomplete="off" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="loginform.gender" placeholder="请选择性别">
            <el-option label="女" value="0"></el-option>
            <el-option label="男" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="loginFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginFormVisible = false,loginForm()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="注册" :visible.sync="registerFormVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" :label-width="formLabelWidth">
          <el-input
            type="password"
            v-model="form.repassword"
            autocomplete="off"
            placeholder="请重复输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="女" value="0"></el-option>
            <el-option label="男" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="registerFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="registerFormVisible = false,registerForm()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      formInline: {
        user: '',
        region: ''
      },
      loginFormVisible: false,
      registerFormVisible: false,
      form: {
        name: '',
        password: '',
        repassword: '',
        age: '',
        gender: ''
      },
      loginform: {
        name: '',
        password: '',
        age: '',
        gender: ''
      },
      formLabelWidth: '80px'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    loginForm () {
      console.log(this.loginform)
    },
    registerForm () {
      console.log(this.form)
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
</style>
