<template>
    <div>
        我的资料
    </div>
</template>

<script>
import command from '../util/command.js'
import 'mavon-editor/dist/css/index.css'
export default {
  mounted () {
    this.$post('/User/getOne',
      command.getUrlParam('Id')
    ).then((response) => {
      this.content = response.data.content
      // console.log(response.data.content)
    })
  },
  data () {
    return {
      // content: ''
    }
  }
}
</script>

<style scoped>

</style>
