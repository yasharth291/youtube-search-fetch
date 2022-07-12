const express = require("express");
const moongoose = require("moongoose");
const router = express.Router();
const video = require('../Models/Videos');

router.get(
    "/search",
    async (req,res) => {
        console.log("yes")
        var que = req.query.string
        let list_of_word = que.replace(/[^A-Za-z0-9]+/g, " ");
        let newArr = list_of_word.trim().split(" ");
        var newData = await video.find({
            $or :[
                {video_title: {$regex: new RegExp('.* '+newArr[0]+' .*'), $options : "i"}},
                {video_description: {$regex: new RegExp('.* '+newArr[0]+' .*'), $options : "i"}}
            ]
        });
        console.log(new RegExp('.* '+newArr[0]+' .*'));
        console.log(newArr.length);
        console.log(newArr);
        for(var i = 1;i<newArr.length;) {
            var data = await video.find({
                $or :[
                    {video_title: {$regex: new RegExp('.* '+newArr[i]+' .*'), $options : "i"}},
                    {video_description: {$regex: new RegExp('.* '+newArr[i]+' .*'), $options : "i"}}
                ]
            });
            console.log(new RegExp('.* '+newArr[i]+' .*', 'i'));
            newData.push(data);
            i++;
        }
        res.send(newData);
    }
);

module.exports = router;
