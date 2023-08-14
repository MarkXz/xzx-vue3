<script setup>
import layoutAside from "./aside/aside.vue";
import layoutHeader from "./header/header.vue";
import Footer from "./Footer/footer.vue";
</script>

<template>
    <el-container>
        <layoutAside></layoutAside>
        <el-container class="home_box">
            <layoutHeader></layoutHeader>
            <el-main id="elmain">
                <router-view v-slot="{ Component }">
                    <transition name="main" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </el-main>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </el-container>
</template>