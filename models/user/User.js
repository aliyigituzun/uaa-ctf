const async = require('async');
const mongoose = require('mongoose');
const moment = require('moment-timezone')
const validator = require('validator');
const bcrypt = require('bcryptjs');

const MAX_DATABASE_TEXT_FIELD_LENGTH = 1e4; // 10,000
const DUPLICATED_UNIQUE_FIELD_ERROR_CODE = 11000; 
const MAX_USER_TEXT_FIELD_LENGHT = 256;
const MAX_POINTS_FIELD_LENGHT = 1e4; // 10,000

const hashPassword = require('./functions/hashedPassword');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max_lenght: MAX_USER_TEXT_FIELD_LENGHT,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        max_lenght: MAX_USER_TEXT_FIELD_LENGHT,
    },
    points: {
        type: Number,
        default: 0,
        max_lenght: MAX_POINTS_FIELD_LENGHT,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
    team_id: {
        type: Schema.Types.ObjectId,
        default: null,
    }
});
    
UserSchema.pre('save', hashPassword);

UserSchema.statics.createUser = function (data, callback) {

    if (!data || typeof data != 'object' ||!data.email || !validator.isEmail(data.email || data.email.length > MAX_EMAIL_TEXT_FIELD_LENGHT || !data.password || data.password.length > MAX_DATABASE_TEXT_FIELD_LENGTH)) {
        return callback("Missing Data", null);
    }
    
    const User = this;
    
    const userData = {
        email: data.email,
        password: data.password,
        username: data.email.split('@')[0],
    }
    const user = new User(userData);
    user.save((err, user) => {
        
        if (err) {
            if (err.code === DUPLICATED_UNIQUE_FIELD_ERROR_CODE) {
                return callback("Email already exists", null);
            }}
    });
}

UserSchema.statics.findUser = function (data, callback) {
    if (!data || typeof data != 'object' || !data.email || !validator.isEmail(data.email || data.email.length > MAX_EMAIL_TEXT_FIELD_LENGHT || !data.password || data.password.length > MAX_DATABASE_TEXT_FIELD_LENGTH)) {
        return callback("Missing Data", null);
    }

    const User = this;
    User.findOne({ email: data.email}, (err, user) => {
        if (err) {
            return callback(err, null);
        }
        if (!user) {
            return callback("User not found", null);
        }
        bcrypt.compare(data.password, user.password, (err, res) => {
            if (res) {
                return callback(null, user);
            } else {
                return callback("Wrong password", null);
            }

        });
    });
}


module.exports = mongoose.model('User', UserSchema);
