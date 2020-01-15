<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="3" class="leftCar">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="16" class="carousel">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="3">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="background-color: #decece29">
          <el-col :span="7" style="margin-right: 3vw;margin-left: 2vw;">
            <h3>政治</h3>
          </el-col>
          <el-col :span="7" style="margin-right: 3vw">
            <h3>文娱</h3>
          </el-col>
          <el-col :span="7">
            <h3>体育</h3>
          </el-col>
        </el-row>
        <el-row style="background-color: #decece29">
          <el-col :span="7" style="margin-right: 3vw;margin-left: 2vw;">
            <el-card class="box-card">
              <div v-for="(o,index) in articleList" :key="index" class="text item">
                <router-link :to="'/detail?articleId='+ o.id">{{ o.title }}</router-link>
              </div>
            </el-card>
          </el-col>
          <el-col :span="7" style="margin-right: 3vw;">
            <el-card class="box-card">
              <div v-for="(o,index) in recreationList" :key="index" class="text item">
                <router-link :to="'/detail?articleId='+ o.id">{{ o.title }}</router-link>
              </div>
            </el-card>
          </el-col>
          <el-col :span="7" style="margin-right: 3vw;">
            <el-card class="box-card">
              <div v-for="(o,index) in sportsList" :key="index" class="text item">
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
export default {
  mounted () {
    this.$post('/Article/getFirstList', {
    }).then((response) => {
      // console.log(response);
      this.articleList = response.list[0]
      this.recreationList = response.list[1]
      this.sportsList = response.list[2]
    })
  },
  data () {
    return {
      imgList: [
        require('@//assets/Lark20191126-092647.jpeg'),
        require('@//assets/Lark20191231-092330.jpeg'),
        require('@//assets/Lark20191231-091600.jpeg')
      ],
      currentDate: new Date(),
      titles: '',
      articleId: '',
      articleList: [],
      recreationList: [],
      sportsList: []
    }
  },
  methods: {
    detil (data) {
      console.log(data)
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
