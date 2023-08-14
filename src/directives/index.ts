// 全局指令
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core';
import { App } from 'vue';

export const lazyPlugin = {
  install(app: App<Element>) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            //   图片进入视口区域
            el.src = binding.value;
            stop();
          }
        });
      }
    });
  }
};
// 时间的全局过滤器   Vue3把过滤器移除了 使用计算属性吧
// const dataForm = originVal => {
//   const data = new Date(originVal)
//   const y = data.getFullYear()
//   const m = (data.getMonth() + 1 + '').padStart(2, '0')
//   const d = (data.getDate() + '').padStart(2, '0')
//   const hh = (data.getHours() + '').padStart(2, '0')
//   const mm = (data.getMinutes() + '').padStart(2, '0')
//   const ss = (data.getSeconds() + '').padStart(2, '0')
//   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
// }
// export default [{
//   name: 'dataForm',
//   fn: dataForm
// }]
