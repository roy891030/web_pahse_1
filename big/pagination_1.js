// $(document).ready(function(){
//     $("button").click(function(){
//       $("#test").hide();
//     });
//   });

window.onload = function(){
  document.getElementById('title').onclick = reload;
  document.getElementById('place').onmouseover = hoverPlace;
  document.getElementById('kw2Button').onclick = clickKw2;
  document.getElementById('p2Button').onclick = clickP2;
  document.getElementById('dingButton').onclick = clickDing;
}
function reload(){
  window.location.href='../../web_pahse_1/web travel blog/home.html';
}
function hoverPlace(){
  var place = document.getElementById('place');
  var section = document.getElementById('section');
  place.addEventListener('mouseover', function(){
      section.style.display = 'block';
  });
  section.addEventListener('mouseover', function(){
      section.style.display = 'block';
  });
  section.addEventListener('mouseout', function(){
      section.style.display = 'none';
  });
}


$(document).ready(function () {
  $("#para_2_1").hide();
  $("#para_2_2").hide();
  $("#para_2_3").hide();
})
$(document).ready(function () {

  //  點選右方導覽列時會到指定圖片
  var num_li = $(".nav li").length;

  for (var i = 0; i <= num_li; i++) {
    $(".nav li:eq(" + i + ")").click({
      id: i
    }, function (e) {
      $(".nav li").css("background-color", "#FFF");
      var page = e.data.id + 1;
      $("html,body").animate({
        "scrollTop": $("#rectangle" + page).offset().top
      })
      $(this).css("background-color", "#43a55f");
    })
  }

  //  一進入網頁時，將導覽列垂直置中
  center();

  //  縮放網頁時，重新將導覽列置中
  $(window).resize(function () {
    center();
  })

  //  計算導覽列垂直置中的高度
  function center() {
    var pos = $(window).height() / 2 - $(".nav").height() / 2;
    $(".nav").css("top", pos);
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $("#big").offset().top && $(window).scrollTop() < $("#pic").offset().top) {
      $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav li:eq(0)").css("background-color", "#46dd46")
    } else if ($(window).scrollTop() >= $("#pic").offset().top && $(window).scrollTop() < $("#para2").offset().top) {
      $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav li:eq(1)").css("background-color", "#46dd46")
    } else if ($(window).scrollTop() >= $("#para2").offset().top && $(window).scrollTop() < $("#para3").offset().top) {
      $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav li:eq(2)").css("background-color", "#46dd46")
    } else if ($(window).scrollTop() >= $("#para3").offset().top && $(window).scrollTop() < $("#third").offset().top) {
      $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav li:eq(3)").css("background-color", "#46dd46")
    } else if ($(window).scrollTop() >= $("#third").offset().top) {
      $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
      $(".nav li:eq(4)").css("background-color", "#46dd46")
    }
  })
})



$(document).ready(function () {
  $("#para2_1").hide();
  $("#img1").hover(function () {
    $(this).animate({
      opacity: '0.3',
    });
    $("#para2_1").show();
  },
    function () {
      $(this).animate({
        opacity: '1',
      });
      $("#para2_1").hide();

    });
});

$(document).ready(function () {
  $("#para2_3").hide();
  $("#img2").hover(function () {
    $(this).animate({
      opacity: '0.3',
    });
    $("#para2_3").show();
  },
    function () {
      $(this).animate({
        opacity: '1',
      });
      $("#para2_3").hide();

    });
});

$(document).ready(function () {
  $("#para2_2").hide();
  $("#img3").hover(function () {
    $(this).animate({
      opacity: '0.3',
    });
    $("#para2_2").show();
  },
    function () {
      $(this).animate({
        opacity: '1',
      });
      $("#para2_2").hide();

    });
});