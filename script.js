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
var timeDiv;

var timeArray = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

//on planner open current day is displayed 
    //moment function updates a header with date
var currentDate = moment().format("[Today is ]dddd, MMMM Do");
$("#currentDay").text(currentDate);

//holding current hour to store text when user clicks saveBtn
saveBtn.on("click", function () {
    timeDiv = $(this).parent().attr("id");
    textBox = $(this).siblings(".description").val();
    storeText();
})

//Saves user input and stores to local storage 
//loops through text inputs and stores all text
function storeText(){
    localStorage.setItem(timeDiv, textBox);
};

//Updates current time 

//Loops through our array of times and updates the color of the div
function updateDiv () {
    var currentTime = moment("1PM", "hA").format("hA");
    for (var i = 0; i < timeArray.length; i++) {
        if (parseInt(timeArray[i].text()) === parseInt(timeArray[4].text())){
            timeArray[i].addClass("present");
        } else if (parseInt(timeArray[i].text()) < parseInt(timeArray[4].text())){
            timeArray[i].addClass("past");
        } else {
            timeArray[i].addClass("future");
        }
    }
}

updateDiv();