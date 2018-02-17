import menu from '../models/menu'

let MenuDao = () => {};

MenuDao.prototype.findAll = async (callback) => {
  return await menu.find({}).exec();
};

MenuDao.prototype.save = async (obj, callback) => {
  let menuInstance = new menu(obj);
  await menuInstance.save().then(callback);
  return true;
};

module.exports = new MenuDao();
