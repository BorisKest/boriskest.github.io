$(function(){
    $('.demo .hide').hide();
        $a = $('label');
        $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp(200);
        $(this).next().slideToggle(300);
    });
});