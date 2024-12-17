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
  const Agent00 = $("#Agent00");
  Agent00.click(function () {
    $("html, body").animate({ scrollTop: $("#AgentInfo").offset().top }, 800);
  });
});

$(document).ready(function () {
  $("#Valorant_Info_Background").hover(
    function () {
      $("#Valorant_Info").stop().animate({ opacity: 1 }, 150);
    },
    function () {
      $("#Valorant_Info").stop().animate({ opacity: 0 }, 400);
    }
  );
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

//Initiator page setting

//소바
$(document).ready(function () {
  $("#sova_Skill").hover(
    function () {
      $("#I_SOVA").css(
        "background-image",
        "url('Img/I_Image/I_Agent/SOVA.png')"
      );
      $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.15s ease",
      });
    },
    function () {
      $("#I_SOVA").css(
        "background-image",
        "url('Img/I_Image/I_Agent_Shadow/SOVA_S.png')"
      );
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.15s ease",
      });
    }
  );
});
$("#sova_Skill").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#EX").offset().top,
    },
    400
  );
  $("#I_Background").css({
    "background-image": "url('Img/I_Image/I_Agent_BackGround/SOVA_B.png')",
  });
  $("#I_EX_Image").css({
    "background-image": "url('Img/I_Image/I_AgentL/SOVA.png')",
  });
  $("#I_EX_AgentT").css({
    "background-image": "url('Img/I_Image/EX_Agent.png')",
  });
  $("#I_EX_AgentN").text("SOVA");
  $("#I_EX_Agent").html(
    " &quot;어디로 도망가든, 내가 찾아내겠어. &quot;<br>-<br>겨울이 끝없이 이어지는 러시아 툰드라 지대에서 온 소바는 적들을 추적하고 발견하는 능력이 뛰어나며 정밀하면서도 무자비하게 적을 섬멸합니다. 직접 제작한 활과 뛰어난 정찰 스킬은 숨어 있는 적도 놓치지 않습니다."
  );
  $("#I_Divide_Area").css({ "background-color": "#FF4646" });
  $("#0").css({
    "background-image": "url('Img/I_Image/I_Skill/SOVA/0.png')",
    opacity: "0.4",
  });
  $("#1").css({
    "background-image": "url('Img/I_Image/I_Skill/SOVA/1.png')",
    opacity: "0.4",
  });
  $("#2").css({
    "background-image": "url('Img/I_Image/I_Skill/SOVA/2.png')",
    opacity: "0.4",
  });
  $("#3").css({
    "background-image": "url('Img/I_Image/I_Skill/SOVA/3.png')",
    opacity: "0.4",
  });
  $("#I_Skill_BackGround").css({
    "background-image": "url('Img/I_Image/I_Skill/SkillT.png')",
  });

  $("#I_Divide_Skill0,#I_Divide_Skill1,#I_Divide_Skill2").css({
    "background-color": "#ffffff",
    opacity: "0.2",
  });
});

