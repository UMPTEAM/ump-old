import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/umpDB');

exports.mongoose = mongoose;


