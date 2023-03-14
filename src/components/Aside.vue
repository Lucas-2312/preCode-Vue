<template>
  <el-aside class="aside">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
      :default-active="menuInfoStore.activeTabMenu" text-color="#fff" @open="handleOpen" @close="handleClose">
      <div v-for="(menuLevelOne) in menuInfoStore.asideMenuInfo" :key="menuLevelOne.path">
        <div v-if="menuLevelOne.children==null">
          <el-menu-item :index="menuLevelOne.path" @click="handleClick">
            <span>{{menuLevelOne.meta.title}}</span>
          </el-menu-item>
        </div>
        <div v-else>
          <el-sub-menu :index="menuLevelOne.path">
            <template #title>
              <span>{{menuLevelOne.meta.title}}</span>
            </template>
            <div v-for="(menuLevelTwo) in menuLevelOne.children" :key="menuLevelTwo.path" :index="menuLevelTwo.path">
              <div v-if="menuLevelTwo.children==null">
                <el-menu-item :index="menuLevelTwo.path" @click="handleClick">
                  <span>{{menuLevelTwo.meta.title}}</span>
                </el-menu-item>
              </div>
              <div v-else>
                <el-sub-menu :index="menuLevelTwo.path">
                  <template #title>
                    <span>{{menuLevelTwo.meta.title}}</span>
                  </template>
                  <el-menu-item v-for="(menuLevelThree) in menuLevelTwo.children" :key="menuLevelThree.path"
                    :index="menuLevelThree.path" @click="handleClick">
                    <span>{{menuLevelThree.meta.title}}</span>
                  </el-menu-item>
                </el-sub-menu>
              </div>
            </div>
          </el-sub-menu>
        </div>
      </div>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
  import {
    useMenuInfoStore
  } from '@/core/store/useMenuInfoStore'
  import {
    inject,
  } from 'vue';

  const menuInfoStore = useMenuInfoStore()
  const tools: any = inject("tools")

  const getMenuByPath = (menuList: any, path: string) => {
    let filterMenu: any
    if (!menuList) menuList = menuInfoStore.asideMenuInfo
    for (let index = 0; index < menuList.length; index++) {
      let menu = menuList[index]
      if (menuList[index].path === path) {
        filterMenu = menu
        break
      } else {
        if (menu.children) {
          filterMenu = getMenuByPath(menu.children, path)
        }
      }
    }
    return filterMenu;
  }

  const handleClick = (menuItem: any) => {
    let clickMenu
    let routePath = menuItem.index
    clickMenu = getMenuByPath(null, routePath)
    menuInfoStore.activeTabMenu = routePath
    menuInfoStore.addTabMenu(clickMenu)
    tools.router.push({
      path: routePath
    })
  }

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style scoped>
  .el-menu {
    border-right: 0px;
  }

  .aside {
    width: 30vh;
    min-height: 100vh;
    background-color: #545c64;
  }
</style>