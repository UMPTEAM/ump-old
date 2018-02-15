const Koa = require("koa");

const App = new Koa();

App.use(async (ctx) => {
  ctx.body = 'hello koa2';
});

App.listen(3000, () => {
  console.log('ump rest server start at port(s): 3000')
});
