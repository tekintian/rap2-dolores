module.exports = {
//  rap2为 rap2-delos的部署服务器容器连接名称，或者是你的rap2服务器的的地址与端口 
//  【如果是正式发布，则此地址必须位于公网能访问的地址，否则此客户端无法正常运行】
  serve: 'http://192.168.99.100:8080',
  // 设置你的服务端的安全连接key, 此key 的定义在你的RAP2服务端 src/config/config.*.js 文件中定义
  keys: ['sJLIgP0iJchKLz7pxlYHTOxmZRwdTjn4kVst7q7pOxEN41eqA4sV5pM3'],
  session: {
    key: 'koa:sess'
  }
}