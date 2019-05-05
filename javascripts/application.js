$(function(){
  externalLinks();
  anchorSlide();
  fetchFlickr();
  if ($('.projects_eleven-2011').length > 0) projectBkFade();
  if ($('.with_fade').length > 0) imgFade();
});

function externalLinks(){
  $('.holder').find('a[href^="http"]').each(function(link){
    var link=$(this)
    link.attr({target:"_blank", title:"Javascript will open this external link in a new window."});
  });
}

function fetchFlickr(){
  // Fetch from Flickr
  //
  $.ajax({
    url: 'http://api.flickr.com/services/rest/',
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    data: {
      method      : 'flickr.people.getPublicPhotos',
      api_key     : 'c777df11ca1f5c20648d0db572d912be',
      user_id     : '30071740@N05',
      extras      : 'url_s',
      per_page    : 3,
      format      : 'json'
    }
  }).success(function(response) {
    var photos = response.photos.photo;
    for (var i in photos) { var photo = photos[i];
      var img = $('<img />').
        attr('src', photo.url_s);
      $('<a />').
      attr('rel', 'external').
      attr('target', '_blank').
      attr('href', 'http://www.flickr.com/photos/withassociates/' + photo.id + '/' ).
      attr('class', 'flickr_'+i).
      append(img).
      appendTo('#flickr');
    }
  });
}

var fadeTime = 30000;

function backgroundFade() {
  setTimeout(function() {
    $('.fadeBk').fadeTo(fadeTime,0.7);
    $('.fadeText').fadeTo(fadeTime,0.7);
  }, 5000);
}

function imgFade(){
  var img = $('<div />').
  attr('class', 'fadeImg').
  hide().
  appendTo($('.with_fade'));
  setTimeout(function() {
    $('.fadeImg').fadeTo(fadeTime,0.6);
  }, 5000);
}


function projectBkFade(){
  var bk = $('<div />').
  attr('class', 'fadeBk').
  css({'height':$('.holder').height()}).
  hide().
  appendTo($('body'));
  var txt = $('<h1>Eleven/2011</h1>').
  attr('class', 'fadeText').
  hide().
  appendTo($('.header_image'));
  backgroundFade();
}

function anchorSlide(){
  $('nav').find('a[href*="\\#"]').click(function(){
    var link=$(this).attr('href')
    $('html,body').animate({scrollTop: $(link).offset().top},'slow');
    //document.location.hash = link;
    return false;
  });
}