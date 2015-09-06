# express4-angular-mongodb
webapp seed
## 项目框架
---
### 运行环境nodejs
1. 服务器exressjs
2. 框架angularjs,jquery,underscore
3. 数据库mongoDB(mongoose驱动)
4. 包管理工具bower
5. 打包工具gulp(配置css,js,img压缩,sass解析,livereload监听)

### 项目目录
1. app为后台程序文件夹,包含路由配置文件,数据库模型,服务controller等
2. node_modules为依赖模块文件
3. public为资源文件夹,包含静态资源,开发及生产资源等
4. routes为express路由文件(angular路由在public/javascripts/app.js)
5. uploads为上传文件夹
6. views为express渲染模板(angluar模板在public/templates)
7. .bowerrc 为bower配置文件,包含模块安装目录配置
8. .jshintrc为gulpjs插件配置文件
9. app.js为程序配置文件,启动命令"node app.js",地址("http://localhost:3000")
10. bower.json为bower配置文件,包含依赖模块等
11. gulpfile.js为gulp任务配置文件
12. package.json为程序配置文件,包含npm依赖模块等
13. server.js为服务器启动配置文件
