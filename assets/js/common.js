$(function () {

    var $grid = $('.grid').masonry({
        percentPosition: true,
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer"
    });

    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function (element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function (element) {
            if (element.is('img')) {
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
            // ✅ 每次 lazy load 完都刷新 masonry（对 img 和 div 背景都有效）
            setTimeout(function () { $grid.masonry('layout'); }, 0);
        }
    };

    $('img.lazy, div.lazy:not(.always-load)').Lazy({ visibleOnly: true, ...lazyLoadOptions });
    $('div.lazy.always-load').Lazy({ visibleOnly: false, ...lazyLoadOptions });

    $('[data-toggle="tooltip"]').tooltip();

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    $(document).on('click', '#navbarResponsive .nav-link', function (e) {
        var $navbar = $('#navbarResponsive');
        var text = $(this).text().trim();

        if (text === 'Home') {
            e.preventDefault();
            history.replaceState(null, '', window.location.pathname + window.location.search);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        setTimeout(setActiveNavByHash, 0);

        if ($navbar.hasClass('show')) {
            $navbar.collapse('hide');
        }
    });

    function setActiveNavByHash() {
        var hash = window.location.hash || '#top';
        $('#navbarResponsive .nav-item').removeClass('active');

        var $link = $('#navbarResponsive .nav-link[href$="' + hash + '"]');

        if ($link.length === 0 || hash === '#top') {
            $link = $('#navbarResponsive .nav-link').filter(function () {
                var href = $(this).attr('href');
                return href === '/' || href.endsWith('/');
            }).first();
        }

        $link.closest('.nav-item').addClass('active');
    }

    setActiveNavByHash();
    $(window).on('hashchange', setActiveNavByHash);

    function updateNavbarGreeting() {
        var hour = new Date().getHours();
        var greeting;
      
        if (hour >= 7 && hour < 18) greeting = "☀️ Dongyue";
        else greeting = "🌙 Dongyue";
      
        var el = document.getElementById("navbarGreeting");
        if (!el) return;
      
        el.textContent = greeting;
        el.classList.remove("is-hidden");
      }
      
      
    updateNavbarGreeting();
    setInterval(updateNavbarGreeting, 60 * 1000); // 可选：每分钟更新一次      


    function enablePortraitCycle(selector) {
        var $img = $(selector);
        if (!$img.length) return;
      
        var me = $img.attr("src");
        var cats = $img.data("cat-srcs"); // array
        if (!cats || cats.length < 2) return;
      
        var state = 0;        // 0: me, 1: cat A, 2: cat B
        var firstCatIndex = null;
      
        $img.on("click", function () {
          if (state === 0) {
            // me -> random cat
            firstCatIndex = Math.floor(Math.random() * cats.length);
            $img.attr("src", cats[firstCatIndex]);
            state = 1;
          } else if (state === 1) {
            // cat A -> the other cat
            var secondCatIndex = (firstCatIndex + 1) % cats.length;
            $img.attr("src", cats[secondCatIndex]);
            state = 2;
          } else {
            // cat B -> me
            $img.attr("src", me);
            state = 0;
            firstCatIndex = null;
          }
        });
      }
      
      enablePortraitCycle("#profilePortrait");
      enablePortraitCycle("#profilePortraitMobile");
      
      
});
