$(document).ready(function(){
    $('.filter-btn').on('click', function(){
        var filter = $(this).data('filter');
        if(filter == 'all'){
            $('.filter').show();
        }else{
            $('.filter').hide();
            $('.filter[data-category="'+filter+'"]').show();
        }
    });
});