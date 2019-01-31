var num = 1;
$(window).scroll(function () { 
  num = $(window).scrollTop() / 10;

  // if(parseInt(num)>10){
  // 	$('nav ul li a').css("opacity","0.01");
  // 	$('nav ul li a:hover').css("opacity","1");
  // }
  //  else if(parseInt(num)<10){
  // 	$('nav ul li a').css("opacity","0.3");
  // }
  if(parseInt(num)<50){
  	$('#transitimg').css("background-image","url('transit/t3-ConvertImage.jpg')");
  	$('#transitimg').css("box-shadow","0px 3px 30px #123456");	
  	$('#transitimg').css("border","0.3px solid white");	
  }
  else{
  	$('#transitimg').css("background-image","url('transit/t2-ConvertImage.jpg')");
  	$('#transitimg').css("box-shadow","0px 3px 30px aquamarine");
  	$('#transitimg').css("border","0.3px solid white");			
  }
    
});