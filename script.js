
var present_day = $("#present_day");
var displaypresent_day = moment().format("MMMM DD, YYYY");
present_day.text(displaypresent_day);




function time_batches() {
    var timeNow = moment().hours()
    $(".time-batch").each(function() {
        var timebatch = parseInt($(this).attr('id'));
        $(this).find('textarea').val(localStorage.getItem(timebatch))
        if (timebatch < timeNow) {
            $(this).addClass('finished')
        } else if (timebatch === timeNow) {
            $(this).addClass('now')
        } else {
            $(this).addClass('later')
        }
    })
}
time_batches()

// When Someone clicks on the save button on the time batch, then the text for that event is saved in local storage.
$('button').on('click', function() {
    var btn_text = $(this).siblings('.description').val();
    var to_do = $(this).parent().attr('id');
    localStorage.setItem(to_do, btn_text);
})