# 构建阶段
# node镜像
FROM node:12-alpine as builder

# 设置时区
RUN apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata

# 这是容器中的目录地址
RUN mkdir -p /var/www/blog-admin

# 设置工作目录
WORKDIR /var/www/blog-admin

# 拷贝package.json文件到工作目录
# !!重要：package.json需要单独添加。
# Docker在构建镜像的时候，是一层一层构建的，仅当这一层有变化时，重新构建对应的层。
# 如果package.json和源代码一起添加到镜像，则每次修改源码都需要重新安装npm模块，这样木有必要。
# 所以，正确的顺序是: 添加package.json；安装npm模块；添加源代码。
COPY package.json /var/www/blog-admin/package.json

# 安装npm依赖(使用淘宝的镜像源)
# 如果使用的境外服务器，无需使用淘宝的镜像源，即改为`RUN npm i`。
RUN npm install --production --registry=https://registry.npm.taobao.org

# 拷贝所有源码到工作目录
COPY . /var/www/blog-admin

# 打包成线上部署文件
RUN npm run build

# 运行阶段
# nginx镜像
FROM nginx

COPY --from=builder /var/www/blog-admin/build /usr/share/nginx/html

COPY /var/www/blog-admin/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx","-g","daemon off;"]