$(document).ready(function () {
    loginHeight();
})

$(window).resize(function () {
    loginHeight();
})

function loginHeight() {
    var dHeight = $(document).height();
    $(".login-screen").css("height", dHeight + "px");
}
