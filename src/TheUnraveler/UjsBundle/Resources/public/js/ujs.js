(function ($) {
    $(document).ready(function() {
        $('a[data-method]').each(function(index, el) {
            var element = $(el),
                action  = element.attr('href'),
                method  = element.data('method');
            $.get('/_internal/ujs-form/' + encodeURIComponent(encodeURIComponent(action)) + '/' + method, function(data) {
                var form = $(data);
                form.insertAfter(element);
                element.click(function(e) {
                    e.preventDefault();
                    if (confirm(element.data('confirm') || 'Are you sure?')) {
                        form.submit();
                    }
                });
            });
        });
    });
}) (jQuery);
