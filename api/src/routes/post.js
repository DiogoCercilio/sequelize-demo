const express = require('express');
const router = express.Router();
const postService = require('../services/PostService');

router.get('/', async function(req, res) {
  res.json(await postService.getAll());
});

module.exports = router;
