<template>
  <div id="userName">
    <el-container>
      <!-- <p>{{fullName}}</p>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else>Not A/B/C 😢</div>
      <h1 v-show="ok">true显示</h1>-->
      <el-header>
        <el-row id="filedName" class="cloth-thead">
          <el-col :span="6" class="grid-content bg-purple">img</el-col>
          <el-col :span="3" class="grid-content bg-purple">name</el-col>
          <el-col :span="3" class="grid-content bg-purple">skill</el-col>

          <el-col :span="3" class="grid-content bg-purple">money</el-col>
          <el-col :span="3" class="grid-content bg-purple">promotion</el-col>
          <el-col :span="3" class="grid-content bg-purple">count</el-col>
          <el-col :span="3" class="grid-content bg-purple">delete</el-col>
        </el-row>
      </el-header>
      <el-main>
        <div v-if="list.length">
          <el-row class="table" v-for="(item, index) in list" :key="index">
            <el-col :span="6" class="grid-content bg-purple">
              <img src="@//assets/37588923.jpg" />
            </el-col>
            <el-col :span="3 " class="grid-content bg-purple">{{ item.name }}</el-col>
            <el-col :span="3" class="grid-content bg-purple">{{ item.skill }}</el-col>
            <el-col :span="3 " class="grid-content bg-purple">
              <i class="el-icon-minus" @click="cutMoney(item)"></i>
              {{ item.money }}
              <i class="el-icon-plus" @click="addMoney(item)"></i>
            </el-col>
            <el-col :span="3" class="grid-content bg-purple">{{ item.promotion }}</el-col>
            <el-col :span="3" class="grid-content bg-purple">{{ item.promotion * item.money}}</el-col>
            <el-col :span="3" class="grid-content bg-purple">
              <i style="color:red;font-size:20px" class="el-icon-delete" @click="delItem(item)"></i>
            </el-col>
          </el-row>
        </div>
        <div v-else>购物车里没有商品😢</div>
      </el-main>
      <el-footer>
        <el-menu background-color="#545c64" text-color="#fff">
          <el-col :span="18">
            <el-menu-item disabled>购物车</el-menu-item>
          </el-col>
          <el-col :span="2">
            <el-menu-item @click="checkAll()">全选</el-menu-item>
          </el-col>
          <el-col :span="2">
            <el-menu-item>合计</el-menu-item>
          </el-col>
          <el-col :span="2">
            <el-menu-item>已选商品</el-menu-item>
          </el-col>
        </el-menu>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      type: 'Z',
      ok: true,
      list: [
        {
          name: 'cxk',
          skill: 'sing、dance、rap、basketball',
          money: 80,
          promotion: 0.5,
          id: 1
        },
        {
          name: 'gzw',
          skill: 'java',
          money: 90,
          promotion: 0.8,
          id: 2
        },
        {
          name: 'gzw',
          skill: 'java',
          money: 90,
          promotion: 0.8,
          id: 3
        },
        {
          name: 'gzw',
          skill: 'java',
          money: 90,
          promotion: 0.8,
          id: 4
        },
        {
          name: 'gzw',
          skill: 'java',
          money: 90,
          promotion: 0.8,
          id: 5
        },
        {
          name: 'wcy',
          skill: 'sing、dance、rap、basketball、吹逼',
          money: 80,
          promotion: 0.5,
          id: 6
        }
      ]
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    cutMoney (item) {
      item.money--
    },
    addMoney (item) {
      item.money++
    },
    delItem (item) {
      let index = this.list.findIndex(colth => {
        return colth.id === item.id
      })
      console.log(index)
      this.list.splice(index, 1)
    },
    checkAll () {
      console.log('全选')
    }
  }
}

</script>

<style scoped>
.el-footer {
  height: 60px;
}
.el-main {
  height: calc(100vh - 200px);
}
#filedName {
  background-color: gray;
  text-align: center;
  padding: 10px;
}
img {
  width: 100px;
  height: 100px;
}
.table {
  text-align: center;
  padding: 5px;
}
.el-menu-demo1 {
  /* position: absolute;
  bottom: 0%; */
}
</style>
