const db = require('../config'),Schema = db.Schema;

var user = db.model('user',new Schema(
    {
        username: String,
        password: String,
        // checkpoint: String,
        token: String,
        create_time: Date
       
    },{_id:true}));

module.exports = user;