## SCM2

> 基于 vue 2.x、vue-cli 3.x

### 技术站
```
0. html: pug 模板引擎
1. css: stylus 预处理器
2. javascript
3. UI: ant-design-vue
```

```
|————— dist                 # 编译产出目录
|
|————— docs                 # 组件使用文档（可参照组件文档示例）
|
|————— public               # 静态资源，不经过 webpack，需要通过绝对路径来引用它们
|
|
|————— src
|      |———— api            # 抽取出 ajax 请求
|      |
|      |———— assets         # 静态资源目录，经过 webpack 打包处理
|      |
|      |———— components     # 公用组件
|      |
|      |———— directives     # 指令
|      |
|      |———— filters        # filter
|      |
|      |———— icons          # svg icons
|      |
|      |———— layout         # 应用骨架级页面
|      |
|      |———— locales        # 国际化
|      |
|      |———— pages          # 页面(与路由对应)
|      |
|      |———— plugins        # 插件
|      |
|      |———— router         # 路由
|      |
|      |———— store                   # 状态管理(vuex)
|      |     |
|      |     |———— index.js          # 组装模块并导出 store 的地方
|      |     |
|      |     |———— actions.js        # 根级别的 action
|      |     |
|      |     |———— mutations.js      # 根级别的 mutation
|      |     |
|      |     └──── modules
|      |           |
|      |           └── demo.js       # demo 模块
|      |
|      |———— styles         # 样式
|      |
|      |———— utils          # 公用方法
|      |
|      |———— App.vue        # vue 应用模板
|      |
|      └──── main.js        # 入口文件
|
|
|————— tests                # 测试
|
|
|————— .env                 # 环境变量（在所有的环境中被载入）
|
|
|————— env.[mode]           # 环境变量（mode: development、test、preview、production）
|
|
|————— .env.[mode].local    # 环境变量（只在指定的模式中被载入，但会被 git 忽略），本地开发时可自己创建该文件
|
|
|————— .eslintrc.js         # eslint 规则
|
|
|————— vue.config.js        # vue-cli 3.x 配置文件
|
|
|————— vue.config.utils.js  # vue-cli 配置文件
|
|
└───── yarn.lock            # 依赖资源版本锁定不可编辑或删除该文件
```

### 环境变量特别说明
```
|————— .env                       # 文件中的变量所有环境生效
|
|————— .env.development           # 本地开发环境生效
|
|————— .env.development.local     # 本地开发环境生效 (自己新建，不会被 git 提交，可防止代码冲突)
|
|————— .env.test                  # yarn build:test (test 环境生效)
|
|————— .env.preview               # yarn build:preview (preview 环境生效)
|
└───── .env.production            # yarn build:production (生产环境生效)
```

### 安装依赖
```
yarn install  # 必须使用
```

### 运行
```
yarn dev
```

### 打包产出
```
# 生产环境
yarn build:prd

# preview 环境
yarn build:preview

# test 环境
yarn build:test
```

### 代码检测
```
yarn lint
```

### 测试
```
yarn test
```

### 注意 :point_left: :point_left: :point_left:
1. 必须使用 [yarn](https://yarnpkg.com/zh-Hans/) 依赖管理工具 :sunglasses:
2. 编辑器请使用 Tab 缩进，webstorm、vscode、submit 用户请调试为**显示空格**
