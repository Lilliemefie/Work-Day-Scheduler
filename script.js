
// Create variable
var saveBtn = document.querySelector('#saveBtn');
var inputText = document.querySelector('.inputText').value

//use Moment.js to set the current date & time
var today = moment();
$("#currentDay").text(today.format('dddd, MMM Do YYYY'));

var curTime = moment();
$("#currentTime").text(curTime.format('h:mm:ss a'));


//if the time already past the current time, the tab color will be  #d3d3d3
//tab is red for the current hour
//tab is green for the future
//after input text and click Save btn, input info go to LocalStorage


function inputDaily(){
    var daily = localStorage.getItem(".inputText");
};

saveBtn.addEventListener("click", function() {
 inputDaily;
    var inputText = document.querySelector('.inputText').value;
    localStorage.setItem("textarea",inputText);

});

window.onload = function(){
    var refreshPage = localStorage.getItem(inputText);
}