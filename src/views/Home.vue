<template>
  <el-card class="account-container">
    <h1>preCode 系统简介</h1>
    <img style="width: 70%;
      display: block;
      margin: 0 auto;"
      src="https://img1.baidu.com/it/u=3882021707,4224605453&fm=253&fmt=auto&app=138&f=PNG?w=1200&h=480" alt="">
    <div style="line-height: 30px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;preCode是一个需求开发管理系统，基于 Vue 3.0 、 Spring Boot 等相关技术栈开发，限于本人练手瞎搞。
    </div>
    <h1>开发及部署文档</h1>
    <ul class="course">
      <li>开篇词：解决需求开发痛点，让开发专注于开发</li>
    </ul>
    <h1>技术栈</h1>
    <ul style="font-weight: bold;">
      <li><a href="https://cn.vuejs.org/guide/introduction.html" target="_blank">Vue 3.x</a></li>
      <li><a href="https://pinia.web3doc.top/" target="_blank">Pinia</a></li>
      <li><a href="https://router.vuejs.org/zh/introduction.html" target="_blank">Vue-Router 4.x</a></li>
      <li><a href="https://element-plus.gitee.io/zh-CN/guide/quickstart.html" target="_blank">Element-Plus（适配全新 Vue 3.x
          的 PC 端组件库）</a></li>
      <li><a href="http://axios-js.com/zh-cn/docs/vue-axios.html" target="_blank">axios</a></li>
      <li><a href="https://spring.io/projects/spring-boot" target="_blank">SpringBoot</a></li>
    </ul>
    <h1>联系作者</h1>
    <ul>
      <li>email：81771061@qq.com</li>
    </ul>
  </el-card>
</template>

<script setup>
</script>
<style scoped>
  .course {
    font-weight: bold;
    display: inline-block;
  }

  .course li {
    line-height: 36px;
    color: #409eff;
    cursor: pointer;
  }
</style>