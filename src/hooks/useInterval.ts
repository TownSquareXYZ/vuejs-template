import { createRouter as createVueRouter, createWebHashHistory, createWebHistory, RouteLocationNormalized, RouteLocationRaw, RouteRecordRaw } from 'vue-router';
import { BrowserNavigator, getHash, urlToPath } from '@telegram-apps/sdk';
import { createSafeURL } from '@tma.js/sdk-vue';



/**
 * Creates a Vue Router instance based on the provided navigator.
 * @param navigator - BrowserNavigator instance for navigation.
 * @returns Vue Router instance configured to use the provided navigator.
 */
export function createRouter<State>(
  nav: BrowserNavigator<State>, routes: RouteRecordRaw[]
): any {
  const router = createVueRouter({
    history: createWebHistory(),
    routes,
  });

  const navigate = (to: RouteLocationNormalized, state?: State, options?: any) => {
    console.log(to, state, options);
    options ||= {}; // 使用逻辑或操作符的简写形式初始化 options 对象，如果 options 为 undefined 或 null，则将其设为一个空对象 {}
    if (state === undefined) {
      state = options.state; // 如果 state 参数未提供，则尝试从 options 参数中获取 state
    }
    const path = urlToPath(to.path); // 将目标路由路径转换为 path 字符串
    if (options.replace) {
      nav.replace(path, state); // 如果 options 中有 replace 属性，则使用 replace 方法替换当前路由
    } else {
      nav.push(path, state); // 否则使用 push 方法将新路由推入导航堆栈
    }
  };

  // const navigator = {
  //   go(delta: number) {
  //     router.go(delta); // 定义导航器对象的 go 方法，用于导航历史记录
  //   },
  //   push: navigate, // 将 navigate 函数赋给 push 方法，用于推入新路由
  //   replace: navigate, // 将 navigate 函数赋给 replace 方法，用于替换当前路由
  //   createHref(to: RouteLocationRaw) {
  //     return router.resolve(to).href; // 定义 createHref 方法，用于生成目标路由的链接 href
  //   },
  //   encodeLocation(to: RouteLocationRaw) {
  //     // 假设 createSafeURL 函数用于安全编码路由路径
  //     return createSafeURL(router.resolve(to).href); // 定义 encodeLocation 方法，用于对目标路由路径进行安全编码
  //   }
  // };


  // router.beforeEach((to, from, next) => {
  //   if(to.path === '/') {

  //   }else {
  //     // navigate(to)
  //   }
  //   next()
  // })

  return router;
}
// import { ref, onUnmounted, Ref } from 'vue';
// import { BrowserNavigator, createSafeURL, urlToPath } from '@telegram-apps/sdk';
// import { RouteLocationNormalized, Router } from 'vue-router';

// interface Location {
//   state: any;
//   key: string;
//   pathname: string;
//   hash: string;
//   search: string;
// }

// interface Navigator {
//   go: (delta: number) => void;
//   push: (to: string, state?: any, options?: any) => void;
//   replace: (to: string, state?: any, options?: any) => void;
//   createHref: (to: string) => string;
//   encodeLocation: (to: string) => string;
// }

// export function useIntegration<State>(
//   nav: BrowserNavigator<State>,
// ): {
//   location: Ref<Location>;
//   navigator: Navigator;
// } {
//   const location = ref<Location>({
//     state: nav.state,
//     key: nav.id,
//     pathname: nav.pathname,
//     hash: nav.hash,
//     search: nav.search,
//   });

//   const navigate = (to: string, state?: State, options?: any) => {
//     options = options || {};
//     if (state === undefined) {
//       state = options.state;
//     }
//     const path = urlToPath(to);
//     if (options.replace) {
//       nav.replace(path, state);
//     } else {
//       nav.push(path, state);
//     }
//   };

//   const navigator: Navigator = {
//     go(delta) {
//       nav.go(delta);
//     },
//     push: navigate,
//     replace: navigate,
//     createHref(to) {
//       return nav.renderPath(urlToPath(to));
//     },
//     encodeLocation(to) {
//       return createSafeURL(nav.renderPath(urlToPath(to))).toString();
//     },
//   };

//   const onChange = () => {
//     location.value.state = nav.state;
//     location.value.key = nav.id;
//     location.value.pathname = nav.pathname;
//     location.value.hash = nav.hash;
//     location.value.search = nav.search;
//   };

//   onUnmounted(() => {
//     nav.off('change', onChange);
//   });

//   nav.on('change', onChange);

//   return {
//     location,
//     navigator,
//   };
// }

