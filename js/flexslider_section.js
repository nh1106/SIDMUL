
// 섹션 슬라이더 

$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide"
      });
})

// 스크롤 애니메이션 

$(window).scroll(function(){
  if (window.scrollY > 1200 ) {
    $('.fl').addClass('show');
  }
});




// window.addEventListener('scroll', function(){
//   console.log(window.scrollY)
// });