//스카이
$(document).ready(function () {
  $("#sky_Skill").hover(
    function () {
      $("#I_SKY").css("background-image", "url('Img/I_Image/I_Agent/SKY.png')");
      $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.15s ease",
      });
    },
    function () {
      $("#I_SKY").css(
        "background-image",
        "url('Img/I_Image/I_Agent_Shadow/SKY_S.png')"
      );
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.15s ease",
      });
    }
  );
});
$("#sky_Skill").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#EX").offset().top,
    },
    400
  );
  $("#I_Background").css({
    "background-image": "url('Img/I_Image/I_Agent_BackGround/SKY_B.png')",
  });
  $("#I_EX_Image").css({
    "background-image": "url('Img/I_Image/I_AgentL/SKY.png')",
  });

  $("#I_EX_AgentT").css({
    "background-image": "url('Img/I_Image/EX_Agent.png')",
  });
  $("#I_EX_AgentN").text("SKY");
  $("#I_EX_Agent").html(
    " &quot;좋아, 어디로 가면 돼? &quot;<br>-<br>호주 출신인 스카이는 야수 떼와 함께 적대적인 영역에서 길을 개척합니다. 자신의 창조물로 적을 방해하고, 치유력으로 아군을 회복시키며 든든하게 팀을 지원합니다."
  );

  $("#I_Divide_Area").css({ "background-color": "#FF4646" });
  $("#0").css({
    "background-image": "url('Img/I_Image/I_Skill/SKY/0.png')",
    opacity: "0.4",
  });
  $("#1").css({
    "background-image": "url('Img/I_Image/I_Skill/SKY/1.png')",
    opacity: "0.4",
  });
  $("#2").css({
    "background-image": "url('Img/I_Image/I_Skill/SKY/2.png')",
    opacity: "0.4",
  });
  $("#3").css({
    "background-image": "url('Img/I_Image/I_Skill/SKY/3.png')",
    opacity: "0.4",
  });
  $("#I_Skill_BackGround").css({
    "background-image": "url('Img/I_Image/I_Skill/SkillT.png')",
  });

  $("#I_Divide_Skill0,#I_Divide_Skill1,#I_Divide_Skill2").css({
    "background-color": "#ffffff",
    opacity: "0.2",
  });
});
//브리치
$(document).ready(function () {
  $("#breach_Skill").hover(
    function () {
      $("#I_BREACH").css(
        "background-image",
        "url('Img/I_Image/I_Agent/BREACH.png')"
      );
      $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.15s ease",
      });
    },
    function () {
      $("#I_BREACH").css(
        "background-image",
        "url('Img/I_Image/I_Agent_Shadow/BREACH_S.png')"
      );
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.15s ease",
      });
    }
  );
});
$("#breach_Skill").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#EX").offset().top,
    },
    400
  );
  $("#I_Background").css({
    "background-image": "url('Img/I_Image/I_Agent_BackGround/BREACH_B.png')",
  });
  $("#I_EX_Image").css({
    "background-image": "url('Img/I_Image/I_AgentL/BREACH.png')",
  });
  $("#I_EX_AgentT").css({
    "background-image": "url('Img/I_Image/EX_Agent.png')",
  });
  $("#I_EX_AgentN").text("BREACH");
  $("#I_EX_Agent").html(
    " &quot;날 막는다고? 그게 될까? &quot;<br>-<br>스웨덴 출신의 생체병기 브리치는 강력한 역학적 폭발을 이용해 적진을 돌파합니다. 브리치의 강력한 피해량과 교란술은 아군이 굳이 '공정한' 전투를 할 필요가 없게 만들죠."
  );

  $("#I_Divide_Area").css({ "background-color": "#FF4646" });
  $("#0").css({
    "background-image": "url('Img/I_Image/I_Skill/BREACH/0.png')",
    opacity: "0.4",
  });
  $("#1").css({
    "background-image": "url('Img/I_Image/I_Skill/BREACH/1.png')",
    opacity: "0.4",
  });
  $("#2").css({
    "background-image": "url('Img/I_Image/I_Skill/BREACH/2.png')",
    opacity: "0.4",
  });
  $("#3").css({
    "background-image": "url('Img/I_Image/I_Skill/BREACH/3.png')",
    opacity: "0.4",
  });
  $("#I_Skill_BackGround").css({
    "background-image": "url('Img/I_Image/I_Skill/SkillT.png')",
  });

  $("#I_Divide_Skill0,#I_Divide_Skill1,#I_Divide_Skill2").css({
    "background-color": "#ffffff",
    opacity: "0.2",
  });
});
//케이오
$(document).ready(function () {
  $("#kayo_Skill").hover(
    function () {
      $("#I_KAYO").css(
        "background-image",
        "url('Img/I_Image/I_Agent/KAYO.png')"
      );
      $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.15s ease",
      });
    },
    function () {
      $("#I_KAYO").css(
        "background-image",
        "url('Img/I_Image/I_Agent_Shadow/KAYO_S.png')"
      );
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.15s ease",
      });
    }
  );
});
$("#kayo_Skill").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#EX").offset().top,
    },
    400
  );
  $("#I_Background").css({
    "background-image": "url('Img/I_Image/I_Agent_BackGround/KAYO_B.png')",
  });
  $("#I_EX_Image").css({
    "background-image": "url('Img/I_Image/I_AgentL/KAYO.png')",
  });
  $("#I_EX_AgentT").css({
    "background-image": "url('Img/I_Image/EX_Agent.png')",
  });
  $("#I_EX_AgentN").text("KAY/O");
  $("#I_EX_Agent").html(
    " &quot;한 번 해보자고! &quot;<br>-<br>케이/오는 레디언트를 무력화하라는 단 하나의 목적을 위해 만들어진 전쟁 병기입니다. 자신과 아군이 유리하도록 적의 스킬을 억제하여 상대의 반격 능력을 약화시킵니다."
  );

  $("#I_Divide_Area").css({ "background-color": "#FF4646" });
  $("#0").css({
    "background-image": "url('Img/I_Image/I_Skill/KAYO/0.png')",
    opacity: "0.4",
  });
  $("#1").css({
    "background-image": "url('Img/I_Image/I_Skill/KAYO/1.png')",
    opacity: "0.4",
  });
  $("#2").css({
    "background-image": "url('Img/I_Image/I_Skill/KAYO/2.png')",
    opacity: "0.4",
  });
  $("#3").css({
    "background-image": "url('Img/I_Image/I_Skill/KAYO/3.png')",
    opacity: "0.4",
  });
  $("#I_Skill_BackGround").css({
    "background-image": "url('Img/I_Image/I_Skill/SkillT.png')",
  });

  $("#I_Divide_Skill0,#I_Divide_Skill1,#I_Divide_Skill2").css({
    "background-color": "#ffffff",
    opacity: "0.2",
  });
});
//게코
$(document).ready(function () {
  $("#gekko_Skill").hover(
    function () {
      $("#I_GEKKO").css(
        "background-image",
        "url('Img/I_Image/I_Agent/GEKKO.png')"
      );
      $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.15s ease",
      });
    },
    function () {
      $("#I_GEKKO").css(
        "background-image",
        "url('Img/I_Image/I_Agent_Shadow/GEKKO_S.png')"
      );
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.15s ease",
      });
    }
  );
});
$("#gekko_Skill").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#EX").offset().top,
    },
    400
  );
  $("#I_Background").css({
    "background-image": "url('Img/I_Image/I_Agent_BackGround/GEKKO_B.png')",
  });
  $("#I_EX_Image").css({
    "background-image": "url('Img/I_Image/I_AgentL/GEKKO.png')",
  });
  $("#I_EX_AgentT").css({
    "background-image": "url('Img/I_Image/EX_Agent.png')",
  });
  $("#I_EX_AgentN").text("GEKKO");
  $("#I_EX_Agent").html(
    " &quot;다들 각오해! 내 친구들이 왔다고.&quot;<br>-<br>로스앤젤레스 출신 게코는 무시무시한 봇 생명체들을 이끕니다. 봇들이 돌진해 적들을 분산시키면 게코가 따라가 전열을 재정비한 후 다시 공격을 개시합니다."
  );

  $("#I_Divide_Area").css({ "background-color": "#FF4646" });
  $("#0").css({
    "background-image": "url('Img/I_Image/I_Skill/GEKKO/0.png')",
    opacity: "0.4",
  });
  $("#1").css({
    "background-image": "url('Img/I_Image/I_Skill/GEKKO/1.png')",
    opacity: "0.4",
  });
  $("#2").css({
    "background-image": "url('Img/I_Image/I_Skill/GEKKO/2.png')",
    opacity: "0.4",
  });
  $("#3").css({
    "background-image": "url('Img/I_Image/I_Skill/GEKKO/3.png')",
    opacity: "0.4",
  });
  $("#I_Skill_BackGround").css({
    "background-image": "url('Img/I_Image/I_Skill/SkillT.png')",
  });

  $("#I_Divide_Skill0,#I_Divide_Skill1,#I_Divide_Skill2").css({
    "background-color": "#ffffff",
    opacity: "0.2",
  });
});
//페이드
$(document).ready(function () {
  $("#fade_Skill").hover(
    function () {
      $("#I_FADE").css(
        "background-image",
        "url('Img/I_Image/I_Agent/FADE.png')"
      );
      $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.15s ease",
      });
    },
    function () {
      $("#I_FADE").css(
        "background-image",
        "url('Img/I_Image/I_Agent_Shadow/FADE_S.png')"
      );
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.15s ease",
      });
    }
  );
});
$("#fade_Skill").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#EX").offset().top,
    },
    400
  );
  $("#I_Background").css({
    "background-image": "url('Img/I_Image/I_Agent_BackGround/FADE_B.png')",
  });
  $("#I_EX_Image").css({
    "background-image": "url('Img/I_Image/I_AgentL/FADE.png')",
  });
  $("#I_EX_AgentT").css({
    "background-image": "url('Img/I_Image/EX_Agent.png')",
  });
  $("#I_EX_AgentN").text("FADE");
  $("#I_EX_Agent").html(
    " &quot;누구나 두려운 게 있는 법이지.&quot;<br>-<br>튀르키예 출신 현상금 사냥꾼 페이드는 악몽의 힘을 이용해 적의 비밀을 캐냅니다. 공포와 하나가 되어 표적을 쫓고 마음속 가장 깊은 곳에 숨겨진 공포를 파헤친 뒤, 어둠 속에서 짓밟습니다."
  );

  $("#I_Divide_Area").css({ "background-color": "#FF4646" });
  $("#0").css({
    "background-image": "url('Img/I_Image/I_Skill/FADE/0.png')",
    opacity: "0.4",
  });
  $("#1").css({
    "background-image": "url('Img/I_Image/I_Skill/FADE/1.png')",
    opacity: "0.4",
  });
  $("#2").css({
    "background-image": "url('Img/I_Image/I_Skill/FADE/2.png')",
    opacity: "0.4",
  });
  $("#3").css({
    "background-image": "url('Img/I_Image/I_Skill/FADE/3.png')",
    opacity: "0.4",
  });
  $("#I_Skill_BackGround").css({
    "background-image": "url('Img/I_Image/I_Skill/SkillT.png')",
  });

  $("#I_Divide_Skill0,#I_Divide_Skill1,#I_Divide_Skill2").css({
    "background-color": "#ffffff",
    opacity: "0.2",
  });
});

