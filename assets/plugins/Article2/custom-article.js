
jQuery(function ($) {
    var winWidth = document.body.clientWidth,
        winHeight = document.body.clientHeight,
        scrollVal = $(window).scrollTop();

    var $container = $('.out-ext-info');

    $container.find('.la-grid').removeClass('lb-col-sm-9 lb-col-sm-10 lb-col-sm-11').addClass('lb-col-sm-12');

    $container.find('.table').each(function () {
        $(this).wrap('<div class="table-responsive">');
    });

    $('.out-ext-info').find('.la-section').each(function () {
        $(this).parent().wrap('<div class="lb-container' + ($(this).hasClass('la-section--fullWidth') ? ' la-container--fullWidth' : '') + '" />');
    });

    $(document).ready(function () {
        if ($('.header-between-of-horizontal-lines').length) {
            $('.header-between-of-horizontal-lines h1').each(function(index, el) {
                $(this).wrapInner('<span class="h-text" />');
                $(this).find('.h-text').prepend('<span class="line-left" />');
                $(this).find('.h-text').append('<span class="line-right" />');
                $(this).find('.line-left').css('background-color', $(this).css('color'));
                $(this).find('.line-right').css('background-color', $(this).css('color'));
            });
            $('.header-between-of-horizontal-lines h2').each(function(index, el) {
                $(this).wrapInner('<span class="h-text" />');
                $(this).find('.h-text').prepend('<span class="line-left" />');
                $(this).find('.h-text').append('<span class="line-right" />');
                $(this).find('.line-left').css('background-color', $(this).css('color'));
                $(this).find('.line-right').css('background-color', $(this).css('color'));
            });
            $('.header-between-of-horizontal-lines h3').each(function(index, el) {
                $(this).wrapInner('<span class="h-text" />');
                $(this).find('.h-text').prepend('<span class="line-left" />');
                $(this).find('.h-text').append('<span class="line-right" />');
                $(this).find('.line-left').css('background-color', $(this).css('color'));
                $(this).find('.line-right').css('background-color', $(this).css('color'));
            });
        }

        if ($('.first-letter-3-lines-height').length) {
            $('.first-letter-3-lines-height p').each(function() {
                var firstLetter = $(this).text().charAt(0),
                    fullText = $(this).text(),
                    newText = fullText.slice(1),
                    textLineHeight = $(this).css('line-height'),
                    firstLetterFontSize = (textLineHeight.slice(0, -2) * 3) + 'px';
                $(this).text(newText);
                $(this).prepend('<span class="first-letter" />');
                $(this).find('.first-letter').append(firstLetter).css('font-size', firstLetterFontSize);
            });
        }
        
        // redactor preview
        // if ($('.img-list-wrapper.img-preview').length) {
        //  var src = '';
        //  $('.img-list-wrapper.img-preview img').each(function () {
        //      if ($(this).attr('src-original')) {
        //          src = $(this).attr('src-original');
        //      } else {
        //          src = $(this).attr('src');
        //      }
        //      $(this).wrap('<a href="' + src + '"></a>');
        //  });
        //  $('.img-list-wrapper.img-preview').each(function() {
        //      $(this).find('a').lightBox({fixedNavigation: true});
        //  });

        //  if ($('.square-photos').length) {
        //      $('.square-photos .img-list-wrapper.img-preview .img-list li a').each(function () {
        //          $(this).css('background-image', 'url('+$(this).find('img').attr('src')+')');
        //      });
        //  }
        // }
        if ($('.img-list-wrapper.img-preview').length) {
            if(!$('.pswp').length) {
                $('body').append(
                    '<!-- Root element of PhotoSwipe. Must have class pswp. -->'+
                    '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'+
                    '<!-- Background of PhotoSwipe.'+
                    'It\'s a separate element, as animating opacity is faster than rgba(). -->'+
                    '<div class="pswp__bg"></div>'+
                    '<!-- Slides wrapper with overflow:hidden. -->'+
                    '<div class="pswp__scroll-wrap">'+
                    '<!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->'+
                    '<!-- don\'t modify these 3 pswp__item elements, data is added later on. -->'+
                    '<div class="pswp__container">'+
                    '<div class="pswp__item"></div>'+
                    '<div class="pswp__item"></div>'+
                    '<div class="pswp__item"></div>'+
                    '</div>'+
                    '<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->'+
                    '<div class="pswp__ui pswp__ui--hidden">'+
                    '<div class="pswp__top-bar">'+
                    '<!--  Controls are self-explanatory. Order can be changed. -->'+
                    '<div class="pswp__counter"></div>'+
                    '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+
                    '<button class="pswp__button pswp__button--share" title="Share"></button>'+
                    '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+
                    '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+
                    '<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->'+
                    '<!-- element will get class pswp__preloader--active when preloader is running -->'+
                    '<div class="pswp__preloader">'+
                    '<div class="pswp__preloader__icn">'+
                    '<div class="pswp__preloader__cut">'+
                    '<div class="pswp__preloader__donut"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'+
                    '<div class="pswp__share-tooltip"></div>'+
                    '</div>'+
                    '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">'+
                    '</button>'+
                    '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">'+
                    '</button>'+
                    '<div class="pswp__caption">'+
                    '<div class="pswp__caption__center"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                );
            }
            $('.img-preview li').each(function() {
                $(this).css('width', 'auto');
                var src = '';
                if ($(this).find('img').attr('src-original')) {
                    src = $(this).find('img').attr('src-original');
                } else {
                    src = $(this).find('img').attr('src');
                }
                $(this).find('img').wrap('<a href="' + src + '"></a>');
                $(this).wrapInner('<div class="block-remove"></div>');
                var fotoHref = $(this).find('.block-remove img').attr('src'),
                    fofoWidth = $(this).find('.block-remove img').attr('img-width') !== '0' ? $(this).find('.block-remove img').attr('img-width') : $(this).find('.block-remove img').width(),
                    fotoHeight = $(this).find('.block-remove img').attr('img-height') !== '0' ? $(this).find('.block-remove img').attr('img-height') : $(this).find('.block-remove img').height(),
                    fofoSize = fofoWidth + 'x' + fotoHeight,
                    fotoDesc = $(this).find('.block-remove .img-description').html();
                $(this).append(
                    '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">'+
                        '<a href="'+src+'" itemprop="contentUrl" data-size="'+fofoSize+'">'+
                            '<img src="'+fotoHref+'" itemprop="thumbnail" alt="" class="img-responsive gallery-pic" />'+
                        '</a>'+
                        '<figcaption itemprop="caption description">'+fotoDesc+'</figcaption>'+
                    '</figure>'
                );
                $(this).find('.block-remove').remove();
                $(this).find('figure').unwrap();
            });
            $('.img-preview').each(function(index, el) {
                $(this).find('figure').wrapAll('<div class="photoswipe-slider" itemscope itemtype="http://schema.org/ImageGallery"></div>');
                $(this).find('.photoswipe-slider').unwrap();
            });
            $(document).ready(function () {
                initPhotoSwipeFromDOM('.photoswipe-slider');
            });

            if ($('.square-photos').length) {
                $('.square-photos .img-list-wrapper.img-preview figure a').each(function () {
                    $(this).css('background-image', 'url('+$(this).find('img').attr('src')+')');
                });
            }
        }


        // redactor gallery
        if ($('.img-list-wrapper.img-gallery').length) {
            $('.img-list-wrapper.img-gallery img').each(function () {
                if ($(this).attr("src-original")) {
                    $(this).attr({"src": $(this).attr("src-original")});
                }
            });

            if ($('.appearing-with-a-delay-photo-in-gallery-1').length) {
                $('.appearing-with-a-delay-photo-in-gallery-1 .img-gallery li').each(function() {
                    if ($(this).offset().top < scrollVal + winHeight - 100) {
                        $(this).addClass('show-photo');
                    }
                });
            }
        }

        // redactor swiper
        if ($('.img-list-wrapper.img-slider').length) {
            $('.img-list-wrapper.img-slider img').each(function () {
                if ($(this).attr('src-original')) {
                    $(this).attr({"src": $(this).attr("src-original")});
                }
            });

            $('.img-list-wrapper.img-slider').each(function(index) {
                $(this).addClass('swiper-container swiper-container-'+index);
                $(this).find('.img-list').addClass('swiper-wrapper');
                $(this).find('.img-list li').addClass('swiper-slide');
                $(this).append(
                    '<div class="swiper-pagination swiper-pagination-'+index+'"></div>'+
                    '<div class="swiper-button-next swiper-button-next-'+index+'"></div>'+
                    '<div class="swiper-button-prev swiper-button-prev-'+index+'"></div>'
                );
                var sliderEffect = 'slide';
                if ($(this).closest('.la-block').hasClass('transfusion-photo-slider-animation')) {
                    sliderEffect = 'fade';
                } else if ($(this).closest('.la-block').hasClass('carousel-photo-slider-animation')) {
                    sliderEffect = 'slide';
                }
                var swiper = new Swiper('.swiper-container-'+index, {
                    pagination: '.swiper-pagination-'+index,
                    nextButton: '.swiper-button-next-'+index,
                    prevButton: '.swiper-button-prev-'+index,
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 30,
                    loop: true,
                    centeredSlides: true,
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false,
                    effect: sliderEffect
                });
            });
        }


        if ($('.tag-instagram-block').length) {
            $('.tag-instagram-block').each(function(index, el) {
                var user = $(this).attr('data-user'),
                    accessToken = $(this).attr('data-access-token'),
                    count = $(this).attr('data-count'),
                    hashtags = $(this).attr('data-hashtags').split(','),
                    widgetMode = $(this).attr('data-widget-mode') ? true : false,
                    displayMode = $(this).attr('data-display-mode');

                for (var i = 0; i < hashtags.length; i++) {
                    hashtags[i] = $.trim(hashtags[i]);
                }

                $(this).find('.instamax').instamax({
                    accessToken: accessToken,
                    user: user,
                    hashtag: hashtags,
                    skin:"grey",
                    selectedTab:"p",
                    alwaysUseDropdown:false,
                    tagScope:"user",
                    widgetMode: widgetMode,
                    displayMode: displayMode,
                    maxResults: +count,
                    innerOffset:30,
                    outerOffset:30,
                    minItemWidth:200,   
                    maxItemWidth:300,
                    maxContainerWidth:800
                });
            });
        }


        if ($('.tag-vk_photo-block').length) {
            var getVkPhoto = function (url, block, type, urlUserInfo, typeSearch) {
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (data) {
                        // console.log(data);
                        var photos = data.response.items;
                        if (urlUserInfo) {
                            getVkUser(urlUserInfo, block, type, photos, typeSearch);
                        } else {
                            if (type == 'preview') {
                                createVkPhotoPreview(block, photos);
                            } else if (type == 'gallery') {
                                createVkPhotoGallery(block, photos);
                            } else if (type == 'slider') {
                                createVkPhotoSlider(block, photos);
                            }
                        }
                    }
                });
            };

            var getVkUser = function (url, block, type, photos, typeSearch) {
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (data) {
                        // console.log(data);
                        var user = data.response[0];
                        if (type == 'preview') {
                            createVkPhotoPreview(block, photos, user, typeSearch);
                        } else if (type == 'gallery') {
                            createVkPhotoGallery(block, photos, user, typeSearch);
                        } else if (type == 'slider') {
                            createVkPhotoSlider(block, photos, user, typeSearch);
                        }
                    }
                });
            };

            var getVkAutorPreview = function (block, photos, user, maxIndex, i, html) {
                var likes = block.attr('data-likes'),
                    reposts = block.attr('data-reposts'),
                    comments = block.attr('data-comments'),
                    src = photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                    fotoHref = photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                    fofoWidth = photos[i].width,
                    fotoHeight = photos[i].height,
                    fofoSize = fofoWidth + 'x' + fotoHeight,
                    fotoDesc = photos[i].text,
                    url = 'https://api.vk.com/method/users.get?user_ids='+photos[i].user_id+'&fields=photo_200&name_case=nom&v=5.62',
                    photoLikes = photos[i].likes.count,
                    photoReposts = photos[i].reposts.count,
                    photoComments = photos[i].comments.count,
                    photoOwnerId = photos[i].owner_id,
                    photoId = photos[i].id,
                    defUser = photos[i].user_id == 100 ? true : false;
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (data) {
                        // console.log(data);
                        var autor = data.response[0];
                        html += '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">';
                        html += '<a href="'+src+'" itemprop="contentUrl" data-size="'+fofoSize+'">';
                        html += '<img src="'+fotoHref+'" itemprop="thumbnail" alt="" class="img-responsive gallery-pic" />';
                        html += '</a>';
                        html += '<figcaption itemprop="caption description">';
                        html += '<span class="photo-desc">'+fotoDesc+'</span>';
                        if (defUser) {
                            html += '<a href="https://vk.com/'+user.screen_name+'" target="_blank" class="user-info">';
                            html += '<span class="user-info-photo">';
                            html += '<img src="'+user.photo_200+'" />';
                            html += '</span>';
                            html += '<span class="user-info-name">'+user.name+'</span>';
                        } else {
                            html += '<a href="https://vk.com/id'+autor.id+'" target="_blank" class="user-info">';
                            html += '<span class="user-info-photo">';
                            html += '<img src="'+autor.photo_200+'" />';
                            html += '</span>';
                            html += '<span class="user-info-name">'+autor.first_name+' '+autor.last_name+'</span>';
                        }
                        html += '</a>';
                        if (likes || reposts || comments) {
                            html += '<span class="photo-vk-info">';
                            if (likes) {
                                html += '<span class="photo-likes"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photoLikes+'</a></span>';
                            }
                            if (reposts) {
                                html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photoReposts+'</a></span>';
                            }
                            if (comments) {
                                html += '<span class="photo-comments"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photoComments+'</a></span>';
                            }
                            html += '</span>';
                        }
                        html += '</figcaption>';
                        html += '</figure>';

                        if (i+1 == maxIndex) {
                            block.find('.photoswipe-slider').append(html);
                            block.find('.vk_photo').addClass('loaded');
                            initPhotoSwipeFromDOM('.photoswipe-slider');
                        } else {
                            getVkAutorPreview(block, photos, user, maxIndex, i+1, html);
                        }
                    }
                });
            };

            var getVkAutorGallery = function (block, photos, user, maxIndex, i, html) {
                var likes = block.attr('data-likes'),
                    reposts = block.attr('data-reposts'),
                    comments = block.attr('data-comments'),
                    src = photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                    fotoDesc = photos[i].text,
                    url = 'https://api.vk.com/method/users.get?user_ids='+photos[i].user_id+'&fields=photo_200&name_case=nom&v=5.62',
                    photoLikes = photos[i].likes.count,
                    photoReposts = photos[i].reposts.count,
                    photoComments = photos[i].comments.count,
                    photoOwnerId = photos[i].owner_id,
                    photoId = photos[i].id,
                    defUser = photos[i].user_id == 100 ? true : false;
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (data) {
                        // console.log(data);
                        var autor = data.response[0];
                        html += '<div class="vk-img">';
                        html += '<div class="vk-info">';
                        html += '<img src="'+src+'" />';
                        if (likes || reposts || comments || user) {
                            html += '<div class="photo-vk-info-full">';
                            if (defUser) {
                                html += '<a href="https://vk.com/'+user.screen_name+'" target="_blank" class="user-info">';
                                html += '<span class="user-info-photo">';
                                html += '<img src="'+user.photo_200+'" />';
                                html += '</span>';
                                html += '<span class="user-info-name">'+user.name+'</span>';
                            } else {
                                html += '<a href="https://vk.com/id'+autor.id+'" target="_blank" class="user-info">';
                                html += '<span class="user-info-photo">';
                                html += '<img src="'+autor.photo_200+'" />';
                                html += '</span>';
                                html += '<span class="user-info-name">'+autor.first_name+' '+autor.last_name+'</span>';
                            }
                            html += '</a>';
                            if (likes || reposts || comments) {
                                html += '<div class="photo-vk-info">';
                                if (likes) {
                                    html += '<span class="photo-likes"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photoLikes+'</a></span>';
                                }
                                if (reposts) {
                                    html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photoReposts+'</a></span>';
                                }
                                if (comments) {
                                    html += '<span class="photo-comments"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photoComments+'</a></span>';
                                }
                                html += '</div>';
                            }
                            html += '</div>';
                        }
                        html += '</div>';
                        html += '<div class="vk-img-desc">'+fotoDesc+'</div>';
                        html += '</div>';

                        if (i+1 == maxIndex) {
                            block.find('.vk_photo').append(html);
                            block.find('.vk_photo').addClass('loaded');
                        } else {
                            getVkAutorGallery(block, photos, user, maxIndex, i+1, html);
                        }
                    }
                });
            };

            var getVkAutorSlider = function (block, photos, user, index, maxIndex, i, html) {
                var likes = block.attr('data-likes'),
                    reposts = block.attr('data-reposts'),
                    comments = block.attr('data-comments'),
                    src = photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                    url = 'https://api.vk.com/method/users.get?user_ids='+photos[i].user_id+'&fields=photo_200&name_case=nom&v=5.62',
                    photoLikes = photos[i].likes.count,
                    photoReposts = photos[i].reposts.count,
                    photoComments = photos[i].comments.count,
                    photoOwnerId = photos[i].owner_id,
                    photoId = photos[i].id,
                    defUser = photos[i].user_id == 100 ? true : false;
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (data) {
                        // console.log(data);
                        var autor = data.response[0];
                        html += '<div class="swiper-slide">';
                        html += '<div class="swiper-slide-block">';
                        html += '<img src="'+src+'" />';
                        html += '<div class="photo-vk-info-full">';
                        if (defUser) {
                            html += '<a href="https://vk.com/'+user.screen_name+'" target="_blank" class="user-info">';
                            html += '<span class="user-info-photo">';
                            html += '<img src="'+user.photo_200+'" />';
                            html += '</span>';
                            html += '<span class="user-info-name">'+user.name+'</span>';
                        } else {
                            html += '<a href="https://vk.com/id'+autor.id+'" target="_blank" class="user-info">';
                            html += '<span class="user-info-photo">';
                            html += '<img src="'+autor.photo_200+'" />';
                            html += '</span>';
                            html += '<span class="user-info-name">'+autor.first_name+' '+autor.last_name+'</span>';
                        }
                        html += '</a>';
                        if (likes || reposts || comments) {
                            html += '<div class="photo-vk-info">';
                            if (likes) {
                                html += '<span class="photo-likes"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photoLikes+'</a></span>';
                            }
                            if (reposts) {
                                html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photoReposts+'</a></span>';
                            }
                            if (comments) {
                                html += '<span class="photo-comments"><a href="https://vk.com/photo'+photoOwnerId+'_'+photoId+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photoComments+'</a></span>';
                            }
                            html += '</div>';
                        }
                        html += '</div>';
                        html += '</div>';
                        html += '</div>';

                        if (i+1 == maxIndex) {
                            block.find('.vk_photo').append(html).addClass('loaded');
                            var swiper = new Swiper('.swiper-container-vk'+index, {
                                pagination: '.swiper-pagination-vk'+index,
                                nextButton: '.swiper-button-next-vk'+index,
                                prevButton: '.swiper-button-prev-vk'+index,
                                slidesPerView: 1,
                                paginationClickable: true,
                                spaceBetween: 30,
                                loop: true,
                                centeredSlides: true,
                                autoplay: 5000,
                                autoplayDisableOnInteraction: false,
                                effect: 'slide'
                            });
                        } else {
                            getVkAutorSlider(block, photos, user, index, maxIndex, i+1, html)
                        }
                    }
                });
            };

            var createVkPhotoPreview = function (block, photos, user, typeSearch) {
                if(!$('.pswp').length) {
                    $('body').append(
                        '<!-- Root element of PhotoSwipe. Must have class pswp. -->'+
                        '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'+
                        '<!-- Background of PhotoSwipe.'+
                        'It\'s a separate element, as animating opacity is faster than rgba(). -->'+
                        '<div class="pswp__bg"></div>'+
                        '<!-- Slides wrapper with overflow:hidden. -->'+
                        '<div class="pswp__scroll-wrap">'+
                        '<!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->'+
                        '<!-- don\'t modify these 3 pswp__item elements, data is added later on. -->'+
                        '<div class="pswp__container">'+
                        '<div class="pswp__item"></div>'+
                        '<div class="pswp__item"></div>'+
                        '<div class="pswp__item"></div>'+
                        '</div>'+
                        '<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->'+
                        '<div class="pswp__ui pswp__ui--hidden">'+
                        '<div class="pswp__top-bar">'+
                        '<!--  Controls are self-explanatory. Order can be changed. -->'+
                        '<div class="pswp__counter"></div>'+
                        '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+
                        '<button class="pswp__button pswp__button--share" title="Share"></button>'+
                        '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+
                        '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+
                        '<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->'+
                        '<!-- element will get class pswp__preloader--active when preloader is running -->'+
                        '<div class="pswp__preloader">'+
                        '<div class="pswp__preloader__icn">'+
                        '<div class="pswp__preloader__cut">'+
                        '<div class="pswp__preloader__donut"></div>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'+
                        '<div class="pswp__share-tooltip"></div>'+
                        '</div>'+
                        '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">'+
                        '</button>'+
                        '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">'+
                        '</button>'+
                        '<div class="pswp__caption">'+
                        '<div class="pswp__caption__center"></div>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>'
                    );
                }

                if (typeSearch == 'by-user') {
                    var likes = block.attr('data-likes'),
                        reposts = block.attr('data-reposts'),
                        comments = block.attr('data-comments'),
                        html = '';
                    for (var i = 0; i < photos.length; i++) {
                        var src = photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                            fotoHref = photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                            fofoWidth = photos[i].width,
                            fotoHeight = photos[i].height,
                            fofoSize = fofoWidth + 'x' + fotoHeight,
                            fotoDesc = photos[i].text;
                        html += '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">';
                        html += '<a href="'+src+'" itemprop="contentUrl" data-size="'+fofoSize+'">';
                        html += '<img src="'+fotoHref+'" itemprop="thumbnail" alt="" class="img-responsive gallery-pic" />';
                        html += '</a>';
                        html += '<figcaption itemprop="caption description">';
                        html += '<span class="photo-desc">'+fotoDesc+'</span>';
                        if (user) {
                            html += '<a href="https://vk.com/id'+user.id+'" target="_blank" class="user-info">';
                            html += '<span class="user-info-photo">';
                            html += '<img src="'+user.photo_200+'" />';
                            html += '</span>';
                            html += '<span class="user-info-name">'+user.first_name+' '+user.last_name+'</span>';
                            html += '</a>';
                        }
                        if (likes || reposts || comments) {
                            html += '<span class="photo-vk-info">';
                            if (likes) {
                                html += '<span class="photo-likes"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photos[i].likes.count+'</a></span>';
                            }
                            if (reposts) {
                                html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photos[i].reposts.count+'</a></span>';
                            }
                            if (comments) {
                                html += '<span class="photo-comments"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photos[i].comments.count+'</a></span>';
                            }
                            html += '</span>';
                        }
                        html += '</figcaption>';
                        html += '</figure>';
                    }
                    block.find('.vk_photo').append(html);
                    block.find('.vk_photo').wrapInner('<div class="photoswipe-slider" itemscope itemtype="http://schema.org/ImageGallery"></div>');
                    $(document).ready(function () {
                        initPhotoSwipeFromDOM('.photoswipe-slider');
                    });
                    block.find('.vk_photo').addClass('loaded');
                } else {
                    if (user) {
                        block.find('.vk_photo').wrapInner('<div class="photoswipe-slider" itemscope itemtype="http://schema.org/ImageGallery"></div>');
                        var idx = 0,
                            html = '';
                        getVkAutorPreview(block, photos, user, photos.length, idx, html);
                    } else {
                       var likes = block.attr('data-likes'),
                            reposts = block.attr('data-reposts'),
                            comments = block.attr('data-comments'),
                            html = '';
                        for (var i = 0; i < photos.length; i++) {
                            var src = photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                                fotoHref = photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130,
                                fofoWidth = photos[i].width,
                                fotoHeight = photos[i].height,
                                fofoSize = fofoWidth + 'x' + fotoHeight,
                                fotoDesc = photos[i].text;
                            html += '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">';
                            html += '<a href="'+src+'" itemprop="contentUrl" data-size="'+fofoSize+'">';
                            html += '<img src="'+fotoHref+'" itemprop="thumbnail" alt="" class="img-responsive gallery-pic" />';
                            html += '</a>';
                            html += '<figcaption itemprop="caption description">';
                            html += '<span class="photo-desc">'+fotoDesc+'</span>';
                            if (likes || reposts || comments) {
                                html += '<span class="photo-vk-info">';
                                if (likes) {
                                    html += '<span class="photo-likes"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photos[i].likes.count+'</a></span>';
                                }
                                if (reposts) {
                                    html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photos[i].reposts.count+'</a></span>';
                                }
                                if (comments) {
                                    html += '<span class="photo-comments"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photos[i].comments.count+'</a></span>';
                                }
                                html += '</span>';
                            }
                            html += '</figcaption>';
                            html += '</figure>';
                        }
                        block.find('.vk_photo').append(html);
                        block.find('.vk_photo').wrapInner('<div class="photoswipe-slider" itemscope itemtype="http://schema.org/ImageGallery"></div>');
                        $(document).ready(function () {
                            initPhotoSwipeFromDOM('.photoswipe-slider');
                        });
                        block.find('.vk_photo').addClass('loaded');
                    }
                }
            };

            var createVkPhotoGallery = function (block, photos, user, typeSearch) {
                if (typeSearch == 'by-user') {
                    var likes = block.attr('data-likes'),
                        reposts = block.attr('data-reposts'),
                        comments = block.attr('data-comments'),
                        html = '';
                    for (var i = 0; i < photos.length; i++) { 
                        html += '<div class="vk-img">';
                        html += '<div class="vk-info">';
                        html += '<img src="'+photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130+'" />';
                        if (likes || reposts || comments || user) {
                            html += '<div class="photo-vk-info-full">';
                            if (user) {
                                html += '<span class="user-info">';
                                html += '<span class="user-info-photo">';
                                html += '<img src="'+user.photo_200+'" />';
                                html += '</span>';
                                if (typeSearch == 'by-user') {
                                    html += '<span class="user-info-name">'+user.first_name+' '+user.last_name+'</span>';
                                } else {
                                    html += '<span class="user-info-name">'+user.name+'</span>';
                                }
                                html += '</span>';
                            }
                            if (likes || reposts || comments) {
                                html += '<div class="photo-vk-info">';
                                if (likes) {
                                    html += '<span class="photo-likes"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photos[i].likes.count+'</a></span>';
                                }
                                if (reposts) {
                                    html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photos[i].reposts.count+'</a></span>';
                                }
                                if (comments) {
                                    html += '<span class="photo-comments"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photos[i].comments.count+'</a></span>';
                                }
                                html += '</div>';
                            }
                            html += '</div>';
                        }
                        html += '</div>';
                        html += '<div class="vk-img-desc">'+photos[i].text+'</div>';
                        html += '</div>';
                    }
                    block.find('.vk_photo').append(html);
                    block.find('.vk_photo').addClass('loaded');
                } else {
                    if (user) {
                        var idx = 0,
                            html ='';
                        getVkAutorGallery(block, photos, user, photos.length, idx, html);
                    } else {
                        var likes = block.attr('data-likes'),
                            reposts = block.attr('data-reposts'),
                            comments = block.attr('data-comments'),
                            html = '';
                        for (var i = 0; i < photos.length; i++) {
                            html += '<div class="vk-img">';
                            html += '<div class="vk-info">';
                            html += '<img src="'+photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130+'" />';
                            if (likes || reposts || comments) {
                                html += '<div class="photo-vk-info-full">';
                                html += '<div class="photo-vk-info">';
                                if (likes) {
                                    html += '<span class="photo-likes"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photos[i].likes.count+'</a></span>';
                                }
                                if (reposts) {
                                    html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photos[i].reposts.count+'</a></span>';
                                }
                                if (comments) {
                                    html += '<span class="photo-comments"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photos[i].comments.count+'</a></span>';
                                }
                                html += '</div>';
                                html += '</div>';
                            }
                            html += '</div>';
                            html += '<div class="vk-img-desc">'+photos[i].text+'</div>';
                            html += '</div>';
                        }
                        block.find('.vk_photo').append(html);
                        block.find('.vk_photo').addClass('loaded');
                    }
                }
            };

            var createVkPhotoSlider = function (block, photos, user, typeSearch) {
                if (typeSearch == 'by-user') {
                    var likes = block.attr('data-likes'),
                        reposts = block.attr('data-reposts'),
                        comments = block.attr('data-comments'),
                        index = (Math.random() * 100000).toFixed(0),
                        html = '';
                    for (var i = 0; i < photos.length; i++) {
                        html += '<div class="swiper-slide">';
                        html += '<div class="swiper-slide-block">';
                        html += '<img src="'+photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130+'" />';
                        if (likes || reposts || comments || user) {
                            html += '<div class="photo-vk-info-full">';
                            if (user) {
                                html += '<span class="user-info">';
                                html += '<span class="user-info-photo">';
                                html += '<img src="'+user.photo_200+'" />';
                                html += '</span>';
                                if (typeSearch == 'by-user') {
                                    html += '<span class="user-info-name">'+user.first_name+' '+user.last_name+'</span>';
                                } else {
                                    html += '<span class="user-info-name">'+user.name+'</span>';
                                }
                                html += '</span>';
                            }
                            if (likes || reposts || comments) {
                                html += '<div class="photo-vk-info">';
                                if (likes) {
                                    html += '<span class="photo-likes"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photos[i].likes.count+'</a></span>';
                                }
                                if (reposts) {
                                    html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photos[i].reposts.count+'</a></span>';
                                }
                                if (comments) {
                                    html += '<span class="photo-comments"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photos[i].comments.count+'</a></span>';
                                }
                                html += '</div>';
                            }
                            html += '</div>';
                        }
                        html += '</div>';
                        html += '</div>';
                    }
                    block.find('.vk_photo').append(html);
                    block.addClass('swiper-container swiper-container-vk'+index);
                    block.find('.vk_photo').addClass('swiper-wrapper');
                    block.append(
                        '<div class="swiper-pagination swiper-pagination-vk'+index+'"></div>'+
                        '<div class="swiper-button-next swiper-button-next-vk'+index+'"></div>'+
                        '<div class="swiper-button-prev swiper-button-prev-vk'+index+'"></div>'
                    );
                    block.find('.vk_photo').addClass('loaded');
                    var swiper = new Swiper('.swiper-container-vk'+index, {
                        pagination: '.swiper-pagination-vk'+index,
                        nextButton: '.swiper-button-next-vk'+index,
                        prevButton: '.swiper-button-prev-vk'+index,
                        slidesPerView: 1,
                        paginationClickable: true,
                        spaceBetween: 30,
                        loop: true,
                        centeredSlides: true,
                        autoplay: 5000,
                        autoplayDisableOnInteraction: false,
                        effect: 'slide'
                    });
                } else {
                    if (user) {
                        var index = (Math.random() * 100000).toFixed(0);
                        block.addClass('swiper-container swiper-container-vk'+index);
                        block.find('.vk_photo').addClass('swiper-wrapper');
                        block.append(
                            '<div class="swiper-pagination swiper-pagination-vk'+index+'"></div>'+
                            '<div class="swiper-button-next swiper-button-next-vk'+index+'"></div>'+
                            '<div class="swiper-button-prev swiper-button-prev-vk'+index+'"></div>'
                        );
                        var idx = 0,
                            html = '';
                        getVkAutorSlider(block, photos, user, index, photos.length, idx, html);
                    } else {
                        var likes = block.attr('data-likes'),
                            reposts = block.attr('data-reposts'),
                            comments = block.attr('data-comments'),
                            index = (Math.random() * 100000).toFixed(0),
                            html = '';
                        for (var i = 0; i < photos.length; i++) {
                            html += '<div class="swiper-slide">';
                            html += '<div class="swiper-slide-block">';
                            html += '<img src="'+photos[i].photo_2560 ? photos[i].photo_2560 : photos[i].photo_1280 ? photos[i].photo_1280 : photos[i].photo_807 ? photos[i].photo_807 : photos[i].photo_604 ? photos[i].photo_604 : photos[i].photo_130+'" />';
                            if (likes || reposts || comments) {
                                html += '<div class="photo-vk-info-full">';
                                html += '<div class="photo-vk-info">';
                                if (likes) {
                                    html += '<span class="photo-likes"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> '+photos[i].likes.count+'</a></span>';
                                }
                                if (reposts) {
                                    html += '<span class="photo-reposts"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-bullhorn" aria-hidden="true"></i> '+photos[i].reposts.count+'</a></span>';
                                }
                                if (comments) {
                                    html += '<span class="photo-comments"><a href="https://vk.com/photo'+photos[i].owner_id+'_'+photos[i].id+'" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> '+photos[i].comments.count+'</a></span>';
                                }
                                html += '</div>';
                                html += '</div>';
                            }
                            html += '</div>';
                            html += '</div>';
                        }
                        block.find('.vk_photo').append(html);
                        block.addClass('swiper-container swiper-container-vk'+index);
                        block.find('.vk_photo').addClass('swiper-wrapper');
                        block.append(
                            '<div class="swiper-pagination swiper-pagination-vk'+index+'"></div>'+
                            '<div class="swiper-button-next swiper-button-next-vk'+index+'"></div>'+
                            '<div class="swiper-button-prev swiper-button-prev-vk'+index+'"></div>'
                        );
                        block.find('.vk_photo').addClass('loaded');
                        var swiper = new Swiper('.swiper-container-vk'+index, {
                            pagination: '.swiper-pagination-vk'+index,
                            nextButton: '.swiper-button-next-vk'+index,
                            prevButton: '.swiper-button-prev-vk'+index,
                            slidesPerView: 1,
                            paginationClickable: true,
                            spaceBetween: 30,
                            loop: true,
                            centeredSlides: true,
                            autoplay: 5000,
                            autoplayDisableOnInteraction: false,
                            effect: 'slide'
                        });
                    }
                }
            };

            $('.tag-vk_photo-block').each(function(index) {
                var block = $(this),
                    typeSearch = $(this).attr('data-type-search')
                    type = $(this).attr('data-type-show'),
                    user = $(this).attr('data-user'),
                    album = $(this).attr('data-album'),
                    count = $(this).attr('data-count'),
                    url = '',
                    userInfo = $(this).attr('data-user-info'),
                    urlUserInfo = false,
                    offset = $(this).attr('data-offset'),
                    rev = $(this).attr('data-rev') ? $(this).attr('data-rev') : 0;

                    if (typeSearch == 'by-user') {
                        url = 'https://api.vk.com/method/photos.get?owner_id='+user+'&album_id='+album+'&count='+count+'&offset='+offset+'&extended=1&rev='+rev+'&v=5.62';
                        if (userInfo) {
                            urlUserInfo = 'https://api.vk.com/method/users.get?user_ids='+user+'&fields=photo_200&name_case=nom&v=5.62';
                        }
                    } else {
                        url = 'https://api.vk.com/method/photos.get?owner_id=-'+user+'&album_id='+album+'&count='+count+'&offset='+offset+'&extended=1&rev='+rev+'&v=5.62';
                        if (userInfo) {
                            urlUserInfo = 'https://api.vk.com/method/groups.getById?group_ids='+user+'&fields=photo_200&v=5.62';
                        }
                    }

                    getVkPhoto(url, block, type, urlUserInfo, typeSearch);
            });
        }


        if ($('.tag-vk_post-block').length) {
            var addScript = function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0]; 
                if (d.getElementById(id)) return; 
                js = d.createElement(s); js.id = id; 
                js.src = "//vk.com/js/api/openapi.js?139"; 
                fjs.parentNode.insertBefore(js, fjs);
            };
            addScript(document, 'script', 'vk_openapi_js');
            $('.tag-vk_post-block').each(function(index, el) {
                var type = $(this).attr('data-type'),
                    code = $(this).find('.data-code').text();

                if (type == 'post') {
                    code = code.split('<script type="text/javascript">');
                    $(this).find('.vk_post_wrp').append(code[0]);
                    code = code[1].split("(document, 'script', 'vk_openapi_js'));");
                    code = code[1].split('</script>');
                    code = code[0];
                    $(this).find('.vk_post_wrp').append('<script type="text/javascript">'+code+'</script>');
                } else if (type == 'poll') {
                    $(this).find('.vk_post_wrp').append('<div id="vk_poll-'+index+'"></div>');
                    code = code.split('<div id="vk_poll"></div>');
                    code = code[1].split('vk_poll');
                    code = code[0] + 'vk_poll-' +index + code[1];
                    if (!window.VK || !VK.Widgets) {
                        var self = $(this);
                        var timerID =  setInterval(function(){
                            if (window.VK && VK.Widgets) {
                                clearInterval(timerID)
                                self.find('.vk_post_wrp').append(code);
                            }
                        },100);
                    } else {
                        $(this).find('.vk_post_wrp').append(code);
                    }
                }
            });
        }


        if ($('.tag-js-block').length) {
            $('.tag-js-block').each(function(index, el) {
                $(this).find('.js_wrp').html($(this).find('.data-code').text());
            });
        }


        if ($('.tag-instagram2-block').length) {
            $('.tag-instagram2-block .instagram-profile').each(function(index, el) {
                var dataLink = $(this).attr('data-link'),
                    self = $(this);

                $.ajax({
                    url: dataLink,
                    success:function(data){
                        var logo = data.match(/"profile_pic_url":"([^"]+)"/)[1],
                            followers = data.match(/"followed_by":{"count":([0-9]+)}/)[1];

                        if (followers.length > 3) {
                            followers = followers.split('');

                            var flw = '';
                            for (var i = 0; i < followers.length-3; i++) {
                                flw += followers[i];
                            }

                            if (followers[followers.length-3] == '0') {
                                followers = flw + 'k'
                            } else {
                                followers = flw + '.' + followers[followers.length-3] + 'k'
                            }
                        }

                        self.find('.instagram-profile-link').append('<img src="'+logo+'">');
                        self.find('.instagram-profile-followers-count').text(followers);
                    }
                });
            });
        }


        // redactor iframe
        if ($('.out-ext-info iframe').length) {
            $('.out-ext-info iframe').each(function () {
                if (!$(this).parent('ins').length && !$(this).parents('.vk_post_wrp').length) {
                    var player = $(this),
                        width = player.attr('width') ? player.attr('width') : player.width(),
                        height = player.attr('height') ? player.attr('height') : player.height(),
                        newWidth = player.parent().width(),
                        newHeight = height-(height*(((width-newWidth)*100)/width)/100);
                    player.width(newWidth).height(newHeight);
                    player.css({
                        'max-width': newWidth,
                        'max-height': newHeight
                    });
                }
            });
        }


        if ($('#gallery .block_conteiner').length) {
            if(!$('.pswp').length) {
                $('body').append(
                    '<!-- Root element of PhotoSwipe. Must have class pswp. -->'+
                    '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'+
                    '<!-- Background of PhotoSwipe.'+
                    'It\'s a separate element, as animating opacity is faster than rgba(). -->'+
                    '<div class="pswp__bg"></div>'+
                    '<!-- Slides wrapper with overflow:hidden. -->'+
                    '<div class="pswp__scroll-wrap">'+
                    '<!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->'+
                    '<!-- don\'t modify these 3 pswp__item elements, data is added later on. -->'+
                    '<div class="pswp__container">'+
                    '<div class="pswp__item"></div>'+
                    '<div class="pswp__item"></div>'+
                    '<div class="pswp__item"></div>'+
                    '</div>'+
                    '<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->'+
                    '<div class="pswp__ui pswp__ui--hidden">'+
                    '<div class="pswp__top-bar">'+
                    '<!--  Controls are self-explanatory. Order can be changed. -->'+
                    '<div class="pswp__counter"></div>'+
                    '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+
                    '<button class="pswp__button pswp__button--share" title="Share"></button>'+
                    '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+
                    '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+
                    '<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->'+
                    '<!-- element will get class pswp__preloader--active when preloader is running -->'+
                    '<div class="pswp__preloader">'+
                    '<div class="pswp__preloader__icn">'+
                    '<div class="pswp__preloader__cut">'+
                    '<div class="pswp__preloader__donut"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'+
                    '<div class="pswp__share-tooltip"></div>'+
                    '</div>'+
                    '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">'+
                    '</button>'+
                    '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">'+
                    '</button>'+
                    '<div class="pswp__caption">'+
                    '<div class="pswp__caption__center"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                );
            }
            var html = '<div class="photoswipe-slider gallry-photoswipe-slider hide hidden" itemscope itemtype="http://schema.org/ImageGallery">';
            $('#gallery .block_conteiner a'). each(function(index, el) {
                var src = '';
                if ($(this).find('img').attr('src-original')) {
                    src = $(this).find('img').attr('src-original');
                } else {
                    src = $(this).attr('href');
                }
                var fotoHref = $(this).find('img').attr('src'),
                    fofoWidth = $(this).find('img').attr('img-width') && $(this).find('img').attr('img-width') !== '0' ? $(this).find('img').attr('img-width') : $(this).find('img').width(),
                    fotoHeight = $(this).find('img').attr('img-height') && $(this).find('img').attr('img-height') !== '0' ? $(this).find('img').attr('img-height') : $(this).find('img').height(),
                    fofoSize = fofoWidth + 'x' + fotoHeight;

                if (fofoWidth > fotoHeight && fofoWidth < 800) {
                    fotoHeight = fotoHeight-(fotoHeight*(((fofoWidth-800)*100)/fofoWidth)/100);
                    fofoWidth = 800;
                    fofoSize = fofoWidth + 'x' + fotoHeight;
                } else {
                    fofoWidth = fofoWidth-(fofoWidth*(((fotoHeight-800)*100)/fotoHeight)/100),
                    fotoHeight = 800;
                    fofoSize = fofoWidth + 'x' + fotoHeight;
                }

                html += '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">';
                html += '<a href="'+src+'" itemprop="contentUrl" data-size="'+fofoSize+'">';
                html += '<img src="'+fotoHref+'" itemprop="thumbnail" alt="" class="img-responsive gallery-pic" />';
                html += '</a>';
                html += '<figcaption itemprop="caption description"></figcaption>';
                html += '</figure>';

                $(this).off().on('click', function (e) {
                    e.preventDefault();
                    $('.gallry-photoswipe-slider figure').eq(index).trigger('click');
                });
            });
            html += '</div>';

            $('body').append(html);
            initPhotoSwipeFromDOM('.photoswipe-slider');
        }



        if ($('.photos .photo').length) {
            if(!$('.pswp').length) {
                $('body').append(
                    '<!-- Root element of PhotoSwipe. Must have class pswp. -->'+
                    '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'+
                    '<!-- Background of PhotoSwipe.'+
                    'It\'s a separate element, as animating opacity is faster than rgba(). -->'+
                    '<div class="pswp__bg"></div>'+
                    '<!-- Slides wrapper with overflow:hidden. -->'+
                    '<div class="pswp__scroll-wrap">'+
                    '<!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->'+
                    '<!-- don\'t modify these 3 pswp__item elements, data is added later on. -->'+
                    '<div class="pswp__container">'+
                    '<div class="pswp__item"></div>'+
                    '<div class="pswp__item"></div>'+
                    '<div class="pswp__item"></div>'+
                    '</div>'+
                    '<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->'+
                    '<div class="pswp__ui pswp__ui--hidden">'+
                    '<div class="pswp__top-bar">'+
                    '<!--  Controls are self-explanatory. Order can be changed. -->'+
                    '<div class="pswp__counter"></div>'+
                    '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+
                    '<button class="pswp__button pswp__button--share" title="Share"></button>'+
                    '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+
                    '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+
                    '<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->'+
                    '<!-- element will get class pswp__preloader--active when preloader is running -->'+
                    '<div class="pswp__preloader">'+
                    '<div class="pswp__preloader__icn">'+
                    '<div class="pswp__preloader__cut">'+
                    '<div class="pswp__preloader__donut"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'+
                    '<div class="pswp__share-tooltip"></div>'+
                    '</div>'+
                    '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">'+
                    '</button>'+
                    '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">'+
                    '</button>'+
                    '<div class="pswp__caption">'+
                    '<div class="pswp__caption__center"></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                );
            }
            $('.photos').each(function(index, el) {
                var html = '<div class="photoswipe-slider" itemscope itemtype="http://schema.org/ImageGallery">';
                $(this).find('.photo a').each(function(index, el) {
                    var src = '';
                    if ($(this).find('img').attr('src-original')) {
                        src = $(this).find('img').attr('src-original');
                    } else {
                        src = $(this).attr('href');
                    }
                    var fotoHref = $(this).find('img').attr('src'),
                        fofoWidth = $(this).find('img').attr('img-width') && $(this).find('img').attr('img-width') !== '0' ? $(this).find('img').attr('img-width') : $(this).find('img').width(),
                        fotoHeight = $(this).find('img').attr('img-height') && $(this).find('img').attr('img-height') !== '0' ? $(this).find('img').attr('img-height') : $(this).find('img').height(),
                        fofoSize = fofoWidth + 'x' + fotoHeight;

                    if (fofoWidth > fotoHeight && fofoWidth < 800) {
                        fotoHeight = fotoHeight-(fotoHeight*(((fofoWidth-800)*100)/fofoWidth)/100);
                        fofoWidth = 800;
                        fofoSize = fofoWidth + 'x' + fotoHeight;
                    } else {
                        fofoWidth = fofoWidth-(fofoWidth*(((fotoHeight-800)*100)/fotoHeight)/100),
                        fotoHeight = 800;
                        fofoSize = fofoWidth + 'x' + fotoHeight;
                    }

                    html += '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">';
                    html += '<a href="'+src+'" itemprop="contentUrl" data-size="'+fofoSize+'">';
                    html += '<img src="'+fotoHref+'" itemprop="thumbnail" alt="" class="img-responsive gallery-pic" />';
                    html += '</a>';
                    html += '<figcaption itemprop="caption description"></figcaption>';
                    html += '</figure>';
                });
                html += '</div>';

                $('.photos').html(html);
            });
            initPhotoSwipeFromDOM('.photoswipe-slider');
        }
    });

    $(window).on('scroll', function () {
        var winWidth = document.body.clientWidth,
            winHeight = document.body.clientHeight,
            scrollVal = $(window).scrollTop();

        // redactor gallery
        if ($('.img-list-wrapper.img-gallery').length) {
            if ($('.appearing-with-a-delay-photo-in-gallery-1').length) {
                $('.appearing-with-a-delay-photo-in-gallery-1 .img-gallery li').each(function() {
                    if ($(this).offset().top < scrollVal + winHeight -100) {
                        $(this).addClass('show-photo');
                    }
                });
            }
        }
    });

    $(window).on('resize', function () {
        var winWidth = document.body.clientWidth,
            winHeight = document.body.clientHeight,
            scrollVal = $(window).scrollTop();

        // redactor gallery
        if ($('.img-list-wrapper.img-gallery').length) {
            if ($('.appearing-with-a-delay-photo-in-gallery-1').length) {
                $('.appearing-with-a-delay-photo-in-gallery-1 .img-gallery li').each(function() {
                    if ($(this).offset().top < scrollVal + winHeight -100) {
                        $(this).addClass('show-photo');
                    }
                });
            }
        }

        // redactor iframe
        if ($('.out-ext-info iframe').length) {
            $('.out-ext-info iframe').each(function () {
                if (!$(this).parent('ins').length && !$(this).parents('.vk_post_wrp').length) {
                    var player = $(this),
                        width = player.attr('width') ? player.attr('width') : player.width(),
                        height = player.attr('height') ? player.attr('height') : player.height(),
                        newWidth = player.parent().width(),
                        newHeight = height-(height*(((width-newWidth)*100)/width)/100);
                    player.width(newWidth).height(newHeight);
                    player.css({
                        'max-width': newWidth,
                        'max-height': newHeight
                    });
                }
            });
        }
    });


    window.vcParallaxSkroll = false;
    if ( 'function' !== typeof(window[ 'vc_rowBehaviour' ]) ) {
        window.vc_rowBehaviour = function () {

            function localFunction() {
                var $elements = $( '[data-vc-full-width="true"]' );
                $.each( $elements, function ( key, item ) {
                    var $el = $( this );
                    $el.addClass( 'vc_hidden' );

                    var $el_full = $el.next( '.vc_row-full-width' );
                    var el_margin_left = parseInt( $el.css( 'margin-left' ), 10 );
                    var el_margin_right = parseInt( $el.css( 'margin-right' ), 10 );
                    var offset = 0 - $el_full.offset().left - el_margin_left;
                    var width = $( window ).width();
                    $el.css( {
                        'position': 'relative',
                        'left': offset,
                        'box-sizing': 'border-box',
                        'width': $( window ).width()
                    } );
                    $el.attr( "data-vc-full-width-init", "true" );
                    $el.removeClass( 'vc_hidden' );
                } );
            }

            $( window ).unbind( 'resize.vcRowBehaviour' ).bind( 'resize.vcRowBehaviour', localFunction );
            localFunction();
        }
    }
    $(document).ready(function () {
        vc_rowBehaviour();
    });
});










