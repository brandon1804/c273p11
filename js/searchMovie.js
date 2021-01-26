$(document).ready(function () {

    var moviesStr = localStorage.getItem("movies");
    var moviesArr = JSON.parse(moviesStr);

    if (moviesArr == null) {
        moviesArr = [];
    }

    $("#btnSearch").click(function () {
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();
        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=19c0fc0b",
            cache: false,
            dataType: "jsonp",
            success: function (response) {
                var message = "";
                message += "<b>Title: </b>" + response.Title + "<br>"
                        + "<b>Released: </b>" + response.Released + "<br>"
                        + "<b>Runtime: </b>" + response.Runtime + "<br>"
                        + "<b>Genre: </b>" + response.Genre + "<br>"
                        + "<b>Actors: </b>" + response.Actors + "<br>"
                        + "<b>Plot: </b>" + response.Plot + "<br>";
                $("#contents").html(message);
                $("#poster").html("<img src = " + response.Poster + ">");

                moviesArr[moviesArr.length] = response;
                var stringMoviesArr = JSON.stringify(moviesArr);
                console.log(stringMoviesArr);
                localStorage.setItem("movies", stringMoviesArr);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });

});