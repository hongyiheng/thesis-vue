<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="3" class="leftCar">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="@//assets/fc66-isqivxh9378941.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>新浪爱拍“四季如画”摄影征集展在北京景山公园展出</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="16" class="carousel">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(item,index) in imgList" :key="index">
                <img :src="item.img" @click="linkArticle(item)" style="width:100%;" />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="3">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="@//assets/f223-isyparf5259713.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>“生于街头”2020年第一季度评选揭晓</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="background-color: #decece29">
          <el-col :span="7" style="margin-right: 3vw;margin-left: 2vw;">
            <h3>{{TypeOne}}</h3>
          </el-col>
          <el-col :span="7" style="margin-right: 3vw">
            <h3>{{TypeTwo}}</h3>
          </el-col>
          <el-col :span="7">
            <h3>{{TypeThree}}</h3>
          </el-col>
        </el-row>
        <el-row style="background-color: #decece29">
          <el-col :span="7" style="margin-right: 3vw;margin-left: 2vw;">
            <el-card class="box-card">
              <div v-for="(o,index) in ListOne" :key="index" class="text item">
                <router-link :to="'/detail?articleId='+ o.id">{{ o.title }}</router-link>
              </div>
            </el-card>
          </el-col>
          <el-col :span="7" style="margin-right: 3vw;">
            <el-card class="box-card">
              <div v-for="(o,index) in ListTwo" :key="index" class="text item">
                <router-link :to="'/detail?articleId='+ o.id">{{ o.title }}</router-link>
              </div>
            </el-card>
          </el-col>
          <el-col :span="7" style="margin-right: 3vw;">
            <el-card class="box-card">
              <div v-for="(o,index) in ListThree" :key="index" class="text item">
                <router-link :to="'/detail?articleId='+ o.id" >{{ o.title }}</router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, reactive, onMounted } from '@vue/composition-api'
import { GetList, GetCarouselInfo } from '../api/index.js'
// import router from '@/router'
export default {
  setup (props, { root }) {
    const TypeOne = ref('-')
    const TypeTwo = ref('-')
    const TypeThree = ref('-')
    const loadingData = ref(false)
    const ListOne = ref([])
    const ListTwo = ref([])
    const ListThree = ref([])
    const imgList = ref([])
    const currentDate = new Date()
    const linkArticle = (data) => {
      // console.log('点击' + JSON.stringify(data))
      root.$router.push({ path: '/detail?articleId=' + data.articleId })
    }
    const detil = (data) => {
      console.log(data)
    }
    const getList = () => {
      GetList()
        .then(response => {
          let data = response.data
          // console.log(data)
          // 更新数据
          TypeOne.value = data[0][0].type
          TypeTwo.value = data[0][1].type
          TypeThree.value = data[0][2].type
          ListOne.value = data[1]
          ListTwo.value = data[2]
          ListThree.value = data[3]
          console.log(ListOne)
        })
        .catch(error => {
          console.log(error)
          loadingData.value = false
        })
    }
    const getCarouselInfo = () => {
      GetCarouselInfo()
        .then(response => {
          let data = response.data
          imgList.value = data
        })
    }
    onMounted(() => {
      // 加载状态
      loadingData.value = true
      // 获取列表
      getList()
      getCarouselInfo()
      loadingData.value = false
    })
    return {
      TypeOne,
      TypeTwo,
      TypeThree,
      ListOne,
      ListTwo,
      ListThree,
      imgList,
      currentDate,
      detil,
      linkArticle
    }
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  width: 600px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.carousel {
  padding-left: 2%;
  padding-right: 2%;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.leftCar {
  margin-left: 4vw;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 30vw;
}

a{
  color:#0000009e !important;
  text-decoration:none !important
}
</style>
