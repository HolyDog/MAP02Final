$(document).ready(function () {
  const Top = $("#Top");

  Top.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

$(document).ready(function () {
  const Agent = $("#Agent");

  Agent.click(function () {
    $("html, body").animate({ scrollTop: $("#AgentInfo").offset().top }, 800);
  });
});

$(document).ready(function () {
  $("#Duelist").hover(
    function () {
      $("#AgentInfo").css("background-image", "url('Img/Background_D.png')");

      $("#D").css("opacity", "1");
      $("#Initiator").css("opacity", "0.2");
      $("#Controller").css("opacity", "0.2");
      $("#Sentinel").css("opacity", "0.2");
    },
    function () {
      $("#D").css("opacity", "0");
      $("#Initiator").css("opacity", "1");
      $("#Controller").css("opacity", "1");
      $("#Sentinel").css("opacity", "1");
      $("#AgentInfo").css(
        "background-image",
        "url('Img/Background_Defalt.png')"
      );
    }
  );
});

$(document).ready(function () {
  $("#Initiator").hover(
    function () {
      $("#AgentInfo").css("background-image", "url('Img/Background_I.png')");
      $("#I").css("opacity", "1");
      $("#Duelist").css("opacity", "0.2");
      $("#Controller").css("opacity", "0.2");
      $("#Sentinel").css("opacity", "0.2");
    },
    function () {
      $("#I").css("opacity", "0");
      $("#Duelist").css("opacity", "1");
      $("#Controller").css("opacity", "1");
      $("#Sentinel").css("opacity", "1");
      $("#AgentInfo").css(
        "background-image",
        "url('Img/Background_Defalt.png')"
      );
    }
  );
});

$(document).ready(function () {
  $("#Controller").hover(
    function () {
      $("#AgentInfo").css("background-image", "url('Img/Background_C.png')");
      $("#C").css("opacity", "1");
      $("#Duelist").css("opacity", "0.2");
      $("#Initiator").css("opacity", "0.2");
      $("#Sentinel").css("opacity", "0.2");
    },
    function () {
      $("#C").css("opacity", "0");
      $("#Duelist").css("opacity", "1");
      $("#Initiator").css("opacity", "1");
      $("#Sentinel").css("opacity", "1");
      $("#AgentInfo").css(
        "background-image",
        "url('Img/Background_Defalt.png')"
      );
    }
  );
});

$(document).ready(function () {
  $("#Sentinel").hover(
    function () {
      $("#AgentInfo").css("background-image", "url('Img/Background_S.png')");
      $("#S").css("opacity", "1");
      $("#Duelist").css("opacity", "0.2");
      $("#Initiator").css("opacity", "0.2");
      $("#Controller").css("opacity", "0.2");
    },
    function () {
      $("#S").css("opacity", "0");
      $("#Duelist").css("opacity", "1");
      $("#Initiator").css("opacity", "1");
      $("#Controller").css("opacity", "1");
      $("#AgentInfo").css(
        "background-image",
        "url('Img/Background_Defalt.png')"
      );
    }
  );
});

$(document).ready(function () {
  const containerWidth = 1920; // 고정된 가로 크기
  const containerHeight = 900; // 고정된 세로 크기

  for (let i = 0; i < 100; i++) {
    // 랜덤 위치 계산
    const randomX = Math.random() * (containerWidth - 50); // 50은 사각형 크기
    const randomY = Math.random() * (containerHeight - 50);

    // 사각형 생성
    const square = $('<div class="square"></div>');

    // 스타일 적용
    square.css({
      top: randomY + "px",
      left: randomX + "px",
    });

    // 컨테이너에 추가
    $("#Valorant").append(square);
  }
});
