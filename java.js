$(document).ready(function(){
    $('img').dblclick(function(){
        // do something
        alert('Picture fade out...')
        $(this).fadeOut().slow();
    });
});