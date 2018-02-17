import MenuService from '../service/menuService'

const menuAdd = async (ctx) => {
  let menu = ctx.request.body;
  let success = await MenuService.addMenu(menu, (err) => {
    console.log(err);
  });
  ctx.body = {
    success: success
  }
};

const findAll = async (ctx) => {
  let menuList = await MenuService.findAll((err) => {
    console.log(err)
  });
  ctx.body = {
    success: true,
    data: menuList
  };
};

export default {
  menuAdd,
  findAll
};
