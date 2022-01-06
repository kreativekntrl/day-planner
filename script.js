var saveBtn = $(".saveBtn");
var textBox;

//on planner open current day is displayed 
    //moment function updates a header with date
var currentDate = moment().format("[Today is ]dddd, MMMM Do");
$("#currentDay").text(currentDate);


//holding current hour to store text when user clicks saveBtn
saveBtn.on("click", function () {
    var timeDiv = $(this).parent().attr("id");
    textBox = $(this).siblings(".description").val();
    storeText();
})

//Saves user input and stores to local storage 
//loops through text inputs and stores all text
function storeText() {
    localStorage.setItem("description", JSON.stringify(textBox));
}


