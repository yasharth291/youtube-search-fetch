const mongoose = require('mongoose');

let Video = mongoose.Schema ({
    video_id : {
        type : String,
        required : true,
        unique : true
    },
    video_title : {
        type : String,
        required : true
    },
    video_description : {
        type : String,
    },
    video_publishedDateTime : {
        type: Date,
        required : true
    },
    video_thumbnailUrls : {
        type: String,
        required : true
    },
    channel_id : {
        type : String,
        required : true
    },
    channel_title : {
        type : String,
        required : true
    },
    created_time : {
        type : Date,
        default : new Date()
    }
});

module.exports = Video = mongoose.model('video',Video);