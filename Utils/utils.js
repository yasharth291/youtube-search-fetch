const axios = require('axios').default;
const Video = require('../Models/Videos.js');
const video = require('../Models/Videos');

Downloader = async () => {
  console.log('*');
  var current_time = new Date();
  current_time.setMinutes(current_time.getMinutes() - 30);
  var last_hit_time = current_time;
  axios
    .get('https://youtube.googleapis.com/youtube/v3/search', {
      params: {
        key: process.env['API_KEY'],
        q: process.env['SEARCH_TITLE'],
        part: 'snippet',
        order: 'date',
        maxResults: 50,
        publishedAfter: last_hit_time,
      },
    })
    .then(async (res) => {
      if (res.data) {
        var i;
        for (i = 0; i < res.data.items.length; ) {
          var video_id = res.data.items[i].id.videoId;
          var video_title = res.data.items[i].snippet.title;
          var video_description = res.data.items[i].snippet.description;
          var video_publishedDateTime = res.data.items[i].snippet.publishTime;
          var video_thumbnailUrls =
            res.data.items[i].snippet.thumbnails.default.url;
          var channel_id = res.data.items[i].snippet.channelId;
          var channel_title = res.data.items[i].snippet.channelTitle;
          var created_time = new Date();
          videos = new Video({
            video_id,
            video_title,
            video_description,
            video_publishedDateTime,
            video_thumbnailUrls,
            channel_id,
            channel_title,
            created_time,
          });
          await videos.save();
          i++;
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

async function ChangeStringToArray(que) {
  let list_of_word = que.replace(/[^A-Za-z0-9]+/g, ' ');
  let newArr = list_of_word.trim().split(' ');
  return newArr;
}

const FindTheData = async (newArr, page) => {
  var li = [];
  for (var i = 0; i < newArr.length; i++) {
    var li_1 = {
      video_title: {
        $regex: new RegExp('.* ' + newArr[i] + ' .*'),
        $options: 'i',
      },
    };
    var li_2 = {
      video_description: {
        $regex: new RegExp('.* ' + newArr[i] + ' .*'),
        $options: 'i',
      },
    };
    li.push(li_1);
    li.push(li_2);
  }
  page = (page - 1) * 10;
  var newData = await video
    .find({
      $or: li,
    })
    .skip(page)
    .limit(10)
    .sort({ video_publishedDateTime: 1 });
  return newData;
};

module.exports = {
  Downloader,
  ChangeStringToArray,
  FindTheData,
};
