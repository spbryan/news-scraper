/********************************
 * Page Javascript for News Scraper
 * 
 * @author Sean Bryan
 * 
 * 2019-07-27
 ********************************/
// VARIABLES
var newUserName = $("#user-name")
var newUserComment = $("#user-comment");

$(function () {
    $('#article-table').DataTable();

    /**
     * On-Click event to scrape site for new entries
     */
    $("#scrape-articles").on("click", function (event) {
        event.preventDefault();
        $.ajax("/", {
            type: "GET"
        }).then(
            function () {
                location.reload();
            }
        );
    })

    /**
     * On-Click event to grab place information
     * and open place page
     */
    $(".comments-button").on("click", function (event) {
        var id = $(this).data("value")
        var route = "/comments/" + id;
        window.location.href = route;
    })

    /**
     * On-Click event to delete a row from the table
     */
    $(".delete-button").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("value")
        $.ajax("/article/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    })

    /**
     * On-Click event to delete all rows from the table
     */
    $("#delete-articles").on("click", function (event) {
        event.preventDefault();
        $.ajax("/article", {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    })

    /**
     * On-Click event to bring up modal to add 
     * Comment Information
     */
    $("#comment-btn").on("click", function (event) {
        event.preventDefault();
        $("#comment-submit").attr("value",this.value);
        $("#comment-modal").modal();
    });


     /**
     * On-Click event to submit a new coment 
     * to the database
     */
    $("#comment-submit").on("click", function (event) {
        event.preventDefault();
        var newComment = {
            user: newUserName.val().trim(),
            body: newUserComment.val().trim()
        }

        // Send the post request to village_db Reviews Table
        $.ajax("/article/" + this.value, {
            type: "POST",
            data: newComment
        }).then(
            function () {
                console.log("created new comment");
                // Reload the review to get updated list
                location.reload();
            }
        )
    });

    
});