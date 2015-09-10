$(function (){
  // Tracking
  var url = location.pathname;
  // remove any site root from url
  if(url.match(/^http/))
    url = url.substring($('body').data('locale-root').length, url.length);
  // trim any trailing /
  url = url.replace(/\/*$/, '');
  $.ajax({url : '/_tracking',
          type : 'POST',
          data : {url:url, type:'page'},
          timeout : 3000 });
  $('a.resource-url-analytics').click(function (e){
    var url = $(e.target).closest('a').attr('href');
    if(url.match(/^http/))
      url = url.replace(/https?:\/\/.*?\//, '/');
    $.ajax({url : '/_tracking',
            data : {url:url, type:'resource'},
            type : 'POST',
            complete : function () {location.href = url;},
            timeout : 3000});
    e.preventDefault();
  });
});
