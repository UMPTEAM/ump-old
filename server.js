// import './env'
import Koa from 'koa'
// import json from "koa-json"

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'hello koa2';
});

app.listen(3000, () => {
  console.log('ump rest server start at port(s): 3000')
});

module.exports = app;
