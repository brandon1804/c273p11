$(document).ready(function () {

    var moviesStr = localStorage.getItem("movies");
    var moviesArr = JSON.parse(moviesStr);

    if (moviesArr == null) {
        moviesArr = [];
    }

    for (var i = 0; i < moviesArr.length; i++) {
        $("#contents").append('<br><div class="card"><div class="row"><div class="col-sm-6">' + '<img class="card-img-top h-100" src=' +  moviesArr[i].Poster + '>' + '</div><div class="col-sm-6"><div class="card-body">' + '<h5 class="card-title">'
                + moviesArr[i].Title + '</h5>' + '<p class="card-text">' + moviesArr[i].Plot + '</p></div></div>');
    }

});
