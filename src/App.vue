<template>
  <div class="common-layout">
    <el-container v-if="userInfoStore.isLogin">
      <Aside />
      <Main />
    </el-container>
    <el-container v-else>
      <router-view />
    </el-container>
  </div>
</template>

<script setup>
  import Aside from '@/components/Aside.vue'
  import Main from '@/components/Main.vue'
  import {
    useUserInfoStore
  } from '@/core/store/useUserInfoStore'
  const userInfoStore = useUserInfoStore()
</script>

<style>
  .common-layout {
    min-height: 100vh;
    background-color: #ffffff;
  }
</style>