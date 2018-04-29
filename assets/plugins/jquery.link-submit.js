
jQuery(function ($) {

    //TODO:
    /*
     $(document).on('click', '[data-confirm]', function (e, self) {
     // Prevent Self Clicking
     if (!self) {
     var clickedee = this;
     var success = function (ok) {
     if (ok) {
     if ($(clickedee).hasClass('js-link-post')) {
     $(clickedee).trigger('click', [true]);
     } else if ($(clickedee).attr('href')) {
     window.location = $(clickedee).attr('href');
     } else if ($(clickedee).closest('form').length) {
     $(clickedee).closest('form').submit();
     }
     }
     };
     
     if (!e.shiftKey) {
     e.preventDefault();
     e.stopImmediatePropagation();
     $('<div>' + $(this).attr('data-confirm') + '</div>').dialog({
     resizable: false,
     //height: 140,
     modal: true,
     buttons: {
     Ok: function () {
     $(this).dialog("close");
     success(true);
     },
     Cancel: function () {
     $(this).dialog("close");
     }
     }
     });
     }
     }
     });
     */

    $(document).on('mousedown touchstart', '[data-confirm]', function (e) {
        // before click, set priority event
        $(this).on('click.link-submit tap.link-submit', function (e) {
            // remove event
            $(this).off('.link-submit');

            // confirm event
            var confirmMessage = $(this).data('confirm').replace("\\n", "\n");
            if (!confirm(confirmMessage)) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        });

        // move prioritized event to the beginning
        var types = ['click', 'tap']
        for (var t in types) {
            var currentBindings = $._data(this, 'events')[types[t]];
            if ($.isArray(currentBindings)) {
                currentBindings.unshift(currentBindings.pop());
            }
        }
    });

    $(document).on('click', '[data-method]', function (e, force) {
        if ($(this).data('is-processing-click') && force !== true) {
            e.preventDefault();
            return false;
        }
        $(this).data('is-processing-click', true);

        var method = $(this).data('method') ? $(this).data('method') : 'POST';
        if (force === true) {
            method = 'FORCE_' + method;
        }

        e.preventDefault();
        $.ajax({
            url: $(this).attr('href'),
            method: method,
            data: $(this).data('post'),
            dataType: 'jsonp',
            context: this,
            success: function (data) {
                console.log('link-submit return data:', data);

                /*if (data.message) {
                 $.infoAlert({
                 header: t.text(data.message),
                 message: JSON.stringify(data),
                 type: 'success'
                 });
                 $(this).data('is-processing-click', false);
                 }
                 
                 if (data.alert) {
                 $.infoAlert({
                 header: t.text(data.alert),
                 message: JSON.stringify(data),
                 type: 'warning'
                 });
                 $(this).data('is-processing-click', false);
                 }*/

                if (data.redirect) {
                    window.location = data.redirect;
                }

                if (data.refresh) {
                    window.location = window.location;
                    window.location.reload();
                }

                if (data.success) {
                    $(this).trigger('success', [data]);

                    if ($(this).data('remove')) {
                        $($(this).data('remove')).remove();
                    }

                    if ($(this).data('refresh') == '1') {
                        window.location = window.location;
                        window.location.reload();
                    }

                    $(this).data('is-processing-click', false);
                }

                var confirmMessage = $(this).data('force-confirm').replace("\\n", "\n");
                if (data.is_force && confirmMessage && confirm(confirmMessage)) {
                    $(this).trigger('click', true);
                } else {
                    $(this).data('is-processing-click', false);
                }
            },
            error: function (xhr) {
                console.log('xhrError', xhr);
                $(this).data('is-processing-click', false);
            }
        });
    });

});
