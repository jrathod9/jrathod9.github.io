var num = 1;
var navoff = 1;
$(window).scroll(function () { 
  navoff = $('nav').offset();
  console.log(navoff);
  num = $(window).scrollTop() / 10;

  if(parseInt(num)<10){
      $('nav').css("margin-top","0px ");
  }
  else{
    $('nav').on('mouseover',function(){
      $('nav').css("margin-top","0px");
    });
      $('nav').css("margin-top","-96px");

  }
  if(parseInt(num)<60){
    $('#transitimg').css("background-image","url('transit/t3-ConvertImage.jpg')");
    $('#transitimg').css("box-shadow","0px 3px 10px aquamarine"); 
    // $('#transitimg').css("border","0.3px solid white");  
  }
  else{
    $('#transitimg').css("background-image","url('transit/t2-ConvertImage.jpg')");
    $('#transitimg').css("box-shadow","0px 3px 50px aquamarine");
    // $('#transitimg').css("border","0.3px solid white");      
  }
});