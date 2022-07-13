const express = require('express');
const router = express.Router();
const Util = require('../Utils/utils');
router.get('/search', async (req, res) => {
  let newArr = await Util.ChangeStringToArray(req.query.string);
  let newData = await Util.FindTheData(newArr);
  res.send(newData);
});

module.exports = router;
