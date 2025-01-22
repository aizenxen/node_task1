const NewsModel = require('../models/newsModel');

exports.getNewsList = async function(req, res){
    const newsList = await NewsModel.getAllNews();
    res.render('newsList', {newsList});
};

exports.getNews = async function(req, res){
    const newsId = req.params.idNews;
    const news = await NewsModel.getNewsById(newsId);
    res.render('newsDetail', {news});
};