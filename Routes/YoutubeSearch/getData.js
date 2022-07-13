const express = require("express");
const moongoose = require("moongoose");
const router = express.Router();
const video = require('../../Models/Videos');

router.get(
    "/search",
    async (req,res) => {
        var que = req.query.string
        let list_of_word = que.replace(/[^A-Za-z0-9]+/g, " ");
        let newArr = list_of_word.trim().split(" ");
        var li = []
        for(var i = 0;i<newArr.length;i++) {
            var li_1 = {video_title: {$regex: new RegExp('.* '+newArr[i]+' .*'), $options : "i"}};
            var li_2 = {video_description: {$regex: new RegExp('.* '+newArr[i]+' .*'), $options : "i"}};
            li.push(li_1);
            li.push(li_2);
        }
        var newData = await video.find({
            $or : li
        });
        res.send(newData);
    }
);

module.exports = router;
