import Koa from 'koa'
import json from 'koa-json'
import jwt from 'koa-jwt'
import path from 'path'
import logger from 'koa-logger'
import serve from 'koa-static'
import historyApiFallback from 'koa2-history-api-fallback'
import KoaRouter from 'koa-router'
import koaBodyparser from 'koa-bodyparser'

import menuRouter from './server/routers/menuRouters';

const app = new Koa();

const router = KoaRouter();

app.use(koaBodyparser());
app.use(json());
app.use(logger());

router.use('/menu', menuRouter.routes());

app.use(router.routes());// 将路由规则挂载到Koa上。
app.use(historyApiFallback());
app.use(serve(path.resolve('dist')));

app.listen(3000, () => {
  console.log('ump rest server start at port(s): 3000')
});

module.exports = app;
