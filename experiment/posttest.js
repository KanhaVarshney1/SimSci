/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What is the primary goal of applying Thevenin's Theorem in the experiment?",  ///// Write the question inside double quotes
      answers: {
        a: "To measure the power dissipation across all resistors",                  ///// Write the option 1 inside double quotes
        b: "To simplify the circuit into an equivalent voltage source and series resistance",                  ///// Write the option 2 inside double quotes
        c: "To calculate the total current supplied by both voltage sources",                  ///// Write the option 3 inside double quotes
        d: "To increase the load voltage across RL"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b,Explanation: Thevenin's Theorem is used to reduce a complex linear circuit to a single voltage source (Vth) and series resistance (Rth) as seen from the load terminals, simplifying analysis."                ///// Write the correct option inside double quotes
    },

    {
      question: " In Case 2(a) of the experiment, with S1 set to Power and S2 to Intermediate, what quantity is determined?",  ///// Write the question inside double quotes
      answers: {
        a: "Load Current (IL)",                  ///// Write the option 1 inside double quotes
        b: "Thevenin Resistance (Rth)",                  ///// Write the option 2 inside double quotes
        c: "Thevenin Voltage (Vth)",                  ///// Write the option 3 inside double quotes
        d: "Short-Circuit Current (Isc)"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c,Explanation: Case 2(a) involves measuring the open-circuit voltage across the load terminals, which is the Thevenin Voltage (Vth)."                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

    
    {
      question: "How are the voltage sources treated in Case 2(b) to calculate Thevenin Resistance (Rth)?",
      answers: {
        a: "They are left as is",
        b: "They are replaced with open circuits ",
        c: "They are replaced with short circuits",
        d: "They are set to zero voltage"
      },
      correctAnswer: "c,Explanation: In Thevenin's Theorem, to find Rth, independent voltage sources are replaced with short circuits to calculate the equivalent resistance across the load terminals."
    },

    {
    question: "In Case 3, how is the load current (IL) calculated using Thevenin’s equivalent circuit?",
    answers: {
      "a": "IL = V1 / (R1 + RL)",
      "b": "IL = Vth / (Rth + RL)",
      "c": "IL = V2 / Rth",
      "d": "IL = Vth / RL"
    },
    correctAnswer: "b,Explanation: The load current in the Thevenin equivalent circuit is calculated as IL = Vth / (Rth + RL), where Vth is the Thevenin voltage and Rth is the Thevenin resistance."
  },
  {
    question: "Why does the experiment require resistor values (R1, R2, R3, RL) to be greater than zero?",
    answers: {
      "a": "To ensure the circuit remains powered",
      "b": "To prevent excessive voltage drops",
      "c": "To avoid division by zero in calculations",
      "d": "To maintain constant current"
    },
    correctAnswer: "c,Explanation: Resistor values must be greater than zero to prevent division by zero in calculations, such as when determining equivalent resistances or currents, which would cause errors in the simulation."
  }
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////