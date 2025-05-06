# 中文起名网站 (Chinese Name Maker)

一个现代化的中文起名网站，帮助用户生成优雅、有意义的中文名字。

## 功能特性

- 🎯 智能起名：根据用户输入的条件生成合适的中文名字
  - 固定名字格式：姓氏 + 两个字的名字
  - 从古典文献中提取名字
  - 避免重复字
- 🎨 名字分析：提供名字的含义解释、五行分析
- 📝 个性化定制：支持根据性别、生辰八字、期望特质等条件定制名字
- 💾 名字收藏：用户可以保存喜欢的名字
- 🌙 深色模式：支持明暗主题切换
- 📱 响应式设计：完美支持各种设备尺寸
- 🌐 多语言支持：支持中英文切换

## 技术架构

- Next.js 13+（app 目录为页面路由，页面调用 components 下的组件）
- React 18 + TypeScript
- Tailwind CSS（UI 样式）
- Zustand（状态管理）
- React Hook Form + Zod（表单与数据校验）
- Radix UI、next-themes、recharts、sonner、embla-carousel-react 等

## 目录结构
```
chineseNameMaker/
├── app/                # Next.js 13+ 应用路由目录
├── components/         # 可复用组件
├── hooks/             # 自定义 React Hooks
├── lib/               # 工具函数和通用库
│   ├── name-generator.ts  # 名字生成器
│   ├── pinyin.ts     # 拼音转换
│   ├── translate.ts  # 翻译功能
│   └── utils.ts      # 通用工具函数
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