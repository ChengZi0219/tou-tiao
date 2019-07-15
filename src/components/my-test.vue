<template>
  <div class="contianer">
    <p>头部</p>
    <!-- 插槽 -->
    <p>内容<slot name="con" ></slot></p>
    <p>尾部<slot name="fot" :txt="textName"></slot></p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textName: '哈哈哈'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
