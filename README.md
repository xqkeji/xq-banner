# xq-banner

为nodejs项目构建后生成的dist目录以及js、css、ts、scss等子目录的所有js、css、scss、ts、cjs、mjs等类型的文件，根据package.json的信息自动在文件起始位置生成相应的版权信息！
同时也支持通过命令行参数来指定需要添加代码版权信息的目录。

## 安装

```bash
npm i xq-banner
```

## 使用

```bash
npx xq-banner
```
### 备注

如果需要指定dist之外的目录，可以携带命令行参数。
例如：
```bash
npx xq-banner src/js src/css src/ts
```
src/js、src/css、src/ts代表用户指定的目录，采用相对路径。

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
