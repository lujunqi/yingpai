// JavaScript Document
$(init);
function init(){
	$('.waterfall')
        .data('bootstrap-waterfall-template', $('#waterfall-template').html())
        .waterfall();
}