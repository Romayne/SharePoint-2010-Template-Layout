$('tr.record').live("mouseover", function () {
    var id = $(this).attr("id").replace('record_count_', '');
    $('tr#record_count_' + id).css("background-image", "url('/Content/images/over.jpg')");
});

$('tr.record').live("mouseout", function () {
    var id = $(this).attr("id").replace('record_count_', '');
    $('tr#record_count_' + id).css("background-image", "none");
});