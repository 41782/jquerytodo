$("ul").on("click", "li", function() {
    
    $(this).click(function() {
        $(this).toggleClass("completed");
    });
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

    }
    
});

$(".fa-calendar-plus-o").click(function(){
    $("input[type='text']").fadeToggle();
})