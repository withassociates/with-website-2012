Whoosh = function() {
  $(initialize);

  function initialize() {
    scrollTo({ el: window.location.hash, animate: false });
    $('nav a').on('click', whenNavClicked);
  }

  function scrollTo(options) {
    options = $.extend({ animate: true }, options);

    var target     = $(options.el || '#how-we-scroll'),
        navItem    = $('nav a[href="#' + target.attr('id') + '"]'),
        scrollTop  = target.offset().top - (($(window).height() - target.height()) / 2),
        scrollLeft = target.offset().left - (($(window).width() - target.width()) / 2);

    $('nav a').removeClass('active');
    navItem.addClass('active');

    if (options.animate) {
      $('body').stop().animate({
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      }, 'slow');
    } else {
      window.scrollTo(scrollLeft, scrollTop);
    }
  }

  function whenNavClicked(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    scrollTo({ el: $(this).attr('href') });
  }

};

