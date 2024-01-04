<script setup>
import layoutHeader from "./header/header.vue";
</script>

<template>
  <el-container direction="vertical">
    <layoutHeader>
        
    </layoutHeader>
    <el-main id="elmain">
      <router-view v-slot="{ Component }">
        <transition name="main" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
  </el-container>

  <!-- <el-container class="home_box">
    
    
  </el-container> -->
</template>

<style lang="scss" scoped>
#elmain {
  height: calc(100vh - 60px);
}
</style>
