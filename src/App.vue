<template>
  <div id="app">
    <ul class="topheader">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <i class="el-icon-sunny"></i>
        <h1 class="title">天然气门户网站</h1>
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
        <el-menu-item v-for="(o,index) in typeList" :key="index" :id="o.type" :index="o.path" @click="clickType(o.type)" >
          {{o.type}}
        </el-menu-item>
        <el-submenu v-for="(item,index) in slotTypeList" :key="index+'t'" :index="index+'t'">
          <template slot="title">{{item.type}}</template>
          <el-menu-item v-for="(item2,index2) in item.secendTypeList" :index="item2.path" :key="index2+'c'" @click="clickType(item2.type)">{{item2.type}}</el-menu-item>
        </el-submenu>
        <!-- <el-menu-item index="/newsPage">政治</el-menu-item>
        <el-menu-item index="/recreationPage">娱乐</el-menu-item>
        <el-menu-item index="/sportsPage">体育</el-menu-item> -->
        <!-- <el-menu-item index="/article">文章</el-menu-item> -->
        <el-menu-item index="/feedback">留言</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
        <!-- <el-menu-item class="login" @click="loginFormVisible = true" v-show="!loginFlag">登陆</el-menu-item>
        <el-menu-item class="register" @click="registerFormVisible = true" v-show="!loginFlag">注册</el-menu-item> -->
        <!-- <el-submenu index="2" v-show="loginFlag" class="loginShow">
          <template slot="title">{{userName}}</template>
          <el-menu-item>
            <router-link :to="'/userInfo?Id='+userId">我的信息</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">退出登录</el-menu-item>
        </el-submenu> -->
        <!-- <el-menu-item index="5" style="float:right">
          <img src="@//assets/37588923.jpg" class="imgs" />
        </el-menu-item>-->
      </el-menu>
    </ul>
    <router-view />

    <!-- <el-dialog title="登陆" :visible.sync="loginFormVisible" width="30%">
      <el-form :model="loginform">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="loginform.name" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="loginform.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="loginFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginFormVisible = false,loginForm()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="注册" :visible.sync="registerFormVisible" width="30%">
      <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
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
    </el-dialog> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
export default {
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    this.$post('/vue/getArticleTypeList', {
    }).then((response) => {
      this.typeList = response.data[0]
      this.slotTypeList = response.data[1]
    })
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入年龄'))
      } else if (value < 1 || value > 120) {
        callback(new Error('请输入正常年龄范围'))
      } else if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'))
      } else {
        callback()
      }
    }
    return {
      typeList: [],
      slotTypeList: [],
      activeIndex: '/index',
      formInline: {
        user: '',
        region: ''
      },
      keyWord: '',
      loginFormVisible: false,
      registerFormVisible: false,
      form: {
        name: '',
        password: '',
        repassword: '',
        age: '',
        gender: ''
      },
      rules: {
        password: [{
          validator: validatePass, trigger: 'blur'
        }],
        repassword: [{
          validator: validatePass2, trigger: 'blur'
        }],
        age: [{
          validator: checkAge, trigger: 'blur'
        }]
      },
      loginform: {
        name: '',
        password: ''
      },
      formLabelWidth: '80px',
      loginFlag: false,
      userName: '',
      userId: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    loginForm () {
      this.$post('/User/login', {
        userName: this.loginform.name,
        passWord: this.loginform.password
      }).then(response => {
        if (response.code === '200') {
          this.userName = response.data.userName
          this.loginFlag = true
          this.userId = response.data.id
        }
        alert(JSON.stringify(response.message))
      })
    },
    registerForm () {
      this.$post('/User/register', {
        userName: this.form.name,
        passWord: this.form.password,
        age: this.form.age,
        gender: this.form.gender
      }).then(response => {
        alert(JSON.stringify(response.message))
      })
    },
    clickType (type) {
      this.$router.push({ path: '/articleList', query: { typeStr: type } })
    },
    searchCilck (keyWord) {
      this.$router.push({ path: '/search', query: { keyWord: keyWord } })
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
