(function() {
    const myQuestions = [{
            question: "In what city was Jesus born?",
            answers: {
                a: "Jerusalem",
                b: "Bethlehem",
                c: "Nazareth"
            },
            correctAnswer: "b"
        },
        {
            question: "What type of insects did John the Baptist eat in the desert?",
            answers: {
                a: "Bees",
                b: "Crickets",
                c: "Locusts"
            },
            correctAnswer: "c"
        },
        {
            question: "How many books are in the New Testament?",
            answers: {
                a: "37",
                b: "27",
                c: "33",
            },
            correctAnswer: "b"
        },
        {
            question: "What is the shortest book in the New Testament?",
            answers: {
                a: "1 John",
                b: "Jude",
                c: "2 John",
            },
            correctAnswer: "c"
        },
        {
            question: "Who were the first apostles called to follow Jesus?",
            answers: {
                a: "Peter and Andrew",
                b: "James and John",
                c: "Peter and Paul",
            },
            correctAnswer: "a"
        },
        {
            question: "What was the profession of Matthew in the Bible",
            answers: {
                a: "Fisherman",
                b: "Shepherd",
                c: "Tax collector",
            },
            correctAnswer: "c"
        },
        {
            question: "Who wrote the Acts of the Apostles?",
            answers: {
                a: "Paul",
                b: "Luke",
                c: "Peter",
            },
            correctAnswer: "b"
        },
        {
            question: "What is the common name given to the first four books of the New Testament?",
            answers: {
                a: "The New Testament",
                b: "The History of Jesus",
                c: "The Gospels",
            },
            correctAnswer: "c"
        },
        {
            question: "Who ordered the death of John the Baptist? ",
            answers: {
                a: "Herod Agrippa",
                b: "Pontius Pilate",
                c: "Herod Antipas",
            },
            correctAnswer: "c"
        },
        {
            question: "In the book of Matthew, where does Jesus’s first public sermon take place?",
            answers: {
                a: "On the mount",
                b: "At a weeding",
                c: "In the Market square",
            },
            correctAnswer: "a"
        },

    ];

    function buildQuiz() {

        const output = [];


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answers = [];


            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label id="${questionNumber}${letter}" href="#">
    <input type="radio" name="question${questionNumber}" value="${letter}"} id="${questionNumber}${letter}"">
    ${letter} :
    ${currentQuestion.answers[letter]}
    </label>`
                );
            }

            output.push(
                `<div class="slide">
    <div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>
    </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `label input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            const answerID = (answerContainer.querySelector(selector) || {}).id;
            const selector1 = `label[id="${answerID}"]`; //Select user's answer
            var answerElem = answerContainer.querySelector(selector1);
            const selector2 = `label[id="${questionNumber}${currentQuestion.correctAnswer}"]`;
            var answerElem1 = answerContainer.querySelector(selector2);

            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;

                answerElem.style.background = "#55bd44";
                answerElem.style.fontWeight = "900";

            } else {

                answerElem1.style.color = "#70F85A";
                answerElem.style.background = "#FD2929";
                answerElem1.style.fontWeight = "900";

            }
        });

        resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} correct`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();