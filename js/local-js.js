function addBlock() {
  var input = $('.input textarea').val();
  var target = $('.block-container');
  var now = new Date();
  var newblock = '<div class="message" style="display: none;"><img width="64" height="64" src="asset/avatar.png"><div class="msg-content"><div class="msg-text">' + input + '</div><div class="msg-footer">' + now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' <embed id="plane" width="10" height="10" src="asset/like.svg"></embed> 0</div></div></div>';
  target.prepend(newblock);
  newblock = $('.block-container :first-child');
  //newblock.css('background', 'blue');
  newblock.show(1000);
}

function fade() {
  if ($('#window-1 .window-body').css('display') === 'none') {
    $('#window-1 .window-body').fadeIn(400);
    $('#window-1 canvas').delay(400).fadeIn(400);
    $('#window-1 img').delay(800).fadeIn(400);
    $('#txt-1').delay(1200).fadeIn(400);
    $('#txt-2').delay(1600).fadeIn(400);
    $('#txt-3').delay(2000).fadeIn(400);
  } else {
    $('#txt-3').fadeOut(400);
    $('#txt-2').delay(400).fadeOut(400);
    $('#txt-1').delay(800).fadeOut(400);
    $('#window-1 img').delay(1200).fadeOut(400);
    $('#window-1 canvas').delay(1600).fadeOut(400);
    $('#window-1 .window-body').delay(2000).fadeOut(400);
  }
}

function collapse() {
  var target = $('#window-2 .window-body');
  target.slideToggle(300);
  if ($('#window-2 .btn-x').attr('value') === '-') {
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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(49, 26, 5, 30);
ctx.translate(51.5, 13);
var radius = 13;
drawCircle(radius);
ctx.translate(0, 94.5);
var radius = 51.5;
drawCircle(radius);

function drawCircle(r) {
  ctx.arc(0, 0, r, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}

$(document).on('ready', function () {
  $(".slc").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});