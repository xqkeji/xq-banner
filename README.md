# xq-banner

为nodejs项目构建后生成的dist目录下的所有js、ts、cjs、mjs等文件，根据package.json的信息自动在文件起始位置生成相应的版权信息！

## 安装

```bash
npm i xq-banner
```

## 使用

```bash
npx xq-banner
```

## 应用示例

在package.json文件

```json
"scripts": {
    "build": "npx unbuild && npx xq-banner"
},
```
然后使用npm run build

将自动调用npx unbuild进行构建，构建完成后会在dist目录生成相应文件

这时会再自动执行npx xq-banner，自动给相应文件的起始位置添加版权信息。

## 版权信息内容

```js
const banner = `/*!
 * ${pkg.name} v${pkg.version} (${pkg.homepage})
 * Author ${pkg.author}
 * LICENSE ${pkg.license}
 * Copyright ${year} ${pkg.author}
 */
 `
```

用户只需在项目的package.json设置相应信息就可以自动生成。
