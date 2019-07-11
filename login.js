$(document).ready(function() {
    $("#warning").hide();

    $(".login_btn").click(function () { 
        if($(".username_input").val() != "admin" || $(".password_input").val() != "p@ssword")
            $("#warning").show();
        else
            window.location.href= 'AddFile.html';
    });
})