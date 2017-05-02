// dropdown toggle menu for smaller screens

function toggleMenu(x){
    var panel = document.getElementById(x), navarrow = document.getElementById("dropdown"), maxH="auto";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
        
    } else {
        panel.style.height = maxH;
        
    }
}

$(function() {
  var currentIndex = 0,
      itemCount    = $('.item').length;

  /* add the active class to the first item to hide all the others */
  $('.item:eq(' + currentIndex + ')').addClass('active');

  $('.carousel-nav').on('click', function() {
    var $active  = $('.item.active'),
        isNext   = $(this).hasClass('next');
    currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

    /* go back to the last item if we hit -1 */
    if (currentIndex === -1) {
      currentIndex = itemCount - 1;
    }

    var $next = $('.item:eq(' + currentIndex + ')');
    $active.addClass(isNext ? 'next-out' : 'prev-out');
    $next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
    setTimeout(function() { 
      $active.removeClass('active next-out prev-out');
      $next.removeClass('next-in prev-in');
    }, 500);
    return false;
  });
});