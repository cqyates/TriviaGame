//set global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timer = 30;
var questionIndex = 0;

// create object tree
var triviaQuestions = [
    
    {question: "Which 2020 candidate played football in college?",
       multipleChoice: ["John Hickenlooper", "Joe Biden", "Julian Castro", "Cory Booker"],
       correctAnswer: 3,
       image: '../images/corybooker.jpg'
        },
    {question: "Which candidate once ate a salad with a comb when an aide dropped her silverware?",
        multipleChoice: ["Amy Klobucher", "Kirsten Gillibrand", "Kamala Harris", "Elizabeth Warren"],
        correctAnswer: 0,
        image: '../images/amyk.jpg'
        },
    {question: "Which Candidate Speaks 7 Languages?",
        multipleChoice: ["Elizabeth Warren", "Bernie Sanders", "Pete Buttigieg", "Kamala Harris"],
        correctAnswer: 2, 
        image: '../images/pete-buttigieg.jpg'
        },
    {question: "Which presidential candidate's working class upbringing lead her to become a leading expert on Bankruptcy Law?",
        multipleChoice: ["Kirsten Gillibrand", "Elizabeth Warren", "Amy Klobucher", "Kamala Harris"],
        correctAnswer: 1,
        image: '../images/elizabeth-warren.jpg'
        },
    {question: "Which of the Following Candidates is NOT a lawyer?",
        multipleChoice: ["Amy Klobucher", "Kamala Harris", "John Hickenlooper", "Kirsten Gillibrand"],
        correctAnswer: 2,
        image: '../images/hickenlooper.jpg'
        },
    {question: "Who has not served as a mayor?",
        multipleChoice: ["Cory Booker", "John Hickenlooper", "Pete Buttigieg", "Jay Inslee"],
        correctAnswer: 3,
        image: '../images/jay-inslee.jpg'
        },
    {question: "Who is the only 2020 democratic candidate to refuse to release his tax returns?",
        multipleChoice: ["Kamala Harris", "Joe Biden", "Beto O'Rourke", "Bernie Sanders"],
        correctAnswer: 3,
        image: '../images/bernie-sanders.jpg'
        },
    {question: "How many years has Joe Biden served in public office?",
        multipleChoice: ["35", "43", "38", "45"],
        correctAnswer: 1,
        image: '../images/bernie-sanders.jpg'
        },
    {question: "Which candidate belonged to a hack-tivist collective?",
        multipleChoice: ["Elizabeth Warren", "Joe Biden", "Bernie Sanders", "Beto O'Rourke"],
        correctAnswer: 3,
        image: '../images/beto.jpg'
        },
    {question: "Which candidate kept their seat on the Senate Judicary Committee after Chuck Shumer cut a deal with Republicans?",
        multipleChoice: ["Kirsten Gillibrand", "Kamala Harris", "Cory Booker", "Amy Klobucher"],
        correctAnswer: 1,
        image: '../images/kamala.jpg'
    },
    {question: "Who has a twin?",
        multipleChoice: ["Julian Castro", "Cory Booker", "Jay Inslee", "Bernie Sanders"],
        correctAnswer: 0,
        image: '../images/castro.jpg'
        },
    {question: "Which candidate first got their seat by being appointed rather than elected?",
        multipleChoice: ["Kamala Harris", "Kirsten Gillibrand", "Elizabeth Warren", "Cory Booker"],
        correctAnswer: 1,
        image: '../images/kirsten-gillibrand.jpg'
        },   
    {question: "Which candidate would be better than Donald Trump?",
        multipleChoice: ["Amy Klobucher", "Elizabeth Warren", "Cory Booker", "Kamala Harris", "Bernie Sanders", "Joe Biden", "Kirsten Gillibrand","Julian Castro", "Beto O'Rourke", "Jay Inslee", "John Hickenlooper", "Pete Buttigieg","All of the Above"],
        correctAnswer: 12,
        image: '../images/vote_blue.jpg'
        }     
];
    $(document).ready(function() {
//hide #question-card at start.
$('#question-card').hide();
$('#answer-card').hide();
$('#submit').on("click", function(){
    result();
});

   

    //This function needs to grab one question and mcs, then it needs to display in the question card box
    function getQuestion() {
       var currentQuestion = triviaQuestions[questionIndex].question;
        $('#question').html(currentQuestion);
        console.log(triviaQuestions[questionIndex].question);
        for( var i = 0; i < triviaQuestions[questionIndex].multipleChoice.length; i++) {
            console.log(triviaQuestions[questionIndex].multipleChoice[i]);
            $('#multiple-choice').append("<input type='radio' name='candidate' value='" + triviaQuestions[questionIndex].multipleChoice[i] + "'>" + triviaQuestions[questionIndex].multipleChoice[i] + "<br>")
            }
        }

    

  	var result = function checkAnswer() {
        if ($('input[name=candidate]:checked').val() == triviaQuestions[questionIndex].correctAnswer) {
            correctAnswers++;
            unansweredQuestions++;
            $('#question-card').hide();
            $('#answer-card').show();
        } else { 
            incorrectAnswers++;
            unansweredQuestions++;
            $('#question-card').hide();
            $('#answer-card').show();
        } 
    } 



    //create an on click event that starts the quiz when you click the get started button -Yayworks
   $('#get-started').on("click", function(){
       $('#introduction').hide();
       $('#start-image').hide();
       $('#question-card').show();
       getQuestion();
     
   });

   //create click event for the submit button
   $('#submit').on("click", function(){
       result();


   });
});