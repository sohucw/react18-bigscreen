
## 一、项目描述

- 基于 React、zustand、DataV、ECharts 框架的 " **数据大屏项目** "。支持数据动态刷新渲染、屏幕适配、数据请求模拟、局部样式、图表自由替换/复用等功能。 使用了函数式编程
- 项目环境：react^18.2.0、vite^5.2.0、npm^9.8.1、node^18.18, zustand^4.5.2。

技术说明：

1.  [React 官方文档](https://react.docschina.org/docs/introducing-jsx.html)
2.  [zustand官方文档](https://zustand-demo.pmnd.rs/)
3.  [DataV 官方文档](http://datav-react.jiaminghi.com/guide/)
4.  [echarts 实例](https://echarts.apache.org/examples/zh/index.html)，[echarts API文档](https://echarts.apache.org/zh/api.html#echarts)
5.  [styled-components 官方文档](https://styled-components.com/)

## 二、文件目录介绍

```shell
Project
├── mock 模拟数据
├── src
│  │  ├── api 接口请求和mock模拟
│  │  ├── assets 静态资源
│  │  ├── components 各个模块组件
│  │  ├── enums 定义各类枚举
│  │  ├── pages 页面中的各个模块核心实现
│  │  ├── routes 路由配置定义
│  │  ├── store zustand 状态管理
│  │  ├── style 全局样式
│  │  └── utils 工具函数
│  ├── App.tsx 主渲染
│  ├── main.tsx 文件入口
│  └── vite-env.d.ts 全局配置类型声明
│
│—— .env 全局配置
│—— tsconfig.json ts配置
└── vite.config.ts vite配置，包括moke接口拦截
```

## 三、详情介绍

### 启动项目

需要提前安装好 `nodejs` 与 `npm` 和 `pnpm`,下载项目后在项目主目录下运行 `pnpm install` 拉取依赖包，使用命令 `npm run dev` 启动项目。

### 数据请求模拟

项目模拟数据方式，数据放置在 `api-mock` 文件夹中，采用 `axios` 进行请求，`mock 的配置入口在 `vite.config.ts` 文件中

### 图表组件

图表组件主要使用了 ECharts 和 DataV 可视化框架来进行开发。图表文件在 `pages/*/charts` 中，ECharts 渲染函数统一封装在了 `components/EChartsCommon.tsx` 中。

### 样式编写

样式编写使用了 `styled-components` 插件，通过样式组件化实现类似 Vue 中的 scoped 功能，界面中的样式不会互相影响，最简单的例子如下：

样式文件 style：

```js
import styled from 'styled-components';

// 生成 div 标签
export const Index = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
```

使用方式：

```js
import { Index } from './style';

//......

 render() {
   return (
    //  编译之后内容被 div 标签包裹
     <Index> 内容 </Index>
   )
 }
```
`styled-components` 还拥有传参、继承、定义属性等功能，如有需要请前往官网深度学习。

全局样式通过 `styled-components —> createGlobalStyle` 引入到了 router.jsx 中并注册到全局，具体参考下方 `icon` 引入方式。

### icon 文件

icon 文件使用 `iconfont` 图标，同样使用 `styled-components` 进行注册，需要多一个处理步骤。

- 下载 `unicode` 文件到项目中如 `assets/icon`，删除多余 `demo*` 和 `iconfont.js`。
- 将 `iconfont.css` 文件修改后缀为 `iconfont.js`。
- 打开 `iconfont.css` 文件修改为以下格式：

```js
import { createGlobalStyle } from 'styled-components';

// 使用 styled-components 全局注册函数包裹内容并导出
export const Iconstyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  ......
`
- 与全局样式一样在 `router.jsx` 中进行注册。
```

### 屏幕适配

本项目放弃了 `Class` 版本的 `rem` 适配方案，采用更加灵活的 `scale` 缩放适配方案, 适配注册入口在 `src\pages\IndexPage\layout.tsx`，实现代码在 `src\utils\previewScale.ts` 中。

### 全局管理

全局数据管理采用灵活的 `zustand` ，管理组件的渲染方式为 `canvas | svg`。

### 路由

声明式写法， 也可以使用 `Dom` 嵌套写法。

