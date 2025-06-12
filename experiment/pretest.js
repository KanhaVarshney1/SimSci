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
      question: "1.What is the main purpose of Thevenin’s Theorem in circuit analysis?",  ///// Write the question inside double quotes
      answers: {
        a: " To convert a DC circuit into an AC equivalent.",                  ///// Write the option 1 inside double quotes
        b: " To simplify a linear two-terminal network into a single voltage source and resistor.",                  ///// Write the option 2 inside double quotes
        c: "To analyze non-linear circuits with components like diodes",                  ///// Write the option 3 inside double quotes
        d: "To calculate the maximum power dissipation in a circuit"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "2. When determining the Thevenin voltage (Vth) across two terminals, what condition must be applied to the load?:",  ///// Write the question inside double quotes
      answers: {
        a: "Short-circuit the terminals",                  ///// Write the option 1 inside double quotes
        b: " Connect a test current source to the terminals",                  ///// Write the option 2 inside double quotes
        c: "Open-circuit the terminals",                  ///// Write the option 3 inside double quotes
        d: "Replace the load with a known resistor"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },     
    {
      question: "3. How is the Thevenin resistance (Rth) calculated for a circuit with independent sources?",  ///// Write the question inside double quotes
       answers: {
         a: "Sum all resistors in the circuit",                  ///// Write the option 1 inside double quotes
         b: "Measure the short-circuit current across the terminals",                  ///// Write the option 2 inside double quotes
         c: "Deactivate all independent sources and find the equivalent resistance across the terminals",                  ///// Write the option 3 inside double quotes
         d: "Calculate the voltage drop across the load resistor"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
     }, 
     {
      question: "4. A circuit has a Thevenin equivalent with Vth = 20V and Rth = 4Ω. If a 6Ω load resistor is connected across the terminals, what is the current through the load?",  ///// Write the question inside double quotes
       answers: {
         a: "2A",                  ///// Write the option 1 inside double quotes
         b: "3A",                  ///// Write the option 2 inside double quotes
         c: "2.5A",                  ///// Write the option 3 inside double quotes
         d: "5A"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "a"                ///// Write the correct option inside double quotes
     },
                                ///// To add more questions, copy the section below 
    									                  ///// this line


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