<template>
  <el-main class="main">
    <el-tabs v-model="menuInfoStore.activeTabMenu" type="card" editable class="demo-tabs" @edit="handleTabsEdit"
      @tab-click="tabClick">
      <el-tab-pane v-for="item in menuInfoStore.tabMenus" :key="item.path" :label="item.meta.title" :name="item.path">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component v-if="$route.meta && $route.meta.keepAlive" :is="Component" />
          </keep-alive>
          <component v-if="!($route.meta.keepAlive)" :is="Component" />
        </router-view>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>

<script lang="ts" setup>
  import {
    useMenuInfoStore
  } from '@/core/store/useMenuInfoStore'
  import {
    toRefs,
    inject,
  } from 'vue';
  const tools: any = inject("tools")
  const menuInfoStore = useMenuInfoStore()

  const handleTabsEdit = (targetName: string, action: 'remove' | 'add') => {
    let tabMenus = menuInfoStore.tabMenus
    if (action === 'add') {} else if (action === 'remove') {
      menuInfoStore.nextTab(targetName)
      for (let index = 0; index < tabMenus.length; index++) {
        if (tabMenus[index].path == targetName) {
          tabMenus.splice(index, 1)
          break
        }
      }
      menuInfoStore.tabMenus = tabMenus
      tools.router.push({
        path: menuInfoStore.activeTabMenu
      })
    }
  }

  const tabClick = (pane: any, ev: any) => {
    tools.router.push({
      path: pane.paneName
    })
  }
</script>

<style scoped>
  .demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
</style>