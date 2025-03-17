// CREATE A SIMPLE HTML FORM THAT ALLOWS THE USER TO ENTER THEIR USERNAME, ROLL Number, AND MARKS FOR FIVE SUBJECTS. ONCE THE USER CLICKS THE "CREATE RESULT" BUTTON ,DISPLAY THE FOLLOWING ON THE SCREEN:

// TOTAL MARKS OBTAINED
// PERCENTAGE
// GRADE

var username = dosument.querySelector('#useranme');
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

function calculateResult(){
    var totalMarks = 500;
    var grade;
    var obtained marks = +chemmarks.value + +phyMarks.value + +compMarks.value + +engmarks.value + +mathsmarks.value
    
     var percentage = obtainedMarks / totalMarks * 100

     if(percentage >= 80){
        grade = "A+"
     } else if(percentage >= 70){
        grade = "A"{
            else if(percentage >= 60){
                grade = "B"
            }
        }
     }
}