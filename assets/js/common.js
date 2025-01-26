$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

//

// //about 바로 이동
$(document).ready(function () {
  $(".menu_about").click(function () {
    var offset = $(".section02").offset();
    var headerHeight = $(".header").outerHeight() || 148;
    $("html, body").animate(
      {
        scrollTop: offset.top - headerHeight,
      },
      300
    );
  });
});

// //Portfolio으로 바로 이동
$(document).ready(function () {
  $(".menu_works").click(function () {
    var offset = $(".section03").offset();
    var headerHeight = $(".header").outerHeight() || 148;
    $("html, body").animate(
      {
        scrollTop: offset.top - headerHeight,
      },
      300
    );
  });
});

// //Education으로 바로 이동
$(document).ready(function () {
  $(".menu_education").click(function () {
    var offset = $(".section04").offset();
    var headerHeight = $(".header").outerHeight() || 148;
    $("html, body").animate(
      {
        scrollTop: offset.top - headerHeight,
      },
      300
    );
  });
});

// //Skills으로 바로 이동
$(document).ready(function () {
  $(".menu_skills").click(function () {
    var offset = $(".section05").offset();
    var headerHeight = $(".header").outerHeight() || 148;
    $("html, body").animate(
      {
        scrollTop: offset.top - headerHeight,
      },
      300
    );
  });
});

// Menu 클릭 시 active 클래스 추가
$(document).ready(function () {
  $(".menu_list li a").click(function (e) {
    // Remove active class from all menu items
    $(".menu_list li a").removeClass("active");

    // Add active class to the clicked menu item
    $(this).addClass("active");
  });
});

// 우측 하단 상단 바로 이동 버튼
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Show/hide scroll to top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//따라다니는 원

