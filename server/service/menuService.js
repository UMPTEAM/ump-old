import MenuDao from '../dal/menuDao'

let MenuService = () => {};

MenuService.prototype.addMenu = (menu, callback) => {
  MenuDao.save(menu, callback);
};

MenuService.prototype.findAll = (callback) => {
  return MenuDao.findAll(callback);
};

module.exports = new MenuService();
