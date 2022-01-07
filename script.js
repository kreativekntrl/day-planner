var saveBtn = $(".saveBtn");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var textBox;
var timeDivId;

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
    localStorage.setItem(timeDiv, textBox);
};

//Updates current time div and changes colors
var currentHour = moment().format("H");
currentHour = parseInt(currentHour);

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
    }
}
updateDiv();


