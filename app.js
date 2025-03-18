// CREATE A SIMPLE HTML FORM THAT ALLOWS THE USER TO ENTER THEIR USERNAME, ROLL Number, AND MARKS FOR FIVE SUBJECTS. ONCE THE USER CLICKS THE "CREATE RESULT" BUTTON ,DISPLAY THE FOLLOWING ON THE SCREEN:

// TOTAL MARKS OBTAINED
// PERCENTAGE
// GRADE

var username = dosument.querySelector('#username');
var rollNumber = document.querySelector('#rollNumber');
var chemmarks = document.querySelector('chemmarks');
var phymarks = document.querySelector('#phymarks');
var compmarks = document.querySelector('#compmarks');
var mathsmarks = document.querySelector('#mathsmarks');
var engmarks = document.querySelector('#engmarks');
var stuName = document.querySelector('#stuName');
var stuRollNum = document.querySelector('#stuRollNum');
var stuPercentage = document.querySelector('#stuPercentage');
var stuGrade = document.querySelector('#stuGrade');

function calculateResult() {
    var totalMarks = 500;
    var grade;
    var obtainedmarks = +chemmarks.value + +phyMarks.value + +compMarks.value + +engmarks.value + +mathsmarks.value

    var percentage = obtainedmarks / totalMarks * 100


    if (percentage >= 80) {
        grade = "A+"
    } else if (perentage >= 70) {
        grade = "A"
    } else if (percentage >= 60) {
        grade = "B"
    } else if (percentage >= 50) {
        grade = "C"
    } else {
        grade = "Fail"
    }


    stuName.innerHTML = "useername: " + username.value
    stuRollNum.innerHTML = "roll Number: " + rollNumber.value
    stuPercentage.innerHTML = "percentage: " + percentage + " $"
    stuGrade.innerHTML = "grade: " + grade

}


// var body = document.querySelector('body');

// function changeColor(color) {
//     console.log(color);
//     body.style.backgroundColor = color
// }
