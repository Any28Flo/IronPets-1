document.addEventListener('DOMContentLoaded', () => {

  $(function() {
    $('#userType').change(function(){
        $('.direction').hide();
        $('#' + $(this).val()).show();
    });
});

}, false);
