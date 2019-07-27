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
                        console.log(dbArticle);
                    })
                    .catch(function (err) {
                        // If an error occurred, log it
                        console.log(err);
                    });
            });

            // Send a message to the client
            // res.send("Scrape Complete");
            res.render("index", {});
        });
    });

};