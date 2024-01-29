
$(document).ready(function(){
  
  $(".header__icon--search.modal__toggle").click(function(){
    $(".header-wrapper header.header").addClass("active_search");
    $("body.gradient").addClass("gl-search-open");
  });
  
  $(".search-modal__close-button.modal__close-button").click(function(){
    $(".header-wrapper header.header").removeClass("active_search");
    $("body.gradient").removeClass("gl-search-open");
  });

  $(".header__icon--menu").click(function(){
    $(".section-header").toggleClass("menu-active");
  });
  
});

