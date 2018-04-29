// Плагін для рухомого рядка в хедері --------------------------------------------------------------------
jQuery.fn.endlessRiver = function (settings) {
    settings = jQuery.extend({
        speed: 100,
        pause: true,
        buttons: false
    }, settings);
    return this.each(function () {
        var j = jQuery;
        var $line = j(this);
        $line.css({
            margin: "0 !important",
            padding: "0 !important"
        });
        var currentSpazio, currentTempo;
        var initialOffset = $line.offset().left;
        var lineWidth = 1;
        $line.children("li.tick-clones").remove();
        //elimina cloni se ci sono - Serve in caso io aggiorni dinamicamente il contenuto
        $line.addClass("newsticker");
        var $mask = $line.wrap("<div class='mask'></div>");
        var $tickercontainer = $line.parent().wrap("<div class='tickercontainer'></div>");
        var elements = $line.children("li");
        var fill = function () {
            lineWidth = 1;
            $line.append(elements.clone(true).addClass("tick-clones"));
            $line.children("li").each(function (i) {
                lineWidth += j(this, i).outerWidth(true);
                //outherWidth con argomento true ritorna larghezza compresi margini
            });

        }
        while (lineWidth < $tickercontainer.outerWidth(true))
            fill();
        $line.width(lineWidth);
        $line.height($line.parent().height());
        function scrollnews(spazio, tempo) {
            $line.animate({left: '-=' + spazio}, tempo, "linear", function () {
                $line.children("li:first").appendTo($line);
                $line.css("left", 0);
                currentSpazio = $line.children("li:first").outerWidth(true);
                currentTempo = tempo / spazio * currentSpazio;
                scrollnews(currentSpazio, currentTempo);
            });
        }
        currentSpazio = $line.children("li:first").outerWidth(true);
        currentTempo = currentSpazio / settings.speed * 1000;
        //x 1000 perchè tempo è in millisecondi
        scrollnews(currentSpazio, currentTempo);
        function setHover() {
            $line.hover(function () {
                j(this).stop();
            },
                    function () {
                        var offset = $line.offset().left;
                        var residualSpace = offset + $line.children("li:first").outerWidth(true) - initialOffset;
                        var residualTime = currentTempo / currentSpazio * residualSpace;
                        scrollnews(residualSpace, residualTime);
                    });
        }
        if (settings.pause)
            setHover();

        if (settings.buttons) {
            var $buttons = j('<ul class="news_controls">' +
                    '<li class="pause sprite"><span class="visually_hidden">Pause</span></li>' +
                    '<li class="play sprite"><span class="visually_hidden">Play</span></li>' +
                    '</ul>');
            $buttons.insertAfter($tickercontainer);
            $buttons.children(".pause").click(function () {
                $line.unbind('mouseenter mouseleave');
                $line.stop();
            });
            $buttons.children(".play").click(function () {
                setHover();
                var offset = $line.offset().left;
                var residualSpace = offset + $line.children("li:first").outerWidth(true) - initialOffset;
                var residualTime = currentTempo / currentSpazio * residualSpace;
                scrollnews(residualSpace, residualTime);
            });
        }

    });
};
// --------------------------------------------------------------------------------------------------------


