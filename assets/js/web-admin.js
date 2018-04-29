
jQuery(function ($) {
    // keep signed in
    setInterval(function () {
        $.ajax({
            url: URL + 'ajax/web_admin/online/',
            dataType: 'jsonp'
        });
    }, 10000);
});
