function addBlock() {
  var input = $('.input textarea').val();
  var target = $('.block-container');
  var now = new Date();
  var newblock = '<div class="message" style="display: none;"><img width="64" height="64" src="avatar.png"><div class="msg-content"><div class="msg-text">'+input+'</div><div class="msg-footer">'+now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate()+' <embed id="plane" width="10" height="10" src="like.svg"></embed> 0</div></div></div>';
  target.prepend(newblock);
  newblock = $('.block-container :first-child');
  //newblock.css('background', 'blue');
  newblock.show(1000);
}

function collapse() {
  var target = $('#window-2 .window-body');
  target.slideToggle(300);
  if ($('#window-2 .btn-x').attr('value') === "-") {
    $('#window-2 .btn-x').attr('value', '+')
  }
  else {
    $('#window-2 .btn-x').attr('value', '-');
  }
}

var ias = $.ias({
  container: ".block-container",
  item: ".message",
  pagination: "#pagination",
  next: "a.next"
});

ias.extension(new IASSpinnerExtension());            // shows a spinner (a.k.a. loader)
ias.extension(new IASTriggerExtension({ offset: 3 })); // shows a trigger after page 3
ias.extension(new IASNoneLeftExtension({
  text: 'There are no more pages left to load.'      // override text when no pages left
}));

$(document).on('ready', function () {
  $(".slc").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});