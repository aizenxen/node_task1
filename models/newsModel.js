const connection = require("../mysql.js");

exports.getAllNews = async function(req,res) {
    let newsList = [];
    return await connection.query("SELECT * FROM News")
    .then(data => {
        if (data && data[0]) {
            for (let i=0; i<data[0].length; i++) {
                newsList[i] = data[0][i];
            }
        }
        return newsList;
    })
    .catch(err => {
        console.log(err);
        return []; 
    });
};

exports.getNewsById = async function(id) {
    let news = null;
    return await connection.query('SELECT * FROM News WHERE idNews = ?', [id])
    .then(data => {
        if (data && data[0] && data[0][0]) {
            news = data[0][0];
        }
        return news;
    })
    .catch(err => {
        console.log(err);
        return null;
    });
};