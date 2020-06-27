// $(function(){
// 	alert(1)
// 	$('#headerImg').css('background','url('./images/banner1.png') center center no-repeat')
// })
var interBj = [ './images/banner5.png','./images/banner4.png','./images/banner2.png','./images/banner1.jpg','./images/banner4.png'];
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
	$("#leftArrow").on('click',function(){
		if(defaultBj==0){
			defaultBj = interBj.length - 1
		}else{
			defaultBj -- ;
		}
		$('#headerImg').attr("src",interBj[defaultBj])
	})
	$("#rightArrow").on('click',function(){
		if(defaultBj==interBj.length - 1){
			defaultBj = 0;
		}else{
			defaultBj ++ ;
		}
		$('#headerImg').attr("src",interBj[defaultBj])
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
	$.ajax({
		method:'get',
		url:'./news.json',
		dataType: "json",
		success:function(dataRes){
			let data = dataRes.data
			for(let i in data){
				$("#newsList").append("<li><div class='newsTitle'><a href='/newsPage.html?id="+i+"'>"+data[i].title+"</a></div><div class='newsTime'>"+ data[i].time +"</div></li>")
			}
		},
		error:function(err){
		}
	})
})

function interFunc(){
	inter = setInterval(function(){
		if(defaultBj<4){
			defaultBj ++ ;
		}else{
			defaultBj = 0 ;
		}
		$('#headerImg').attr("src",interBj[defaultBj])
	},3000)
}

function openPage(page){
	window.open(page)
}