const express = require('express');
const router = express.Router();
const Article = require('../models/Article');


router.get('/', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});


router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.json(article);
});


router.patch('/:id', async (req, res) => {
    const result = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send(result);
})

router.delete('/:id', async (req, res) => {
    const result = await Article.findByIdAndDelete(req.params.id);
    res.send(result);
})


router.post('/', async (req, res) => {
    const newArticle = new Article({
        name: req.body.name,
        body: req.body.body,
        author: req.body.author
    });
    try {
        await newArticle.save();
        res.json(newArticle);
    } catch (error) {
        res.send(error);
    }
})


module.exports = router;