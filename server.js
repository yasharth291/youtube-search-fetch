const express_ = require('express');
const app = express_();
const connectToDatabase = require("./config/connectToDatabase.js");
var cron = require('node-cron');
const axios = require('axios').default;
const Video = require('./Models/Videos.js');
const { json } = require('express');

connectToDatabase();

let PORT = process.env['PORT'];

app.use("/api/", require('./Routes/YoutubeSearch'));

app.listen(PORT, () =>
    cron.schedule('*/10 * * * * *', () => {

        var current_time = new Date();
        current_time.setMinutes(current_time.getMinutes() - 30);
        var last_hit_time = current_time;
        // axios.get("https://youtube.googleapis.com/youtube/v3/search",{ 
        //     params: { 
        //         key : process.env['API_KEY'], 
        //         q : process.env['SEARCH_TITLE'], 
        //         part : "snippet", 
        //         order : "date",
        //         maxResults : 50, 
        //         publishedAfter : last_hit_time
        //     }
        // }).then(async (res) => {
        //     if(res.data) {
        //         var i;
        //         for(i = 0;i<res.data.items.length;) {
        //             var video_id = res.data.items[i].id.videoId;
        //             var video_title = res.data.items[i].snippet.title;
        //             var video_description = res.data.items[i].snippet.description;
        //             var video_publishedDateTime = res.data.items[i].snippet.publishTime;
        //             var video_thumbnailUrls = res.data.items[i].snippet.thumbnails.default.url;
        //             var channel_id = res.data.items[i].snippet.channelId;
        //             var channel_title = res.data.items[i].snippet.channelTitle;
        //             var created_time = new Date();
        //             video = new Video({
        //                 video_id,
        //                 video_title,
        //                 video_description,
        //                 video_publishedDateTime,
        //                 video_thumbnailUrls,
        //                 channel_id,
        //                 channel_title,
        //                 created_time
        //             });
        //             await video.save();
        //             i++;
        //         }
        //     }
        //   }).catch(function (error) {
        //     console.log(error);
        //   });
    })
);
