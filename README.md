# 图片展示应用

这是一个基于 [Next.js](https://nextjs.org/) 开发的图片展示应用，使用 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 引导创建。

## 项目介绍

本项目是一个简单的图片展示平台，用户可以浏览和查看不同的图片产品，包括产品名称和价格信息。

### 功能特点

- 图片网格展示
- 图片详情页面
- 响应式设计，适配不同设备
- 使用 Next.js 的图片优化功能

## 技术栈

- **前端框架**：Next.js 14.2.5
- **UI 库**：React 18
- **样式**：Tailwind CSS
- **数据存储**：lowdb
- **语言**：TypeScript

## 开始使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
# 然后
npm run start
```

## 项目结构

```
src/
├── app/                  # Next.js 应用目录
│   ├── api/              # API 路由
│   ├── @modal/           # 模态框组件
│   ├── photos/           # 图片相关页面
│   ├── page.tsx          # 首页
│   └── layout.tsx        # 布局组件
├── data.ts               # 图片数据
└── db.ts                 # 数据库配置
```

## 学习资源

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 功能和 API。
- [学习 Next.js](https://nextjs.org/learn) - 交互式 Next.js 教程。

## 部署

推荐使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 进行部署，该平台由 Next.js 的创建者开发。

查看 [Next.js 部署文档](https://nextjs.org/docs/deployment) 了解更多详情。
