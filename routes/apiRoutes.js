/********************************
 * apiRoutes for News Scraper
 * 
 * @author Sean Bryan
 * 
 * 2019-07-27
 ********************************/

module.exports = function (app) {

    // load index page
    app.get("/", function (req, res) {
        res.render("index", {});
    });

};