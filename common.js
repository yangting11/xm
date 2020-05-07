// $(function(){
// 	alert(1)
// 	$('#headerImg').css('background','url('./images/banner1.png') center center no-repeat')
// })
var interBj = [ './images/banner1.png','./images/banner2.png','./images/banner3.png'];
var inter;
var defaultBj = 0;
var click = false;
$(document).ready(function(){
	interFunc()
	$('#headerImg').mouseenter(function(){
		clearInterval(inter)
	})
	$('#headerImg').mouseleave(function(){
		interFunc()
	})
	
	//滚动条滚动到指定位置触发下面事件
	var getDiv_md = $("#aboutus");
	var offSet = getDiv_md.offset().top;
	var getDiv_md1 = $("#product");
	var offSet1 = getDiv_md1.offset().top;
	var getDiv_md2 = $("#business");
	var offSet2 = getDiv_md2.offset().top;
	var getDiv_md3 = $("#success");
	var offSet3 = getDiv_md3.offset().top;
	var getDiv_md4 = $("#headerImg");
	var offSet4 = getDiv_md4.offset().top;
	$(window).scroll(function(){
		if(click){
			click = false
			return
		}
		if ($(window).scrollTop() > offSet4){
			$(".navli").removeClass('active');
			$(".navli").eq(0).addClass('active')
		}
		if ($(window).scrollTop() > offSet){
			$(".navli").removeClass('active');
			$(".navli").eq(1).addClass('active')
		}
		if ($(window).scrollTop() > offSet1){
			$(".navli").removeClass('active');
			$(".navli").eq(2).addClass('active')
		}
		if ($(window).scrollTop() > offSet2){
			$(".navli").removeClass('active');
			$(".navli").eq(3).addClass('active')
		}
		if ($(window).scrollTop() > offSet3){
			$(".navli").removeClass('active');
			$(".navli").eq(4).addClass('active')
		}
	})
	$(".navli").on('click',function(){
		click = true;
		$(".navli").removeClass('active');
		$(this).addClass('active')
	})
})

function interFunc(){
	inter = setInterval(function(){
		if(defaultBj<2){
			defaultBj ++ ;
		}else{
			defaultBj = 0 ;
		}
		$('#headerImg').attr("src",interBj[defaultBj])
	},3000)
}