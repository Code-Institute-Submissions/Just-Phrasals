$(document).ready(function() {

// Toggle to show/hide verb example boxes 

    $(".verb-box").click(function() {
        $(this).next().slideToggle("slow");
    });
 
}); 