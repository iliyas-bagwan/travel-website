
$(document).ready(function () {
  $("#search-btn").click(function () {
    $(this).toggleClass("fa-times");
  $(".search-bar-container").toggleClass("active")

  })

  $(window).scroll(function(){
    $("#search-btn").removeClass("fa-times")
    $(".search-bar-container").removeClass("active");
    $("#menu-bar").removeClass("fa-times");
    $(".navbar").removeClass("active");
    $(".login-form-container").removeClass("active");

  })


  $("#login-btn").click(function(){
    $(".login-form-container").addClass("active")
  })

  $("#form-close").click(function () {
    $(".login-form-container").removeClass("active");
  });

  $("#menu-bar").click(function(){
    $(this).toggleClass("fa-times")
    $(".navbar").toggleClass("active")
  });


  
  $(".vid-btn").each(function(){
    $(this).click(function(){
      $(".controls .active").removeClass("active")
      $(this).addClass("active");
      let src = $(this).attr("data-src")
      $("#video-slider").attr("src", src);
    })
  });


})

