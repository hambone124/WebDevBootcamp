// Check off list
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

// Click x to delete
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(function(){
        500,$(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(event.which === 13){
        // Get text
        var todoText = $(this).val();
        $(this).val("");
        // New todo item
        $("ul").append(`<li><span><i class="fas fa-trash"></i></span> ${todoText}</li>`);
    }    
});

$(".fa-plus").click(function () { 
    $("input[type='text']").fadeToggle();
});