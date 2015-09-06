var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username : String,
    nickname: String,
    realname: { first: String, last: String},
    identity_card: String,
    english_name: String,
    password: String,
    photo: {type:String,default:'default/heads/default.jpg'},
    age: Number,
    gender: Number,
    birthday: Date,
    constellation: Number,
    zodiac: Number,
    interests: Array,
    resume: String,
    tags: Array,
    status: Number,
    type: Number,
    add: Number,
    //friends: [friendSchema],
    //articals: [articalSchema],
    //comments: [commentSchema],
    create_date: { type: Date, default: Date.now},
    update_date: { type: Date, default: Date.now},
    login_date: { type: Date, default: Date.now},
    create_ip: String,
    login_ip: String,
    contact :{
        email: String,
        mobile: String
    },
    access :{
        level:Number,
        group:String
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    }
});
module.exports = mongoose.model('Users', UserSchema);