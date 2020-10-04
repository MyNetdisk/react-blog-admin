/** @format */

let ipUrl = ''
const HOST = process.env.NODE_ENV
if (HOST === 'development') {
  ipUrl = 'http://127.0.0.1:7001/admin/'
} else if (HOST === 'production') {
  ipUrl = 'https://api.mynetdisk.top/admin/'
}
const servicePath = {
  login: `${ipUrl}login`, // 登录接口
  getTypesInfo: `${ipUrl}getTypesInfo`, // 获得文章类别信息接口
  addArticle: `${ipUrl}addArticle`, // 添加文章
  updateArticle: `${ipUrl}updateArticle`, // 修改文章
  getArticleList: `${ipUrl}getArticleList`, // 文章列表
  delArticle: `${ipUrl}delArticle/`, // 删除文章
  getArticleById: `${ipUrl}getArticleById/`, // 根据id获取文章详情
}

export default servicePath
