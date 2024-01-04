import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { addRouter } from "../router/index.ts";

export const addRouterStore = defineStore("addRouters", () => {
  const addRouters: {
    value: { path: string; name: string; component: any }[];
  } = ref([]);
  //   const doubleCount = computed(() => count.value * 2)
  //   function increment() {
  //     count.value++
  //   }

  const newRoutes = (role) => {
    function eachSelect(routers, userRole) {
      for (let j = 0; j < routers.length; j++) {
        if (
          routers[j].meta &&
          routers[j].meta.role.length &&
          routers[j].meta.role.indexOf(userRole) === -1
        ) {
          routers.splice(j, 1);
          j = j !== 0 ? j - 1 : j;
        }
        if (routers[j].children && routers[j].children.length) {
          eachSelect(routers[j].children, userRole);
        }
      }
    }
    // 仅限演示
    let newArr = [...addRouter]; // 拷贝这个数组是因为做权限测试的时候可以从低级切回到高级角色，仅限演示，正式开发时省略这步直接使用 addRouter
    eachSelect(newArr, role);
    // addRouters.setValue(newArr);
    addRouters.value = newArr;
  };

  return { addRouters, newRoutes };
});
