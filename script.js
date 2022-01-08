var saveBtn = $(".saveBtn");
var textBox;
var timeDivId;

var currentHour = moment().format("H");
currentHour = parseInt(currentHour);

//on planner open current day is displayed 
//moment function updates a header with date
var currentDate = moment().format("[Today is ]dddd, MMMM Do");
$("#currentDay").text(currentDate);

//holding current hour to store text when user clicks saveBtn
saveBtn.on("click", function () {
    timeDivId = $(this).parent().attr("id");
    textBox = $(this).siblings(".description").val();
    storeText();
})

//Saves user input and stores to local storage 
//happens when save button is clicked
function storeText(){
    localStorage.setItem(timeDivId, textBox);
};


//Updates current time div and changes colors
//retrieves value from local storage and sets it as text
function updateDiv() {
    for (var hour = 9; hour <= 17; hour++) {
        var div = $("#hour-" + hour);
        if (hour < currentHour) {
            div.addClass("past");
        } else if (hour === currentHour) {
            div.addClass("present");
        } else {
            div.addClass("future");
        }  
        div.children().eq(1).text(localStorage.getItem("hour-" + hour));
    }
}
updateDiv();


