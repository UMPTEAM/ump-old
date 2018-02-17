import mongodb from '../config'

let Schema = mongodb.mongoose.Schema;

let menuSchema = new Schema({
  id: String,
  name: String,
  icon: String,
  level: Number,
  leaf: Boolean,
  parentId: String,
  token: String
});

let menu = mongodb.mongoose.model('menu', menuSchema);

module.exports = menu;
