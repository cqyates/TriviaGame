// create object tree
var triviaQuestions = {

q1: {  question: "Which 2020 candidate played football in college?",
       multipleChoice: ["John Hickenlooper", "Joe Biden", "Julian Castro", "Corey Booker"],
       correctAnswer: 3,
       image: url("../images/corybooker.jpg"),
    }
q2: {   question: "Which candidate once ate a salad with a comb when an aide dropped her silverware?",
        multipleChoice: ["Amy Klobucher", "Kirsten Gillibrand", "Kamala Harris", "Elizabeth Warren"],
        correctAnswer: 0,
        image: url("../images/amyk.jpg"),
    }
q3: {   question: "Which Candidate Speaks 7 Languages?",
        multipleChoice: ["Elizabeth Warren", "Bernie Sanders", "Pete Buttigieg", "Kamala Harris"],
        correctAnswer: 2,
        image: url("../images/pete-buttigieg.jpg"),      
    }
q4: {   question: "Which presidential candidate's working class upbringing lead her to become a leading expert on Bankruptcy Law?",
        multipleChoice: ["Kirsten Gillibrand", "Elizabeth Warren", "Amy Klobucher", "Kamala Harris"],
        correctAnswer: 1,
        image: url("../images/elizabeth-warren.jpg"),
}

q5: {   question: "Which of the Following Candidates is NOT a lawyer?",
        multipleChoice: ["Amy Klobucher", "Kamala Harris", "John Hickenlooper", "Kirsten Gillibrand"],
        correctAnswer: 2,
        image: url('../images/hickenlooper.jpg')
    }
q6: {   question: "Who has not served as a mayor?",
        multipleChoice: ["Cory Booker", "John Hickenlooper", "Pete Buttigieg", "Jay Inslee",],
        correctAnswer: 3,
        image: url('../images/jay-inslee.jpg'),
    }
q7: {   question: "Who is the only 2020 democratic candidate to refuse to release his tax returns?",
        multipleChoice: ["Kamala Harris", "Joe Biden", "Beto O'Rourke", "Bernie Sanders"],
        correctAnswer: 3,
        image: url('../images/bernie-sanders.jpg'),
    }
q8: {   question: "How many years has Joe Biden served in public office?",
        multipleChoice: ["35", "43", "38", "45"],
        correctAnswer: 1,
        image: url('../images/joe-biden.jpg')
    }
q9: {   question: "Which candidate belonged to a hack-tivist collective?",
        multipleChoice: ["Elizabeth Warren", "Joe Biden", "Bernie Sanders", "Beto O'Rourke"],
        correctAnswer: 3,
        image: url('../images/beto.jpg')
    }
q10: {  question: "Which candidate kept their seat on the Senate Judicary Committee after Chuck Shumer cut a deal with Republicans?",
        multipleChoice: ["Kirsten Gillibrand", "Kamala Harris", "Cory Booker", "Amy Klobucher"],
        correctAnswer: 1,
        image: url('../images/kamala.jpg'),
        }
q11: {  question: "Who has a twin?",
        multipleChoice: ["Julian Castro", "Cory Booker", "Jay Inslee", "Bernie Sanders"],
        correctAnswer: 0,
        image: url('../images/castro.jpg'),
        }
q12: {  question: "Which candidate first got their seat by being appointed rather than elected?",
        multipleChoice: ["Kamala Harris", "Kirsten Gillibrand", "Elizabeth Warren", "Cory Booker"],
        image: url('../images/kirsten-gillibrand.jpg')
        }   
q13: {  question: "Which candidate would be better than Donald Trump?",
        multipleChoice: ["Amy Klobucher", "Elizabeth Warren", "Cory Booker", "Kamala Harris", "Bernie Sanders", "Joe Biden", "Kirsten Gillibrand","Julian Castro", "Beto O'Rourke", "Jay Inslee", "John Hickenlooper", "Pete Buttigieg","All of the Above"],
        correctAnswer: 12,
        image: url('../images/vote-blue.jpg')
    }     

}


    // set global variables
    // create a basic card that will hold picture and answers and link to candidate site
    // create a basic card that will hold the question
    // create starting card with a start quiz button with click event attached
    // create a function to start game, attach to click event
    // pick the question (I'd rather go in order than random but either is fine)
    // create click event for each mulipleChoice answer
    // compare user answer against correct answer use if/else statement to compare answer by index number
    // and show correct or incorrect card.
    // where to incorporate timer function for question card????
