if ($(window).width() < 600) {
  $(".color-red").prepend("<br>");
}

// NAVBAR SCROLL COLOR ANIMATION
// ==============================

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("white")
  } else if (window.pageYOffset == sticky){
    navbar.classList.remove("white");
  }
}

// ANIMATION ON SCROLL 
// ==============================

$(function() {
  
    var html = $('html');
    // Detections
    if (!("ontouchstart" in window)) {
      html.addClass("noTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
    if ("ontouchstart" in window) {
      html.addClass("isTouch");
    }
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      if (navigator.appVersion.indexOf("Trident") === -1) {
        html.addClass("isEDGE");
      } else {
        html.addClass("isIE isIE11");
      }
    }
    if (navigator.appVersion.indexOf("MSIE") !== -1) {
      html.addClass("isIE");
    }
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      html.addClass("isSafari");
    }
  
    // On Screen
  
    $.fn.isOnScreen = function() {
      var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    function detection() {
      for (var i = 0; i < items.length; i++) {
        var el = $(items[i]);
  
        if (el.isOnScreen()) {
          el.addClass("in-view");
        } else {
          el.removeClass("in-view");
        }
      }
    }
  
    var items = document.querySelectorAll(
      "*[data-animate-in], *[data-detect-viewport]"
    ),
      waiting = false,
      w = $(window);
  
    w.on("resize scroll", function() {
      if (waiting) {
        return;
      }
      waiting = true;
      detection();
  
      setTimeout(function() {
        waiting = false;
      }, 100);
    });
  
    $(document).ready(function() {
      setTimeout(function() {
        detection();
      }, 500);
  
      for (var i = 0; i < items.length; i++) {
        var d = 0,
          el = $(items[i]);
        if (items[i].getAttribute("data-animate-in-delay")) {
          d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
        } else {
          d = 0;
        }
        el.css("transition-delay", d);
      }
    });
  });
  

  // YOUTUBE VIDEO API ================================>
  // ==================================================>

      // // YouTube Data API Key
      // var apiKey = "YOUR_YOUTUBE_API_KEY";
    
      // // YouTube Channel ID
      // var channelId = "YOUR_CHANNEL_ID";
  
      // // Fetch latest video from YouTube Data API
      // fetch("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" + channelId + "&maxResults=1&key=" + apiKey)
      //   .then(response => response.json())
      //   .then(data => {
      //     // Extract video ID
      //     var videoId = data.items[0].id.videoId;
  
      //     // Create YouTube player
      //     var player = new YT.Player('player', {
      //       height: '360',
      //       width: '640',
      //       videoId: videoId
      //     });
      //   });

      //    // Load YouTube Data API
      //    gapi.load('client', function() {
      //      gapi.client.init({
      //        'apiKey': apiKey
      //      });
      //    });

// 


