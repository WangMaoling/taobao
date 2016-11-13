// 最上面导航
$(".nav1-right span").mouseover(function(){
	if($(this).has('ul').length){
		$(this).css({background:'white'});
		$(this).children('ul').show();
	}
});
$(".nav1-right span").mouseout(function(){
	
	$(this).children('ul').hide();
	$(this).css({background:'#F1F1F1'});
});
// *********************
// 手机淘宝
$(".nav2 .nav2Ma a").click(function(){
	$('.nav2 .nav2Ma').hide();
});

// ********复制左边list列

$('#lunboList1').clone(true).appendTo('.lunboList dl dd:odd');
$('.lunboList dl dd:odd').hover(
	function(){
		$(this).css({background:'#F94B16'});
		$(this).children('img').css({opacity:'1'});
		$(this).children('#lunboList1').show();
	},function(){
		$(this).css({background:'#FF6537'});
		$(this).children('img').css({opacity:'0.6'});
		$(this).children('#lunboList1').hide();
		// $(this).children('.lunboList1').detach();
});

$('#lunboList2').clone(true).appendTo('.lunboList dl dd:even');
$('.lunboList dl dd:even').hover(
	function(){
		$(this).css({background:'#F94B16'});
		$(this).children('img').css({opacity:'1'});
		$(this).children('#lunboList2').show();
	},function(){
		$(this).css({background:'#FF6537'});
		$(this).children('img').css({opacity:'0.6'});
		$(this).children('#lunboList2').hide();
		// $(this).children('.lunboList1').detach();
});

// ******** 登录下面的二维码
$('.lunboLogin4Ma').clone(true).appendTo('.lunboLogin4 ul li');
$('.lunboLogin4 ul li').hover(
	function(){
		// $(this).children().siblings().stop();
		$(this).children('.lunboLogin4Ma').stop().slideDown(200);
	},function(){
		$(this).children('.lunboLogin4Ma').siblings().stop()
		$(this).children('.lunboLogin4Ma').stop().slideUp(100);
		// $(this).children('.lunboLogin4Ma').stop()
	});


// ******** 时尚爆料王二维码
$('.floor221LogoMa').clone(true).appendTo('.floor221Logo');
$('.floor221LogoMa1').hover(
	function(){
		$(this).parent().find('.floor221LogoMa').slideDown();
	},function(){	
		$(this).parent().find('.floor221LogoMa').slideUp();
});


// ******** 热卖单品1
$('.reSaleRed1').clone(true).appendTo('.reSale31 .reSale31Left');
$('.reSale31Left').hover(
	function(){
		$(this).css({border:'1px solid red'});
		$(this).parent().find('.reSaleRed1').show();
	},function(){	
		$(this).css({border:'1px solid #F1F1F1'});
		$(this).parent().find('.reSaleRed1').hide();
});

// ******** 热卖单品2
$('.reSaleRed2').clone(true).appendTo('.reSale31Right1>div');
$('.reSale31Right1').hover(
	function(){
		$(this).parent().find('.reSaleRed2').show();
	},function(){	
		$(this).parent().find('.reSaleRed2').hide();
});

// ******** 热卖单品3
$('.reSaleRed3').clone(true).appendTo('.reSale31Right2>div');
$('.reSale31Right2').hover(
	function(){	
		$(this).parent().find('.reSaleRed3').show();
	},function(){	
		$(this).parent().find('.reSaleRed3').hide();
});


// ******** 猜你喜欢
$('.love2').clone(true).appendTo('.love');
$('.love2').clone(true).appendTo('.love');
$('.love2').clone(true).appendTo('.love');
$('.love2:first').clone(true).appendTo('.love');
$('.love2:first').clone(true).appendTo('.love');

$('.love2').hover(
	function(){	
		$(this).children('.love2Red').show();
		$(this).css({border:"1px solid red"});
		$(this).children('img').css({opacity:"0.7"});

	},function(){	
		$(this).children('.love2Red').hide();
		$(this).css({border:"1px solid #F1F1F1"});
		$(this).children('img').css({opacity:"1"});
});

$(document).ready(function(){
    var $iBox = $('.imgBox'),
        $iNum = $('.imgNum'),  //缓存优化
        indexImg = 1,          //初始下标
        totalImg = 5,          //图片总数量
        imgSize = 520,         //图片尺寸 宽度
        moveTime = 1100,        //切换动画时间
        setTime = 2500,        //中间暂停时间
        clc = null;

    function moveImg(){
        if(indexImg != totalImg){
            $iBox.animate({
                left: -(indexImg*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        }
        else{
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    }
    $iNum.hover(function(){
        $iBox.stop();                    //结束当前动画
        clearInterval(clc);              //暂停循环
        $iNum.removeClass('mark-color');
        $(this).addClass('mark-color');
        indexImg = $(this).index();
        $iBox.animate({
            left: -(indexImg*imgSize) + 'px'
        }, 500);
    },function(){
        clc = setInterval(moveImg, setTime);
    });

    //鼠标放上停止动画
    $iBox.hover(function(){
        $('.control').fadeIn(200);
        clearInterval(clc);              //暂停循环
    },function(){
        $('.control').hide();
        clc = setInterval(moveImg, setTime);
    });
    //显示左右
    $('.control').hover(function(){
        clearInterval(clc);
        $('.control').show();
//        return false;允许传播
    });
    //向右边前进
    $('.to-right').click(function(){
        if(indexImg != totalImg){
            $iBox.animate({
                left: -(indexImg*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        }
        else{
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    });
    //向左边前进
    $('.to-left').click(function(){
        indexImg--;
        if(indexImg != 0){
            $iBox.animate({
                left: -((indexImg - 1)*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq((indexImg - 1))
                .addClass('mark-color');
        }
        else{
            indexImg = totalImg;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: -((indexImg - 1)*imgSize) + 'px'
            }, moveTime);
        }
    });
    clc = setInterval(moveImg, setTime);
});


// 轮播2
$(document).ready(function(){
	//图片名字放数组里面
	var imgArray=['img/big01.jpg','img/big02.jpg','img/big03.jpg','img/big04.jpg','img/big05.jpg','img/big06.jpg'];
	var num =0;
	//初始化
	function fnTab()
	{	
		setInterval(function show(){
			$('.lunbo2Img').attr('src',imgArray[num]); 
		},200);
	}
	//控制右边按钮
	$('.toRight').click(function()
	{
		num++;
		if(num==imgArray.length){
			num=0;
		}
		fnTab();
	});
	//控制左边按钮
	$('.toLeft').click(function()
	{
		// clearInterval(timer);
		num--;
		if(num==-1){
			num=imgArray.length-1;
		}
		fnTab();
	});
	//自动切换,多次定时
	timer3=setInterval(function()
	{
		num++;
		if(num==imgArray.length){
			num=0;
		}
		fnTab();
	},3000);
});

// 固定导航
$(window).scroll( function(){
	var top=$(window).scrollTop();
	top>=140? $(".gudingNav").slideDown(200): $(".gudingNav").slideUp(200);

// 获得banner的top
	var topBanner=$('.banner').offset().top;
	top>=434? $(".banner").css({position:'fixed',right:'25px',top:'50px'}): $(".banner").css({position:'absolute',
	top:0,right:'-60px'});
	top>=700? $('.banner7').show():$('.banner7').hide();
});
// 注释部分简化   锚点
$('.banner dl dd').click(function(){

	var i=$(this).index()+1;
	var speed=$(window).scrollTop()/2;
i==7? $('body,html').animate({ scrollTop:0},speed):
$('body,html').animate({ scrollTop:$('#t'+i).offset().top-50},speed);
});


