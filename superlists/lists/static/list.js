/**
 * Created by boates on 3/4/2015.
 */
$(document).ready(function ($) {
    $('input').on('focus', function(){
        $('.has-error').hide();
    });
});