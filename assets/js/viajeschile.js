// Script para el smooth scroll
$(document).ready(function(){
  $("a").click(function(event){
    event.preventDefault();
    var gato=this.hash;

    $("html").animate(
      {
        scrollTop:$(gato).offset().top - 55,
      },
      800
    );

  });
// script para el Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
// script para el popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  });

});
