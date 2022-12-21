#!/usr/bin/env node
/**
 * xq-banner v1.0.0 (https://xqkeji.cn/)
 * Author xqkeji.cn
 * LICENSE SSPL-1.0
 * Copyright 2022 xqkeji.cn
 */
import * as fs from 'fs';
import * as path from 'path'

// 最新 node 核心包的导入写法
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg_file = path.resolve(__dirname, '../../../package.json'); 
const pkg = JSON.parse(fs.readFileSync(pkg_file, 'utf8'))

const year = new Date().getFullYear()
const banner = `/*!
 * ${pkg.name} v${pkg.version} (${pkg.homepage})
 * Author ${pkg.author}
 * LICENSE ${pkg.license}
 * Copyright ${year} ${pkg.author}
 */
 `

  
//解析需要遍历的文件夹，我这以E盘根目录为例  
const filePath = path.resolve(__dirname, '../../../dist'); 

fs.readdir(filePath,function(err,files){  
    if(err){  
        console.warn(err)  
    }else{  
        //遍历读取到的文件列表  
        files.forEach(function(filename)
        {  
            const ext=path.extname(filename);
            if(ext==".cjs"||ext==".ts"||ext==".d.ts"||ext==".mjs"||ext==".js")
            {
                //获取当前文件的绝对路径  
                const file = path.join(filePath,filename);
                const content=fs.readFileSync(file).toString();
                if(!content.startsWith(banner))
                {
                    fs.writeFileSync(file,banner+content);
                }
            } 
        });  
    }
})
