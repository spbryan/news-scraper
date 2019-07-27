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
});