//스킬 설명
const agentSkills = {
  sova: {
    icons: [
      "Img/I_Image/I_Skill/SOVA/0.png",
      "Img/I_Image/I_Skill/SOVA/1.png",
      "Img/I_Image/I_Skill/SOVA/2.png",
      "Img/I_Image/I_Skill/SOVA/3.png",
    ],

    skillNames: ["올빼미 드론", "충격 화살", "정찰용 화살", "사냥꾼의 분노"],
    skillCR: ["400 크레딧", "150 크레딧", "-", "8포인트"],
    skillCH: ["1회", "2회", "1회 / 쿨타임 40초", "8포인트"],
    skillEX: [
      "올빼미 드론을 장착합니다. 발사하면 드론을 날려 조종합니다. 드론을 조종하는 동안 발사를 누르면 표식용 다트가 발사됩니다. 다트에 맞은 플레이어는 위치가 드러납니다.",
      "충격 화살을 발사하는 활을 장착합니다. 발사하면 충돌 시 폭발하여 주변 플레이어에게 피해를 입히는 화살을 전방으로 날립니다. 발사를 길게 누르면 화살의 사거리가 늘어납니다. 보조 공격 시 화살이 최대 두 번 더 튕깁니다.",
      "정찰 화살을 발사하는 활을 장착합니다. 발사하면 정찰 화살을 전방으로 날려 화살이 꽂힌 곳을 기준으로 모습이 드러난 주변 적의 위치를 표시합니다. 적이 이 화살을 파괴할 수 있습니다. 발사를 길게 누르면 화살의 사거리가 늘어납니다. 보조 공격 시 화살이 최대 두 번 더 튕깁니다.",
      "벽을 관통하는 에너지 3개를 장거리로 발사하는 활을 장착합니다. 발사하면 전방에 일직선상으로 에너지를 날려 닿은 적에게 피해를 입히고 위치를 드러냅니다. 스킬 지속시간이 활성화된 상태에서 최대 두 번 더 다시 사용할 수 있습니다.",
    ],
    skillSUB: [
      "드론 체력 100｜드론 지속시간 7초｜다트 발견 핑 2회｜다트 재사용 대기시간 5초",
      "거리별 피해량 25~75",
      "화살 체력 20｜화살 발견 핑 2회",
      "활 지속시간 6.5초｜발당 피해 80",
    ],
  },
  sky: {
    icons: [
      "Img/I_Image/I_Skill/SKY/0.png",
      "Img/I_Image/I_Skill/SKY/1.png",
      "Img/I_Image/I_Skill/SKY/2.png",
      "Img/I_Image/I_Skill/SKY/3.png",
    ],
    skillNames: ["재생", "정찰자", "인도하는 빛", "추적자"],
    skillCR: ["150 크레딧", "250 크레딧", "250 크레딧", "8포인트"],
    skillCH: ["1회", "1회", "2회", "8포인트"],
    skillEX: [
      "회복 장신구를 장착합니다. 발사를 길게 누르면 정신 집중하여 범위 내에서 모습이 보이는 아군들을 회복시킵니다. 회복 에너지가 바닥날 때까지 재사용할 수 있습니다. 스카이 자신이 회복할 수는 없습니다.",
      "태즈매니아 호랑이 장신구를 장착합니다. 발사하면 호랑이를 보내 조종합니다. 조종 중에 발사하면 전방으로 뛰어올라 충돌 시 폭발하며 뇌진탕을 일으키고 직접 타격한 적에게 피해를 입힙니다.",
      "매 장신구를 장착합니다. 발사하면 매를 전방으로 날립니다. 발사를 길게 누르면 조준점 방향으로 매를 유도합니다. 비행 중에 다시 사용하면 매가 섬광으로 변합니다. 섬광은 매가 날아가고 잠시 후 가장 강력해집니다.",
      "추적자 장신구를 장착합니다. 발사하면 추적자 셋을 보내 가장 가까운 적 셋을 쫓습니다. 추적자가 표적에 다다르면 해당 적의 시야를 제한합니다.",
    ],
    skillSUB: [
      "총 회복 에너지 100｜초당 회복 20",
      "정찰자 지속시간 5초｜정찰자 체력 80｜멍해짐 지속시간 2.5~4초｜직격 피해 30",
      "매 지속시간 4초｜실명 지속시간 1.25~2초",
      "추적자 체력 120｜시야 제한 지속시간 3초",
    ],
  },
  breach: {
    icons: [
      "Img/I_Image/I_Skill/BREACH/0.png",
      "Img/I_Image/I_Skill/BREACH/1.png",
      "Img/I_Image/I_Skill/BREACH/2.png",
      "Img/I_Image/I_Skill/BREACH/3.png",
    ],
    skillNames: ["여진", "섬광", "균열", "지진파"],
    skillCR: ["200 크레딧", "250 크레딧", "-", "9 포인트"],
    skillCH: ["1회", "2회", "1회 / 쿨타임 40초", "9 포인트"],
    skillEX: [
      "융합 에너지탄을 장착합니다. 발사하면 벽을 통과하고 느리게 효과가 발생하는 폭발을 일으켜 대상 범위 내의 모든 적에게 큰 피해를 입힙니다.",
      "실명탄을 장착합니다. 발사하면 벽을 통과하고 빠르게 효과가 발생하는 폭발을 일으켜 섬광을 본 모든 플레이어를 실명시킵니다.",
      "지진파를 장착합니다. 발사를 길게 누르면 사거리가 늘어납니다. 키를 떼면 지진파를 날려 경로상에 있는 적과 대상 범위 내의 모든 적을 멍하게 합니다.",
      "지진탄을 장착합니다. 발사하면 모든 지형을 통과하는 지진 파동을 날려 경로상에 있는 모든 적을 멍하게 하고 공중으로 띄웁니다.",
    ],
    skillSUB: [
      "발동 대기시간 2.5초｜폭발 총 2회｜폭발 당 피해 80",
      "발동 대기시간 0.5초｜실명 지속시간 2초",
      "발동 대기시간 1초｜멍해짐 지속시간 3초",
      "멍해짐 지속시간 6초",
    ],
  },
  kayo: {
    icons: [
      "Img/I_Image/I_Skill/KAYO/0.png",
      "Img/I_Image/I_Skill/KAYO/1.png",
      "Img/I_Image/I_Skill/KAYO/2.png",
      "Img/I_Image/I_Skill/KAYO/3.png",
    ],
    skillNames: ["파편/탄", "플래시/드라이브", "제로/포인트", "무력화/명령"],
    skillCR: ["200 크레딧", "250 크레딧", "-", "8 포인트"],
    skillCH: ["1회", "2회", "1회 / 쿨타임 40초", "8 포인트"],
    skillEX: [
      "폭발하는 파편탄을 장착합니다. 발사하면 투척합니다. 파편탄은 바닥에 붙어 여러 차례 폭발하며, 폭발할 때마다 중심부에 있는 적에게 치명적인 피해를 입힙니다.",
      "섬광탄을 장착합니다. 발사하면 투척합니다. 보조 공격 시 더 일찍 폭발하는 약한 섬광탄을 투척합니다. 섬광탄은 잠시 후 폭발하며 모습이 보이는 대상을 실명시킵니다.",
      "제압용 검을 장착합니다. 발사하면 투척합니다. 검은 처음 적중한 표면에 꽂혀 잠시 후 폭발하며, 범위 내에 있는 대상을 모두 제압합니다.",
      "케이/오가 즉시 양극화된 레디어나이트 에너지를 과충전하여 넓은 범위에 파동을 방출합니다. 이 파동에 맞은 적은 짧은 시간 동안 제압됩니다. 케이/오는 과충전된 동안 전투 자극제 효과를 받으며, 쓰러져도 다시 안정화할 수 있습니다.",
    ],
    skillSUB: [
      "폭발 대기시간 0.5초｜폭발 총 4회｜폭발 지속시간 4초｜폭발 당 피해 25~60",
      "발동 대기시간 1.6초 (주 공격) / 1초 (보조 공격)｜실명 지속시간 2.25초 (주 공격) / 1.25초 (보조 공격)",
      "제압용 검 체력 20｜발동 대기시간 1초｜제압 지속시간 8초",
      "과충전 지속시간 12초｜제압 지속시간 4초｜불안정화 상태 지속시간 15초｜불안정화 상태 체력 850",
    ],
  },
  gekko: {
    icons: [
      "Img/I_Image/I_Skill/GEKKO/0.png",
      "Img/I_Image/I_Skill/GEKKO/1.png",
      "Img/I_Image/I_Skill/GEKKO/2.png",
      "Img/I_Image/I_Skill/GEKKO/3.png",
    ],
    skillNames: ["폭파봇 지옥", "지원봇", "기절봇", "요동봇"],
    skillCR: ["250 크레딧", "300 크레딧", "-", "8 포인트"],
    skillCH: ["1회", "1회", "1회 / 회수 후 쿨타임 10초", "8 포인트"],
    skillEX: [
      "폭파봇을 장착합니다. 발사하면 폭파봇을 수류탄처럼 투척합니다. 보조 공격 시 낮게 투척합니다. 폭파봇은 땅에 닿으면 넓은 구역에 복제되며 잠시 후 폭발합니다.",
      "지원봇을 장착합니다. 발사하면 지원봇을 앞으로 보내 적을 찾습니다. 지원봇은 처음 본 적에게 뇌진탕을 유발합니다. 스파이크 지점이나 설치된 스파이크를 겨눈 상태에서 보조 공격 시 지원봇에게 스파이크 설치나 해제를 명령할 수 있습니다. 설치하려면 게코가 스파이크를 소지하고 있어야 합니다.",
      "기절봇을 장착합니다. 발사하면 기절봇이 공중으로 솟아오릅니다. 기절봇은 충전한 뒤 시야에 들어온 적을 향해 플라즈마 폭발을 일으킵니다. 플라즈마에 맞은 적은 실명합니다.",
      "요동봇을 장착합니다. 발사하면 요동봇과 정신이 연결되어 요동봇을 적 진영으로 조종합니다. 활성화하면 앞으로 돌진해 폭발하며 좁은 범위 안에 있는 모든 적을 구속합니다.",
    ],
    skillSUB: [
      "발동 대기 시간 3초｜초당 피해 10｜폭발 피해 150",
      "회수 후 재사용 대기시간 10초｜지원봇 체력 80｜지원봇 지속시간 5초｜멍해짐 지속시간 2.5초",
      "기절봇 체력 20｜플라즈마 충전 시간 0.35초｜기절봇 지속시간 2초｜실명 지속시간 2초",
      "회수 후 재사용 대기시간 10초｜요동봇 체력 200｜요동봇 지속시간 6초｜구속 지속시간 6초",
    ],
  },
  fade: {
    icons: [
      "Img/I_Image/I_Skill/FADE/0.png",
      "Img/I_Image/I_Skill/FADE/1.png",
      "Img/I_Image/I_Skill/FADE/2.png",
      "Img/I_Image/I_Skill/FADE/3.png",
    ],
    skillNames: ["추적귀", "포박", "귀체", "황혼"],
    skillCR: ["250 크레딧", "200 크레딧", "-", "8 포인트"],
    skillCH: ["2회", "1회", "1회 / 쿨타임 40초", "8 포인트"],
    skillEX: [
      "추적귀를 장착합니다. 발사하면 직선으로 이동하는 추적귀를 내보냅니다. 추적귀는 전방 원뿔 시야 범위에 들어온 적이나 흔적에 고정되어 추격하며, 닿으면 적의 시야를 제한합니다. 발사 버튼을 길게 누르면 추적귀를 조준점 방향으로 움직일 수 있습니다.",
      "악몽의 먹물 구슬을 장착합니다. 발사하면 일정 시간이 지난 후 땅에 떨어지는 구슬을 던집니다. 구슬이 땅에 닿으면 먹물이 폭발해 적이 일반적인 방법으로는 빠져나갈 수 없는 구역을 생성합니다. 스킬을 다시 사용하면 구슬을 일찍 떨어뜨립니다.",
      "악몽의 실체를 장착합니다. 발사하면 일정 시간이 지난 후 땅에 떨어지는 구슬을 던집니다. 구슬이 땅에 닿으면 시야에 들어온 적의 위치를 드러내는 악몽의 실체로 변합니다. 적은 악몽의 실체를 파괴할 수 있습니다. 스킬을 다시 사용하면 구슬을 일찍 떨어뜨립니다.",
      "공포의 힘을 장착합니다. 발사하면 벽을 통과하는 악몽의 에너지 파동을 보냅니다. 에너지가 적에게 닿으면 흔적을 남기며 청력을 약화시키고 부패 효과를 적용합니다.",
    ],
    skillSUB: [
      "추적귀 체력 60｜탐색 지속시간 2.5초｜시야 제한 지속시간 2.75초",
      "최대 비행 시간 1.5초｜발동 대기시간 0.5초｜포박, 부패, 청력 약화 지속시간 5초",
      "최대 비행 시간 1.5초｜발동 대기시간 1초｜귀체 지속시간 2초｜흔적 지속시간 12초",
      "흔적, 부패, 청력 약화 지속시간 12초",
    ],
  },
};

