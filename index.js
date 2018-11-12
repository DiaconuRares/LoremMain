$(document).ready(function() {
    $(".textdiv1").hide();
    
    $(".nextbtn").click(function() {
        $(".textdiv").hide();
        $(".textdiv1").show();
    });
    
    $(".textdiv1>.btn0").click(function() {
        window.location.href = "https://diaconurares.github.io/Lorem/";
    });
    
    $(".textdiv1>.btn1").click(function() {
        window.location.href = "https://diaconurares.github.io/Lorem2/";
    });
});