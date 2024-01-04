<script setup>
import { SwitchButton } from "@element-plus/icons-vue";
import { ref } from "vue";
import Aside from "../aside/aside.vue";
import { useRouter } from "vue-router";
// const activeIndex = ref("");

const router = useRouter();

const collapse = () => {
  // this.$store.dispatch("collapse");
};

const logout = () => {
  ElMessageBox.confirm("确定要退出吗?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "退出成功!",
      });
      sessionStorage.clear();
      // console.log(this.$router)
      // this.$router.push("/login" );
      router.push({ path: "/login" });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消退出",
      });
    });
};
</script>

<template>
  <el-header>
    <el-row type="flex" justify="space-between">
      <el-col :span="4" class="logo"> 某容器系统 </el-col>
      <el-col :span="16">
        <!-- <el-menu :default-active="$route.path" router mode="horizontal">
          <el-menu-item index="/index">首页</el-menu-item>
         
        </el-menu> -->
        <Aside />
      </el-col>
      <el-col :span="4">
        <span class="logout" @click="logout">
          <el-icon>
            <SwitchButton />
          </el-icon>
          <span>退出</span>
        </span>
      </el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss">
.logo{
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 5px;
}
.el-header {
  background-color: #545c64;
  color: #fff;
  flex-basis: 60px;
  height: 60px !important;
  line-height: 60px !important;
}

.el-icon-s-fold {
  font-size: 1.6em;
  line-height: 0.75em;
  vertical-align: -15%;
  cursor: pointer;
}

.el-menu {
  background: transparent;
  .el-menu-item {
    color: rgba(255, 255, 255, 0.7);
    height: 60px;
    line-height: 60px;
    font-size: 14px;
  }
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: transparent;
  color: #fff;
}
.el-menu--horizontal > .el-menu-item.is-active {
  color: #fff;
}

.logout {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
