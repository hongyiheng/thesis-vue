<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <div v-for="(o,index) in newsList" :key="index">
            <router-link class="newsList" :to="'/detail?articleId='+ o.id">
              <p>{{ o.title }}</p>
            </router-link>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  mounted () {
    this.$post('/Article/getList', {
      params: {
        recreation: true
      }
    }).then((response) => {
      this.newsList = response.list
    })
  },
  data () {
    return {
      newsList: []
    }
  }

}
</script>

<style scoped>
a {
  color: #0000009e !important;
  text-decoration: none !important;
}
.newsList {
  margin-top: 2vh;
}
</style>
