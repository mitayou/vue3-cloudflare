# vue-cloudflare

这个项目使用 Vue 3 + Typescript + Element PLus + Vite 进行开发，部署在cloudflare。

## 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）。

## `.vue` 导入的 TS 类型支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，因此我们用 `vue-tsc` 替代 `tsc` CLI 进行类型检查。在编辑器中，我们需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 使 TypeScript 语言服务能够识别 `.vue` 类型。

## 自定义配置

参见 [Vite 配置参考](https://vite.dev/config/)。

## 项目设置

```sh
yarn
```

### 开发环境的编译和热重载

```sh
yarn dev
```

### 生产环境的类型检查、编译和压缩

```sh
yarn build
```
