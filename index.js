$(init);

function init(){
	var mySwiper1 = new Swiper('#scroll-one', {
        direction: 'horizontal',
        loop: true,
        pagination: '#pagination1'
    });

    var mySwiper2 = new Swiper('#scroll-two', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
	getGeo();
}
function getGeo(){
	//alert(returnCitySN.cname );
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			console.log("Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude);
  			//获得城市信息
		});
		
	}else{
		console.log("不支持");
	}
}