jQuery(function ($) {
    if ($('.post_rss.video_rss').length) {
        $('.top_post').append($('.post_rss.video_rss'));
    }
    $('.top_post').after($('.top_menu'));

    if ($('.news_ticker').length) {
        $('header.header').append($('.news_ticker'));
        $('.news_ticker ul').addClass('news');
        $('.news_ticker ul li').addClass('sprite');

        if ($('.news_ticker ul li').length) {
            $(document).ready(function () {
                if ($(window).width() > 767) {
                    $(".news").endlessRiver({
                        speed: 80,
                        buttons: true
                    });
                }
            });
        }
    }
    if ($('.featured_posts').length) {
        $('header.header').append($('.featured_posts'));
        $('.featured_posts .last_news li').each(function () {
            $(this).find($('.title a')).addClass('post_permalink_rss trigger').wrapInner('<h2 class="post_title_rss"><div class="text_taylor"></div></h2>').prependTo($(this));
            $(this).find($('.news_img_block a img')).addClass('post_thumbnail_rss').unwrap();
            $(this).find($('.news_img_block a')).addClass('intro_thumbnail_rss').wrap('<div class="post_content_rss text_content_rss" />');
            $(this).find($('.post_permalink_rss')).after($(this).find($('.post_content_rss')));

            $(this).wrapInner('<article />');
            $(this).find($('article')).unwrap().wrap('<div class="post_rss text_rss clearfix" />');
        });
        $('.featured_posts .last_news .post_rss').unwrap();

        if (!$('.featured_posts .last_news li').length) {
            $('.featured_posts').remove();
        }
    }

    if ($('.recent_posts').length) {
        $('.recent_posts').wrap('<aside class="sidebar clearfix"><div class="sidebar_content"></div></aside>');
        $('section.main_content').after($('aside.sidebar'));
    }
    if ($('.text_widget.partners-wrp').length) {
        if ($('aside.sidebar').length) {
            $('aside.sidebar').append($('.text_widget'));
        } else {
            $('.text_widget').wrap('<aside class="sidebar clearfix"><div class="sidebar_content"></div></aside>');
        }
        $('section.main_content').after($('aside.sidebar'));
    }

    $('.recent_posts_inner .last_news li').each(function () {
        $(this).find($('.title a')).addClass('post_permalink_rss trigger').wrap('<div class="text_taylor" />').wrapInner('<h2 class="post_title_rss" />');
        $(this).find($('.text_taylor a h2')).text($.trim($(this).find($('.text_taylor a h2')).text()));
        $(this).find($('.text_taylor a')).append($(this).find($('.author')));
        $(this).prepend($(this).find($('.text_taylor')));
        $(this).wrapInner('<article />');
        $(this).find($('article')).unwrap();
    });
    $('.recent_posts_inner .last_news article').unwrap().wrap('<div class="post_rss text_rss clearfix" />');

    $('.category.layout .articles').each(function () {
        $(this).append($(this).find($('li')));
    });
    $('.category.layout .articles li').each(function () {
        $(this).find($('.title a')).addClass('post_permalink_rss trigger').wrapInner('<h2 class="post_title_rss"><div class="text_taylor"></div></h2>').prependTo($(this));
        $(this).find($('.post_permalink_rss')).after('<div class="post_content_rss text_content_rss" />');
        $(this).find($('.news_img_block img')).addClass('post_thumbnail_rss').unwrap();
        $(this).find($('.news_img_block a')).addClass('intro_thumbnail_rss').appendTo($(this).find($('.post_content_rss')));
        $(this).find($('.desc')).wrapInner('<p class="intro_rss text_intro_rss"><div class="text_taylor"></div></p>');
        $(this).find($('.desc .intro_rss')).appendTo($(this).find($('.post_content_rss')));
        $(this).find($('.post_content_rss')).after('<time class="sprite"><span class="date_rss">' + $(this).find($('.date')).text() + '</span></time>');
        $(this).wrapInner('<div class="post_rss text_rss clearfix"><article></article></div>');
        $(this).find($('.post_rss.text_rss')).unwrap()
    });
    $('.category.layout .articles .last_news').remove();

    if ($('.social-widget-link').length) {
        $('#footer-social').prepend($('.social-widget-link'));
        $('.social-widget-link a').each(function () {
            $(this).append($('.footer-social-icons .fa-' + $(this).attr('id')));
        });
    }

    if ($('.article_details.full').length) {
        if ($('.social-share-block')) {
            $('.article_details.full .tumblr_post.text_post').append($('.social-share-block'));
        }
    }

    $(document).on('click', '#trigger', function () {
        $('.top_menu').slideToggle();
    });

    $(document).ready(function () {
        $('.language-active').text($.trim($('.language-active').text()).substring(0, 3));
        $('.block_language a').each(function () {
            var newText = $.trim($(this).text()).substring(0, 3);
            $(this).text(newText);
        });

        $('.tickercontainer').append($('.language-select-form'));
        $(document).on('click', '.language-active', function () {
            $('.block_language').slideToggle();
        });

        $('.menu-trigger').after($('.language-select-form').clone());
    });

    $(window).on('load', function () {
        $('.loading-mask').css({
            "transition": "opacity 500ms",
            "display": "none",
            "opacity": "0"
        });
    });
});