(function ($) {
    $(document).ready(function() {
        $(document).on('click', 'a[data-method]', function(event) {
            event.preventDefault();
            var element = $(event.target).data('method') ? $(event.target) : $(event.target).closest('a[data-method]');

            // Ask for confirmation, return if it is cancelled.
            if (!confirm(element.data('confirm') || 'Are you sure?')) {
                return false;
            }

            // Append and submit the form.
            $('<form>', { action: element.attr('href'), method: 'POST', style: 'display: none;' })
                .append($('<input>', { type: 'hidden', name: '_method', value: element.data('method') }))
                .append($('<input>', { type: 'hidden', name: $('meta[name=_ujs_csrf_token_name]').attr('content'), value: $('meta[name=_ujs_csrf_token]').attr('content') }))
                .insertAfter(element)
                .submit();
        });
    });
}) (jQuery);
