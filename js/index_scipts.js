jQuery(document).ready(function () {
    $(".image-link").viewbox();

    $(".jumbotron").slideDown("slow");

    $("#drop-1").click(function(){
        $("#menu-1").slideToggle();
    });
    $("#drop-2").click(function(){
        $("#menu-2").slideToggle();
    });
    $("#drop-3").click(function(){
        $("#menu-3").slideToggle();
    });
    $("#drop-4").click(function(){
        $("#menu-4").slideToggle();
    });
    $("#science").click(function () {
        $(".mainBooks").load("login.html")
    });

    var show_per_page=8;
    var current_page=0;
    var total_page=Math.ceil($(".mainBooks").children().length/show_per_page);
    $(".mainBooks").children().css("display","none");
    $(".mainBooks").children().slice(show_per_page*current_page,show_per_page).css("display","block");
    $(".previous").click(function(){
       if(current_page==0) return;
       else {
           --current_page;
           var start=current_page*show_per_page;
           var end=start+show_per_page;
           $(".mainBooks").children().css("display","none").slice(start,end).fadeIn("slow");
       }
    });
    $(".next").click(function(){
        if(current_page==total_page-1) return;
        else {
            ++current_page;
            var start=current_page*show_per_page;
            var end=start+show_per_page;
            $(".mainBooks").children().css("display","none").slice(start,end).fadeIn("slow");
        }
    });
});