// redactor youtube
jQuery(document).on('ready', function () {
    if (jQuery('.tag-youtube-block').length) {  
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
});

function onYouTubeIframeAPIReady () {
    jQuery('.tag-youtube-block').each(function () {
        var tagBlock = jQuery(this),
            type = tagBlock.attr('data-type'),
            channelId = tagBlock.attr('data-channel-id'),
            playlistId = tagBlock.attr('data-playlist-id'),
            ytVideoId = tagBlock.attr('data-video-id'),
            maxResults = tagBlock.attr('data-count'),
            order = tagBlock.attr('data-order'),
            autoplay = tagBlock.attr('data-autoplay'),
            url = '',
            playerVars = {},
            channelSettings = {
                banner: tagBlock.attr('data-channel-banner'),
                logo: tagBlock.attr('data-channel-logo'),
                title: tagBlock.attr('data-channel-title'),
                description: tagBlock.attr('data-channel-description'),
                view: tagBlock.attr('data-channel-view'),
                subscriber: tagBlock.attr('data-channel-subscriber'),
                video: tagBlock.attr('data-channel-video')
            },
            videoInfo = {
                view: tagBlock.attr('data-video-view'),
                like: tagBlock.attr('data-video-like'),
                dislike: tagBlock.attr('data-video-dislike'),
                comment: tagBlock.attr('data-video-comment')
            };

        if (tagBlock.attr('data-controls')) {
            playerVars.controls = 0;
        }
        if (tagBlock.attr('data-iv-load-policy')) {
            playerVars.iv_load_policy = 3;
        }
        if (tagBlock.attr('data-rel')) {
            playerVars.rel = 0;
        }
        if (tagBlock.attr('data-modestbranding')) {
            playerVars.modestbranding = 1;
        }
        if (tagBlock.attr('data-showinfo')) {
            playerVars.showinfo = 0;
        }

        if (type =='channel') {
            if (channelSettings.banner || channelSettings.logo || channelSettings.title || channelSettings.description || channelSettings.view || channelSettings.subscriber || !maxResults) {
                var urlСhannel = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id='+channelId+'&key=AIzaSyD02UAe16jkW_z2__v6DRJ280cHTIh7CZw';
                getСhannelInfo(urlСhannel, tagBlock, channelSettings);
            } else {
                url = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+channelId+"&order="+order+"&maxResults="+maxResults+"&type=video&key=AIzaSyD02UAe16jkW_z2__v6DRJ280cHTIh7CZw";
                getVideoByURL(url, tagBlock, type, playerVars, channelSettings, videoInfo);
            }
        } else if (type == 'playlist') {
            url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+playlistId+"&maxResults="+maxResults+"&key=AIzaSyD02UAe16jkW_z2__v6DRJ280cHTIh7CZw";
            getVideoByURL(url, tagBlock, type, playerVars, channelSettings, videoInfo);
        } else if (type == 'video') {
            var playerId = 'player'+((Math.random()*100000).toFixed(0));
            tagBlock.find('.youtube-playlist').append('<div class="youtube-player"><div id="'+playerId+'"></div></div>');
            createYouTubePlayer (playerId, ytVideoId, playerVars, videoInfo, channelSettings);
            var player = tagBlock.find('.youtube-playlist #'+playerId);
            playerSize(player);
        } 
    });
}

function getVideoByURL (url, block, type, playerVars, channelSettings, videoInfo) {
    jQuery.ajax({
        url: url,
        dataType: "jsonp",
        success: function (data) {
            // console.log(data.items);
            var playerItems = data.items,
                urlСhannel = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id='+data.items[0].snippet.channelId+'&key=AIzaSyD02UAe16jkW_z2__v6DRJ280cHTIh7CZw';
            if (type == 'channel') {
                createYouTubePlayersChannel(block, playerVars, playerItems, videoInfo);
            } else if (type == 'playlist') {
                createYouTubePlayersPlaylist(block, playerVars, playerItems, videoInfo);
            }
            if (channelSettings.banner || channelSettings.logo || channelSettings.title || channelSettings.description || channelSettings.view || channelSettings.subscriber) {
                getСhannelInfo(urlСhannel, block, channelSettings);
            }
        }
    });
}

function getСhannelInfo (urlСhannel, block, channelSettings) {
    jQuery.ajax({
        url: urlСhannel,
        dataType: "jsonp",
        success: function (data) {
            // console.log(data);
            var html = '',
                logo = data.items[0].snippet.thumbnails.high ? data.items[0].snippet.thumbnails.high.url : data.items[0].snippet.thumbnails.medium ? data.items[0].snippet.thumbnails.medium.url : data.items[0].snippet.thumbnails.default.url,
                hasLogo = channelSettings.logo ? ' youtube-channel-has-logo' : '';
            html += '<div class="youtube-channel-wrp">'; //style="background: url('+data.items[0].brandingSettings.image.bannerImageUrl+') center center no-repeat; background-size: cover;"
            if (channelSettings.banner) {
                html += '<div class="youtube-channel-banner">';
                html += '<img src="'+data.items[0].brandingSettings.image.bannerImageUrl+'">';
                html += '</div>';
            }
            html += '<div class="youtube-channel-info'+hasLogo+'">';
            if (channelSettings.logo) {
                html += '<div class="youtube-channel-logo">';
                html += '<a href="https://www.youtube.com/channel/'+data.items[0].id+'" target="_blank">';
                html += '<img src="'+logo+'">';
                html += '</a>';
                html += '</div>';
            }
            html += '<div class="youtube-channel-text">';
            if (channelSettings.title) {
                html += '<div class="youtube-channel-title">';
                html += '<a href="https://www.youtube.com/channel/'+data.items[0].id+'" target="_blank">'+data.items[0].snippet.title+'</a>';
                html += '</div>';
            }
            if (channelSettings.description) {
                html += '<div class="youtube-channel-description">'+data.items[0].snippet.description+'</div>';
            }
            if (channelSettings.view) {
                html += '<div class="youtube-channel-view">Просмотров: <span>'+data.items[0].statistics.viewCount+'</span></div>';
            }
            if (channelSettings.subscriber) {
                html += '<div class="youtube-channel-subscriber">Подписчиков: <span>'+data.items[0].statistics.subscriberCount+'</span></div>';
            }
            if (channelSettings.video) {
                html += '<div class="youtube-channel-video">Видео: <span>'+data.items[0].statistics.videoCount+'</span></div>';
            }
            html += '</div>';
            html += '</div>';
            html += '</div>';
            block.prepend(html).addClass('channel-info-loaded');
        }
    });
}

function createYouTubePlayersChannel (block, playerVars, playerItems, videoInfo) {
    for (var i = 0; i < playerItems.length; i++) {
        var playerId = 'player'+((Math.random()*100000).toFixed(0));
            videoId = playerItems[i].id.videoId;
        block.find('.youtube-playlist').append('<div class="youtube-player"><div id="'+playerId+'"></div></div>');
        createYouTubePlayer(playerId, videoId, playerVars, videoInfo);
        var player = block.find('.youtube-playlist #'+playerId);
        playerSize(player);
    }
}

function createYouTubePlayersPlaylist (block, playerVars, playerItems, videoInfo) {
    for (var i = 0; i < playerItems.length; i++) {
        var playerId = 'player'+((Math.random()*100000).toFixed(0));
            videoId = playerItems[i].snippet.resourceId.videoId;
        block.find('.youtube-playlist').append('<div class="youtube-player"><div id="'+playerId+'"></div></div>');
        createYouTubePlayer(playerId, videoId, playerVars, videoInfo);
        var player = block.find('.youtube-playlist #'+playerId);
        playerSize(player);
    }
}

function createYouTubePlayer (playerId, videoId, playerVars, videoInfo, channelSettings) {
    var player = new YT.Player(playerId, {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars: playerVars
    });

    if (videoInfo.view || videoInfo.like || videoInfo.dislike || videoInfo.comment) {
        jQuery.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id='+videoId+'&maxResults=1&key=AIzaSyD02UAe16jkW_z2__v6DRJ280cHTIh7CZw',
            dataType: "jsonp",
            success: function (data) {
                // console.log(data);
                var viewCountArr = data.items[0].statistics.viewCount.split(''),
                    viewCount = '';
                for (var i = viewCountArr.length - 1, j = 1; i >= 0; i--) {
                    if (j%3 == 0) {
                        viewCount = ' ' + viewCountArr[i] + viewCount;
                    } else {
                        viewCount = viewCountArr[i] + viewCount;
                    }
                    j++;
                }
                var html = '';
                html += '<div class="video-info">';
                if (videoInfo.view) {
                    html += '<div class="video-view">';
                    html += '<span class="video-view-count">';
                    html += viewCount;
                    html += '</span>';
                    html += ' просмотров';
                    html += '</div>';
                }
                if (videoInfo.like) {
                    html += '<div class="video-like">';
                    html += '<span class="video-like-count">';
                    html += data.items[0].statistics.likeCount;
                    html += '</span>';
                    html += ' лайков';
                    html += '</div>';
                }
                if (videoInfo.dislike) {
                    html += '<div class="video-dislike">';
                    html += '<span class="video-dislike-count">';
                    html += data.items[0].statistics.dislikeCount;
                    html += '</span>';
                    html += ' дизлайков';
                    html += '</div>';
                }
                if (videoInfo.comment) {
                    html += '<div class="video-comment">';
                    html += '<span class="video-comment-count">';
                    html += data.items[0].statistics.commentCount;
                    html += '</span>';
                    html += ' комментариев';
                    html += '</div>';
                }
                html += '</div>';
                jQuery('#'+playerId).closest('.youtube-player').addClass('video-info-loaded').append(html);
            }
        });
    }

    if (channelSettings && (channelSettings.banner || channelSettings.logo || channelSettings.title || channelSettings.description || channelSettings.view || channelSettings.subscriber)) {
        var block = jQuery('#'+playerId).closest('.tag-youtube-block');
        jQuery.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+videoId+'&maxResults=1&key=AIzaSyD02UAe16jkW_z2__v6DRJ280cHTIh7CZw',
            dataType: "jsonp",
            success: function (data) {
                // console.log(data);
                var urlСhannel = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id='+data.items[0].snippet.channelId+'&key=AIzaSyD02UAe16jkW_z2__v6DRJ280cHTIh7CZw';
                getСhannelInfo(urlСhannel, block, channelSettings);
            }
        });
    }
}

