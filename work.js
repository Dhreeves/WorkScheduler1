
$(document).ready(function () {
    //display current day & time when loaded
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //saveBtn click listener for to do list and time
    $(".saveBtn").on("click", function () {
        console.log(this);
        var details = $(this).siblings(".todaysToDos").val();
        var time = $(this).parent().attr("id");

        //set up local storage.
        localStorage.setItem(time, details);
    });

    //load saved data from LocalStorage 
    $("#9 .todaysToDos").val(localStorage.getItem("9"));
    $("#10 .todaysToDos").val(localStorage.getItem("10"));
    $("#11 .todaysToDos").val(localStorage.getItem("11"));
    $("#12 .todaysToDos").val(localStorage.getItem("12"));
    $("#13 .todaysToDos").val(localStorage.getItem("13"));
    $("#14 .todaysToDos").val(localStorage.getItem("14"));
    $("#15 .todaysToDos").val(localStorage.getItem("15"));
    $("#16 .todaysToDos").val(localStorage.getItem("16"));
    $("#17 .todaysToDos").val(localStorage.getItem("17"));


    function CompareHours() {
        //get current hours
        var currentHour = moment().hour();

        // loop through hourblock
        $(".hourBlock").each(function () {

            var planHour = parseInt($(this).attr("id"));
            console.log(planHour, currentHour);
            console.log($(this).attr("id"));

            //check times against current hour
            if (planHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");

            }
            else if (planHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    CompareHours();
});

// clear page and local storage 
$("#clear").click(function () {
    localStorage.clear();
    location.reload();
});