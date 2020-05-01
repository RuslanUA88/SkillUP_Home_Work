window.addEventListener('scroll', function() {
  let a=document.getElementById("exampleModal");
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled > document.documentElement.clientWidth / 2){
    $('#exampleModal').modal('show')}
  });