function onPlayerReady (event) {
    var $ = jQuery;

    $(event.target.a).closest('.youtube-player').data('player', event.target);

    $(event.target.a).closest('.youtube-playlist').hasClass('autoplay') ? event.target.playVideo() : false;

    $(event.target.a).closest('.youtube-playlist').hasClass('mute') ? event.target.mute() : false;
}

function onPlayerStateChange (event) {
    var $ = jQuery,
        $player = $(event.target.a),
        id = $player.attr('id'),
        target = event.target,
        playerWrapper = $player.closest('.youtube-player');

    switch(event.data) {
        case 0:
            // воспроизведение видео завершено
            playerWrapper.removeClass('video-load video-pouse video-play').addClass('video-end');
            $player.trigger('videoEnd@'+id, target);
            break;
        case 1:
            // воспроизведение
            playerWrapper.removeClass('video-load video-pouse video-end').addClass('video-play');
            $player.trigger('videoPlay@'+id, target);
            break;
        case 2:
            // пауза
            playerWrapper.removeClass('video-load video-play video-end').addClass('video-pouse');
            $player.trigger('videoPouse@'+id, target);
            break;
        case 3:
            // буферизация
            playerWrapper.removeClass('video-pouse video-play video-end').addClass('video-load');
            $player.trigger('videoLoad@'+id, target);
    }
}

function playerSize (player) {
    var player = player,
        width = player.parent().width(),
        height = 9-(9*(((16-width)*100)/16)/100);
    player.width(width).height(height);
    player.css({
        'max-width': width,
        'max-height': height
    });
}