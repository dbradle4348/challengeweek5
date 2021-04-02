// current date and time
$(document).ready(function () {
    $("#currentDay").text(moment().formatmoment().format('MMMM Do YYYY'));
    $("saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

function tracker() {
    var rightNow = moment().hour(); 

    //loop time blocks
    $(".time-block").each(function () {
        var blockHour = parsInt($(this).attr("id").split("hour")[1]);
        
        if (blockHour < rightNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockHour === rightNow) {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}

//Get item from local storage
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));

tracker();
})