# [iSpriter](https://github.com/iazrael/ispriter "iSpriter")  GRUNT 插件

	npm install grunt-ispriter

### iSpriter特性
> 智能提取 background 的 url 和 position 等信息
> 
> 智能设置被合并图片的宽高
> 
> 智能判断使用了 background-position（使用px为单位）定位的图片并重新定位
> 
> 支持已经合并了的精灵图再次合并和定位
> 
> 支持图片去重
> 
> 支持限制合并后图片的大小
> 
> 支持设置合并后的图片间距
> 
> 支持将所有图片合并为一张, 同时所有 CSS 文件合并为一个文件 【新】
> 
> 支持读取 @import 的样式表进行处理 【新】
> 
> 支持将所有合并了图片的 CSS 统一输出, 减少代码量 【新】
> 
> 支持对输出的 CSS 进行压缩(使用 clean-css)【新】
> 
> 支持排除不需要合并的图片（在 url 后面添加 #unsprite 或者使用 config 文件来配置）【新】
> 
> 跳过 background-position 是 right/center/bottom 的图片
> 
> 跳过显式的设置平铺方式为 repreat 的图片
> 
> 跳过设置了 background-size 的图片


### grunt-ispriter配置

    grunt.initConfig({
		 ispriter: {
            default: {
                options: {},
                files: {
                    './public/spriter_stylesheets/': ['./public/stylesheets/'], //经过修改过的css存放目录：css源目录，spriter图将存放在.//public/spriter_stylesheets/img/下
                }
            }
        }
	});


    grunt.initConfig({
		 ispriter: {
            default: {
                options: {
                    imagedist: '../spriter_images' //定义spriter图存放的目录位置
                },
                files: {
                    './public/spriter_stylesheets/': ['./public/stylesheets/'], //经过修改过的css存放目录：css源目录
                }
            }
        }
	});