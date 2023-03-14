<template>
  <div class="login-container">
    <div class="head">
      <div class="name">
        <div class="title">preCode</div>
        <div class="tips">需求开发辅助工具</div>
      </div>
    </div>
    <el-form label-position="top" :rules="state.rules" :model="state.ruleForm" ref="loginForm" class="login-form">
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model.trim="state.ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="state.ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="submitForm">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import {
    reactive,
    ref
  } from 'vue'
  import {
    useMenuInfoStore
  } from '@/core/store/useMenuInfoStore'
  import {
    useUserInfoStore
  } from '@/core/store/useUserInfoStore'
  import {
    toRefs,
    inject,
  } from 'vue';
  const tools = inject("tools")
  const userInfoStore = useUserInfoStore()
  const menuInfoStore = useMenuInfoStore()

  const loginForm = ref(null)
  const state = reactive({
    ruleForm: {
      username: '',
      password: ''
    },
    checked: true,
    rules: {
      username: [{
        required: 'true',
        message: '账户不能为空',
        trigger: 'blur'
      }],
      password: [{
        required: 'true',
        message: '密码不能为空',
        trigger: 'blur'
      }]
    }
  })

  const getMenu = (menuList, routeList) => {
    const notFoundPage = routeList.filter((route) => route.name === '404')[0]
    menuList.forEach(menu => {
      routeList.forEach(route => {
        if (menu.name === route.name) {
          menu.path = route.path
          menu.meta = route.meta
          if (menu.children) {
            getMenu(menu.children, route.children)
          }
        }
      });
      if (!menu.meta) {
        menu.path = notFoundPage.path
        menu.meta = notFoundPage.meta
      }
    });
  }


  const submitForm = () => {
    // loginForm.value.validate((valid) => {
    //   if (valid) {
    tools.request('/user/menu').then((res) => {
      let asideMenuInfo = res.menuList
      let routeList = tools.router.options.routes

      getMenu(asideMenuInfo, routeList)
      menuInfoStore.initAsideMenuInfo(asideMenuInfo)
      const homeTab = asideMenuInfo.filter((menu) => menu.name === 'home')[0]
      menuInfoStore.addTabMenu(homeTab)
      menuInfoStore.activeTabMenu = homeTab.path

      userInfoStore.isLogin = true
      tools.router.push({
        path: homeTab.path
      })
    })
    //   } else {
    //     console.log('error submit!!')
    //     return false;
    //   }
  }
  const resetForm = () => {
    loginForm.value.resetFields();
  }
</script>

<style scoped>
  .login-container {
    margin: auto;
    width: 350px;
    height: 400px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
  }

  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
  }

  .head .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
  }

  .head .tips {
    font-size: 12px;
    color: #999;
  }

  .login-form {
    width: 70%;
    margin: 0 auto;
  }

  .login-form>>>.el-form--label-top .el-form-item__label {
    padding: 0;
  }

  .login-form>>>.el-form-item {
    margin-bottom: 0;
  }
</style>