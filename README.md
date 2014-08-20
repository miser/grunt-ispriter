grunt-ispriter可以方便地通过grunt使用[iSpriter](https://github.com/iazrael/ispriter "iSpriter")

安装：

    npm install grunt-ispriter

配置：



    grunt.initConfig({
         ispriter: {
            default: {
                imagedist: '../images', //可选，默认spriter图将存放在.//public/spriter_stylesheets/img/下
                fileversion：'', //可选，为spriter图将加上版本号，默认不加版本号
                files: {
                        './public/spriter_stylesheets/': ['./public/stylesheets/',...], //'经过修改过的css存放目录'：['css源目录']
                }
            }
        }
    });

or

    grunt.initConfig({
         ispriter: {
            default: {
                imagedist: '../images', //可选，默认spriter图将存放在.//public/spriter_stylesheets/img/下
                fileversion：'', //可选，为spriter图将加上版本号，默认不加版本号
                files: {
                    './public/spriter_stylesheets/': ['./public/stylesheets/',...], //'经过修改过的css存放目录'：['css源目录']
                }
            }
        }
    });


License
=======

[MIT](./LICENSE-MIT)