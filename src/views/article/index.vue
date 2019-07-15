<template>
  <div class="container">
    <!-- 筛选容器 -->
    <el-card>
      <div slot='header'>
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb> -->
        <my-bread>内容管理</my-bread>
      </div>
      <!-- 筛选器内容 -->
      <!-- reqParams 提交给后台的筛选条件 -->
      <el-form label-width="80px" :model='reqParams'>
        <el-form-item label="状态：">
           <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
         <el-select v-model="reqParams.channel_id" placeholder="请选择">
          <el-option  v-for="item in channelOptions" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间：">
        <el-date-picker
          v-model="dateValue"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">筛选</el-button>
      </el-form-item>
      </el-form>
    </el-card>
    <!-- 内容容器 -->
    <el-card>
      <my-test>
        <template slot="con">这是文章信息</template>
        <!-- <template slot="fot" slot-scope="textName">{{textName.txt}}</template> -->
        <!-- v-slot:fot="textName" 是vue2.6.0之后的写法 -->
        <template v-slot:fot="textName">{{textName.txt}}</template>
      </my-test>
    </el-card>
  </div>
</template>
<script>
import MyTest from '@/components/my-test.vue'
// import MyBread from '@/components/my-bread.vue'
export default {
  components: {
    MyTest
  },
  data () {
    return {
      // 提交给后台的筛选条件
      // 数据默认选择null而不是''的原因：null不会发送字段
      reqParams: {
        status: null,
        channel_id: null
      },
      // 频道的数据
      channelOptions: [
        { name: 'java', id: 1 },
        { name: 'c++', id: 2 }

      ],
      // 日期控件的数据
      dateValue: []
    }
  }
}
</script>
<style lang="less" scoped>
// el-card是组件 解析后标签名字不是el-crad 标签上的名字和组件名一样
.el-card {
  margin-bottom: 20px;
}
</style>
