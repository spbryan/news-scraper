/********************************
 * Page Javascript for News Scraper
 * 
 * @author Sean Bryan
 * 
 * 2019-07-27
 ********************************/

$(function () {
    $('#article-table').DataTable();

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
     * On-Click event to bring up modal to add 
     * Comment Information
     */
    $("#comment-btn").on("click", function (event) {
        event.preventDefault();
        $("#comment-modal").modal();
    });
    
});