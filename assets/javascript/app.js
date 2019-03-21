//set global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timer = 30;

// create object tree
var triviaQuestions = [
    
    q1 = {question: "Which 2020 candidate played football in college?",
       multipleChoice: ["John Hickenlooper", "Joe Biden", "Julian Castro", "Corey Booker"],
       correctAnswer: 3,
        },
    q2 = {question: "Which candidate once ate a salad with a comb when an aide dropped her silverware?",
        multipleChoice: ["Amy Klobucher", "Kirsten Gillibrand", "Kamala Harris", "Elizabeth Warren"],
        correctAnswer: 0,
        },
    q3 = {question: "Which Candidate Speaks 7 Languages?",
        multipleChoice: ["Elizabeth Warren", "Bernie Sanders", "Pete Buttigieg", "Kamala Harris"],
        correctAnswer: 2, 
        },
    q4 = {question: "Which presidential candidate's working class upbringing lead her to become a leading expert on Bankruptcy Law?",
        multipleChoice: ["Kirsten Gillibrand", "Elizabeth Warren", "Amy Klobucher", "Kamala Harris"],
        correctAnswer: 1,
        },
    q5 = {question: "Which of the Following Candidates is NOT a lawyer?",
        multipleChoice: ["Amy Klobucher", "Kamala Harris", "John Hickenlooper", "Kirsten Gillibrand"],
        correctAnswer: 2,
        },
    q6 = {question: "Who has not served as a mayor?",
        multipleChoice: ["Cory Booker", "John Hickenlooper", "Pete Buttigieg", "Jay Inslee",],
        correctAnswer: 3,
        },
    q7 = {question: "Who is the only 2020 democratic candidate to refuse to release his tax returns?",
        multipleChoice: ["Kamala Harris", "Joe Biden", "Beto O'Rourke", "Bernie Sanders"],
        correctAnswer: 3,
        },
    q8 = {question: "How many years has Joe Biden served in public office?",
        multipleChoice: ["35", "43", "38", "45"],
        correctAnswer: 1,
        },
    q9 = {question: "Which candidate belonged to a hack-tivist collective?",
        multipleChoice: ["Elizabeth Warren", "Joe Biden", "Bernie Sanders", "Beto O'Rourke"],
        correctAnswer: 3,
        },
    q10 = {question: "Which candidate kept their seat on the Senate Judicary Committee after Chuck Shumer cut a deal with Republicans?",
        multipleChoice: ["Kirsten Gillibrand", "Kamala Harris", "Cory Booker", "Amy Klobucher"],
        correctAnswer: 1,
        },
    q11 = {question: "Who has a twin?",
        multipleChoice: ["Julian Castro", "Cory Booker", "Jay Inslee", "Bernie Sanders"],
        correctAnswer: 0,
        },
    q12 = {question: "Which candidate first got their seat by being appointed rather than elected?",
        multipleChoice: ["Kamala Harris", "Kirsten Gillibrand", "Elizabeth Warren", "Cory Booker"],
        correctAnswer: 1,
        },   
    q13 = {question: "Which candidate would be better than Donald Trump?",
        multipleChoice: ["Amy Klobucher", "Elizabeth Warren", "Cory Booker", "Kamala Harris", "Bernie Sanders", "Joe Biden", "Kirsten Gillibrand","Julian Castro", "Beto O'Rourke", "Jay Inslee", "John Hickenlooper", "Pete Buttigieg","All of the Above"],
        correctAnswer: 12,
        }     
];
    //hide timer at start
    $('#question-card').hide();
    //console.log triviaQuestions array.
    console.log(triviaQuestions);
    //yay works!

    //This function needs to grab one question and it's associated multiple choices, then it needs to display in the question card box
    function getQuestion() {
        for (var i = 0; i > triviaQuestions.length; i++);
        console.log();
    }

    //create an on click event that starts the quiz when you click the get started button
   $('#get-started').on("click", function(){
       $('#introduction').hide();
       $('#start-image').hide();
       $('#question-card').show();
       getQuestion();
       //for loop through triviaQuestion array (inside a function called getQuestion?)
       //display question and multiple choice answers (inside a function called displayQuestion)
       //record the users answer
       //compare user answer to right answer

   })
    
    
  
