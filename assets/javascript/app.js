// create object tree
var triviaQuestions = [
    {question: "Which 2020 candidate played football in college?",
       multipleChoice: ["John Hickenlooper", "Joe Biden", "Julian Castro", "Cory Booker"],
       correctAnswer: "Cory Booker",
       image: 'assets/images/corybooker.jpg'
        },
    {question: "Which candidate once ate a salad with a comb when an aide dropped her silverware?",
        multipleChoice: ["Amy Klobucher", "Kirsten Gillibrand", "Kamala Harris", "Elizabeth Warren"],
        correctAnswer: "Amy Klobucher",
        image: 'assets/images/amyk.jpg'
        },
    {question: "Which Candidate Speaks 7 Languages?",
        multipleChoice: ["Elizabeth Warren", "Bernie Sanders", "Pete Buttigieg", "Kamala Harris"],
        correctAnswer: "Pete Buttigieg",
        image: 'assets/images/pete-buttigieg.jpg'
        },
    {question: "Which presidential candidate's working class upbringing lead her to become a leading expert on Bankruptcy Law?",
        multipleChoice: ["Kirsten Gillibrand", "Elizabeth Warren", "Amy Klobucher", "Kamala Harris"],
        correctAnswer: "Elizabeth Warren",
        image: 'assets/images/elizabeth-warren.jpg'
        },
    {question: "Which of the Following Candidates is NOT a lawyer?",
        multipleChoice: ["Amy Klobucher", "Kamala Harris", "John Hickenlooper", "Kirsten Gillibrand"],
        correctAnswer: "John Hickenlooper",
        image: 'assets/images/hickenlooper.jpg'
        },
    {question: "Who has not served as a mayor?",
        multipleChoice: ["Cory Booker", "John Hickenlooper", "Pete Buttigieg", "Jay Inslee"],
        correctAnswer: "Jay Inslee",
        image: 'assets/images/jay-inslee.jpg'
        },
    {question: "Who is the only 2020 democratic candidate to refuse to release his tax returns?",
        multipleChoice: ["Kamala Harris", "Joe Biden", "Beto O'Rourke", "Bernie Sanders"],
        correctAnswer: "Bernie Sanders",
        image: 'assets/images/bernie-sanders.jpg'
        },
    {question: "How many years has Joe Biden served in public office?",
        multipleChoice: ["35", "43", "38", "45"],
        correctAnswer: "43",
        image: 'assets/images/bernie-sanders.jpg'
        },
    {question: "Which candidate belonged to a hack-tivist collective?",
        multipleChoice: ["Elizabeth Warren", "Joe Biden", "Bernie Sanders", "Beto O'Rourke"],
        correctAnswer: "Beto O'Rourke",
        image: 'assets/images/beto.jpg'
        },
    {question: "Which candidate kept their seat on the Senate Judicary Committee after Chuck Schumer cut a deal with Republicans?",
        multipleChoice: ["Kirsten Gillibrand", "Kamala Harris", "Cory Booker", "Amy Klobucher"],
        correctAnswer: "Kamala Harris",
        image: 'assets/images/kamala.jpg'
    },
    {question: "Who has a twin?",
        multipleChoice: ["Julian Castro", "Cory Booker", "Jay Inslee", "Bernie Sanders"],
        correctAnswer: "Julian Castro",
        image: 'assets/images/castro.jpg'
        },
    {question: "Which candidate first got their seat by being appointed rather than elected?",
        multipleChoice: ["Kamala Harris", "Kirsten Gillibrand", "Elizabeth Warren", "Cory Booker"],
        correctAnswer: "Kirsten Gillibrand",
        image: 'assets/images/kirsten-gillibrand.jpg'
        },   
    {question: "Which candidate would be better than Donald Trump?",
        multipleChoice: ["Amy Klobucher", "Elizabeth Warren", "Cory Booker", "Kamala Harris", "Bernie Sanders", "Joe Biden", "Kirsten Gillibrand","Julian Castro", "Beto O'Rourke", "Jay Inslee", "John Hickenlooper", "Pete Buttigieg", "All of the Above"],
        correctAnswer: "All of the Above",
        image: 'assets/images/vote_blue.jpg'
        }
];

//set global variables

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 13;
var Q = 0;


$(document).ready(function() {

//hide the question and answer cards at start
$('#question-card').hide();
$('#answer-card').hide();

//This Function Builds the Question Card

function buildQuestionCard (){
    $('#question-card').show();
    $('#question').html(currentQuestion);


}

function buildAnswerCard (){
    var candidateImage = $('<img>');
    $('#answer-card').show();

    var imageUrl = triviaQuestions[Q].image;

          //this puts the link and sourcse together
    candidateImage.attr("src", imageUrl);
    candidateImage.attr("alt", "candidate image");

          //this shows the images before the one in front.
          $("#images").append(candidateImage);
}



//This function needs to grab one question and mcs, then it needs to display in the question card box
    function getQuestion() {
        currentQuestion = triviaQuestions[Q].question;
        console.log(triviaQuestions[Q].question);
        for( var i = 0; i < triviaQuestions[Q].multipleChoice.length; i++) {
            console.log(triviaQuestions[Q].multipleChoice[i]);
            $('#multiple-choice').append("<input type='radio' name='candidate' value='" + triviaQuestions[Q].multipleChoice[i] + "'>" + triviaQuestions[Q].multipleChoice[i] + "<br>")
            }
        buildQuestionCard();
     
    }

// This function works the same as the getQuestion.  Need some help here I think
    function resetQuestion() {
        currentQuestion = triviaQuestions[Q].question;
        console.log(currentQuestion);
        for( var i = 0; i < triviaQuestions[Q].multipleChoice.length; i++) {
            console.log(triviaQuestions[Q].multipleChoice[i]);
            $('#multiple-choice').append("<input type='radio' name='candidate' value='" + triviaQuestions[Q].multipleChoice[i] + "'>" + triviaQuestions[Q].multipleChoice[i] + "<br>")
            }
        buildQuestionCard();
    }

    function checkAnswer() {
        if ($('input[name=candidate]:checked').val() === triviaQuestions[Q].correctAnswer) {
            correctAnswers++;
            unansweredQuestions--;
            Q++;
            buildAnswerCard();
            $('#question-card').hide();
            $('#question').empty();
            $('#multiple-choice').empty();
            $('#answer-card').show();
            setTimeout(1000);
            resetQuestion();
        } else { 
            incorrectAnswers++;
            unansweredQuestions--;
            Q++;
            buildAnswerCard();
            $('#question-card').hide();
            $('#question').empty();
            $('#multiple-choice').empty();
            $('#answer-card').show();
            setTimeout(1000);
            resetQuestion();

            
        } 
    } 





  //My Event Listeners
   $('#get-started').on("click", function(){
       $('#introduction').hide();
       $('#start-image').hide();
       $('#question-card').show();
       getQuestion();
    });

   $('#submit').on("click", function(){
    checkAnswer();
    });

  
});