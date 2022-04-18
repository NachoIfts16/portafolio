//BUTTON TO SKILLS
$(document).ready(function(){
  $('body').on('click', '#myBtn', function(){
    $("html, body").animate({ scrollTop: $('#skills').offset().top}, 800);
    return false;
    })
});

//MIS SERVICIOS SHOW CONTENT
$(document).ready(function(){
    $('body').on('click', '.fa-arrow-left', function(){
      $(this).removeClass('fa-arrow-left').addClass('fa-arrow-down');
      $(this).closest('.content-items').find('.item-contenido').show(800);
    });
    $('body').on('click', '.fa-arrow-down', function(){
      $(this).removeClass('fa-arrow-down').addClass('fa-arrow-left');
      $(this).closest('.content-items').find('.item-contenido').hide(800);
    });
  });