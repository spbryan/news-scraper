# news-scraper
## Application Description
_This site provides a list of articles and links from a New Hampshire news site.  The articles update with each refresh of the screen but users can also choose to clear the table and pull a fresh scraping.  Additionally users may enter comments about each story that are then persisted to a MongoDB table and kept until the article is deleted_

## Application Organization
The application is organized with separate js files defined for each perspective:
* __models/index.js__ - Boilerplate code in support of mongoose
* __models/Article.js__ - Model entity for article details with the corresponding data base definition
* __models/Comment.js__ - Model entity for comment details with the corresponding data base definition
* __public/js/burgers.js__ - Javascript to handle events from the handlebars pages
* __routes/api-routes.js__ - Defines CRUD behavior for corrspoinding http calls
* __server.js__ - Handles express configurations and server settings.
* __main.handlebars__ - Handles display for home page.
* __index.handlebars__ - Handles dispaly for main view including the table to display the article information.
* __comment.handlebars__ - Handles dispaly for comments and provide model for form input.

## Running the Application
TBD

* The page will automatically scrape the NH site for the latest headlines and links upon redenering.  The details populate a dynamic table that includes the timestamp of the scraping, the headline (which also serves as a link to the article), a button to view comments, and a button to delete.
* Get The Latest News: Button that will scrape the NH site for new articles.  Scraped details are saved to a MongoDb table and only unique entries are persisted.
* Delete Articles: Button that deletes all current articles and comments from the MongoDb table.  A new batch is automatically scarped upon the next rendering of the page.
* Users have full sorting and search options on the table to isolate articles of interest
* Table details - Timestamp of last scraping, Headline (which is also the link to the article), View button for comments, Delete button to delete the specific article from the table
* The View page provides the "Add Comment" feature.  On click renders a modal to gather user name details and the comment.  Comments are then saved to MongoDb and displayed on the page

## Technology
This application was written in JavaScript on NodeJs using Express, Handlebars, and Mongoose. 

__NPM Installs__
* axios: ^0.19.0
* cheerio: ^1.0.0-rc.3
* express: ^4.17.1
* express-handlebars": ^3.1.0
* mongoose: ^5.6.7

## Development Role
Application designed and developed by Sean Bryan as part of a homework assignment for the UNH Full Stack Boot Camp.
