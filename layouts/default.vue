<template>
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-menu
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="user">
          <i class="el-icon-user"></i>
          <span slot="title">用户中心</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="breadcrumb">
            <span class="breadcrumb-switch" @click="toggleSide">
              <i v-if="isCollapse" class="el-icon-s-unfold list-icon"></i>
              <i v-else class="el-icon-s-fold list-icon"></i>
            </span>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="/">活动管理</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-header>
        <el-main>
          <nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key: string, keyPath: string) {
      console.log(key, keyPath)
    },
    handleClose(key: string, keyPath: string) {
      console.log(key, keyPath)
    },
    toggleSide() {
      this.isCollapse = !this.isCollapse
    }
  }
})
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.breadcrumb {
  display: flex;
  height: 60px;
  flex-direction: row;
  align-items: center;
}
.breadcrumb-switch {
  padding: 5px 10px;
  cursor: pointer;
}
.list-icon {
  font-size: 18px;
  color: #515a6d;
}
</style>
