document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const resultElement = document.getElementById('result');
    const submitButton = document.getElementById('submit-answer');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "Cine a pictat 'Noaptea Înstelată'?",
            answers: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
            correctAnswer: "Vincent Van Gogh"
        },
        {
            question: "Care este cel mai lung râu din lume?",
            answers: ["Nil", "Amazon", "Yangtze", "Mississippi"],
            correctAnswer: "Amazon"
        },
        {
            question: "Cine a scris 'Romeo și Julieta'?",
            answers: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "În ce an a început cel de-Al Doilea Război Mondial?",
            answers: ["1939", "1914", "1945", "1923"],
            correctAnswer: "1939"
        },
        {
            question: "Care este elementul chimic cu simbolul 'O'?",
            answers: ["Aur", "Oxigen", "Osmiu", "Oganesson"],
            correctAnswer: "Oxigen"
        }
        // Alte întrebări pot fi adăugate aici
    ];
     

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answersElement.innerHTML = '';

        currentQuestion.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.textContent = answer;
            answerElement.addEventListener('click', () => selectAnswer(answer));
            answersElement.appendChild(answerElement);
        });
    }

    function selectAnswer(answer) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        if (answer === correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionElement.style.display = 'none';
        answersElement.style.display = 'none';
        submitButton.style.display = 'none';
        resultElement.textContent = `Scorul tău este: ${score} din ${questions.length}`;
    }

    submitButton.addEventListener('click', displayQuestion);
    displayQuestion();
});