// 업데이트 내용
function setAgentSkills(agent) {
  const skills = agentSkills[agent];
  if (!skills) return;

  // 스킬 아이콘 및 이름 업데이트
  for (let i = 0; i < skills.icons.length; i++) {
    $(`#${i}`).css({
      "background-image": `url(${skills.icons[i]})`,
      opacity: i === "0.4",
    });
  }

  // 스킬 설명과 이름 업데이트 (hover 이벤트)
  $(".I_Icon_Skill").hover(
    function () {
      const index = $(this).attr("id");
      $(
        "#I_Skill_Name, #I_Skill_Credit0, #I_Skill_Credit1, #I_Skill_Charge0, #I_Skill_Charge1, #I_Skill_EX0, #I_Skill_EX1, #I_Skill_EX2"
      ).addClass("I_Skill_Text");
      $(this).css("opacity", "1");
      $("#I_Skill_Name").text(skills.skillNames[index]);
      $("#I_Skill_Credit0").text("크레딧");
      $("#I_Skill_Credit1").text(skills.skillCR[index]);
      $("#I_Skill_Charge0").text("총 충전 횟수");
      $("#I_Skill_Charge1").text(skills.skillCH[index]);
      $("#I_Skill_EX0").text("스킬 설명");
      $("#I_Skill_EX1").text(skills.skillEX[index]);
      $("#I_Skill_EX2").text(skills.skillSUB[index]);
    },
    function () {
      $(
        "#I_Skill_Name, #I_Skill_Credit0, #I_Skill_Credit1, #I_Skill_Charge0, #I_Skill_Charge1, #I_Skill_EX0, #I_Skill_EX1, #I_Skill_EX2"
      ).removeClass("I_Skill_Text");
      $(this).css("opacity", "0.4");
      $("#I_Skill_Name").text("--");
      $("#I_Skill_Credit0").text("크레딧");
      $("#I_Skill_Credit1").text("--");
      $("#I_Skill_Charge0").text("총 충전 횟수");
      $("#I_Skill_Charge1").text("--");
      $("#I_Skill_EX0").text("스킬 설명");
      $("#I_Skill_EX1").text("--");
      $("#I_Skill_EX2").text("--");
    }
  );
}

$("#sova_Skill").click(function () {
  setAgentSkills("sova");
});
$("#sky_Skill").click(function () {
  setAgentSkills("sky");
});
$("#breach_Skill").click(function () {
  setAgentSkills("breach");
});
$("#kayo_Skill").click(function () {
  setAgentSkills("kayo");
});
$("#gekko_Skill").click(function () {
  setAgentSkills("gekko");
});
$("#fade_Skill").click(function () {
  setAgentSkills("fade");
});
