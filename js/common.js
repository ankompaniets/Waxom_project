$ (function() {
     $('.fa-bars') .on('click', function() {

            $('.main-header-menu') .slideToggle(300, function() {

                if($(this).css('display') === 'none') {
                    $(this).removeAttr('style');
                }

            });

     });


 });