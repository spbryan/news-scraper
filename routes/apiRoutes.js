/********************************
 * apiRoutes for News Scraper
 * 
 * @author Sean Bryan
 * 
 * 2019-07-27
 ********************************/
//scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../models");

var ROOT_CONTEXT = "https://www.wmur.com";

module.exports = function (app) {

    // load index page
    app.get("/", function (req, res) {
        //Scrape WMUR
        axios.get("https://www.wmur.com/local-news").then(function (response) {
            var $ = cheerio.load(response.data);
            $("div.grid-content-inner").each(function (i, element) {
                var result = {};
                result.title = $(this)
                    .children("a")
                    .text();
                result.link = ROOT_CONTEXT + $(this)
                    .children("a")
                    .attr("href");

                // Create a new Article using the `result`
                db.Article.create(result)
                    .then(function (dbArticle) {
                    })
                    .catch(function (err) {
                    });
            });

            db.Article.find({}).sort({ dateCapured: 1 }).then(function (dbArticle) {
                res.render("index", { article: dbArticle });
            })
                .catch(function (err) {
                    res.json(err);
                });
        });
    });

    // load comments page
    app.get("/comments/:id", function (req, res) {
        db.Article.findOne({ _id: req.params.id })
            .populate("comment")
            .then(function (dbArticle) {
                res.render("comment", {comment: dbArticle.comment});
            })
            .catch(function (err) {
                // If an error occurs, send the error back to the client
                res.json(err);
            });
    });

    // delete article
    app.delete("/article/:id", function (req, res) {

        db.Article.remove({ _id: req.params.id }).then(function (result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

};