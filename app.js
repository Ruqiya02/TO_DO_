$(document).ready(function(){
    $('#input').change(function(){
        var input=$(this).val();
        $('ul').append('<li>'+input+'<img src="./icons/check.png" class="fas fa-check"> <img src="./icons/trash.png"class="fas fa-trash">'+'</li>')
        $(this).val('')
    });
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
    });
    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('checked');
    });
})
