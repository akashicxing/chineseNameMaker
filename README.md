# 中文起名网站 (Chinese Name Maker)

一个现代化的中文起名网站，帮助用户生成优雅、有意义的中文名字。

## 功能特性

- 🎯 智能起名：根据用户输入的条件生成合适的中文名字
- 🎨 名字分析：提供名字的含义解释、五行分析
- 📝 个性化定制：支持根据性别、生辰八字、期望特质等条件定制名字
- 💾 名字收藏：用户可以保存喜欢的名字
- 🌙 深色模式：支持明暗主题切换
- 📱 响应式设计：完美支持各种设备尺寸

## 技术架构

### 核心框架
- Next.js 13.5.1 - React 框架
- React 18.2.0 - 前端框架
- TypeScript - 开发语言

### UI/样式框架
- Tailwind CSS - 样式管理
- Radix UI - 无样式组件库
- tailwindcss-animate - 动画效果
- next-themes - 主题切换

### 状态管理
- Zustand - 状态管理工具
- React Hook Form - 表单管理
- Zod - 数据验证

### 功能组件
- date-fns - 日期处理
- recharts - 图表展示
- sonner - 提示消息
- embla-carousel-react - 轮播功能

### 开发工具
- ESLint - 代码质量检查
- PostCSS - CSS 处理
- TypeScript - 类型安全

## 项目结构
```
chineseNameMaker/
├── app/                # Next.js 13+ 应用路由目录
├── components/         # 可复用组件
├── hooks/             # 自定义 React Hooks
├── lib/               # 工具函数和通用库
├── public/            # 静态资源
└── styles/            # 全局样式
```

## 开始使用

1. 克隆项目
```bash
git clone [项目地址]
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 环境要求
- Node.js 16.8.0 或更高版本
- npm 7.0.0 或更高版本

## 贡献指南
欢迎提交 Issue 和 Pull Request 来帮助改进项目。

## 许可证
MIT License 