import React, { useState } from 'react';

export default function App() {
    const questions = [
        {
            //1
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            //2
            questionText: 'Who is the CEO of Google?',
            answerOptions: [
                { answerText: 'Elon Musk', isCorrect: false },
                { answerText: 'Sundar Pichai', isCorrect: true },
                { answerText: 'Larry Page', isCorrect: false },
                { answerText: 'Mark Zuckenburg', isCorrect: false },
            ],
        },
        {
            //3
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            //4
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            //5
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
        {
            //6
            questionText: 'Which is the tallest Building in the world?',
            answerOptions: [
                { answerText: 'Eiffel tower', isCorrect: true },
                { answerText: 'Burj Khalifa', isCorrect: false },
                { answerText: 'Shanghai tower', isCorrect: false },
                { answerText: 'Merdeka', isCorrect: false },

            ],
        },
        {
            //7
            questionText: 'Who invented the gramophone?',
            answerOptions: [
                { answerText: 'Emile Berliner', isCorrect: true },
                { answerText: 'Thomas Edison', isCorrect: false },
                { answerText: 'Eldridge R. Johnson', isCorrect: false },
                { answerText: 'Alexander Graham Bell', isCorrect: false },

            ],
        },
        {
            //8
            questionText: 'Which is the tallest statue in the world?',
            answerOptions: [
                { answerText: 'Spring Temple Buddha', isCorrect: false },
                { answerText: 'Statue of Liberty', isCorrect: false },
                { answerText: 'The Motherland Calls', isCorrect: false },
                { answerText: 'Statue of Unity', isCorrect: true },

            ],
        },
        {
            //9
            questionText: 'What is actually electricity?',
            answerOptions: [
                { answerText: 'Flow of water', isCorrect: false },
                { answerText: 'Flow of air', isCorrect: false },
                { answerText: 'Flow of electrons', isCorrect: true },
                { answerText: 'Flow of atoms', isCorrect: false },

            ],
        },
        {
            //10
            questionText: 'Which of the following is not an international organisation?',
            answerOptions: [
                { answerText: 'NATO', isCorrect: false },
                { answerText: 'FBI', isCorrect: true },
                { answerText: 'ASEAN', isCorrect: false },
                { answerText: 'FIFA', isCorrect: false },

            ],
        },
        {
            //11
            questionText: 'What is the speed of sound?',
            answerOptions: [
                { answerText: '120 km/h', isCorrect: false },
                { answerText: '1200 km/h', isCorrect: true },
                { answerText: '700 km/h', isCorrect: false },
                { answerText: '400 km/h', isCorrect: false },

            ],
        },
        {
            //12
            questionText: 'What was the first country to use tanks in combat during World War I?',
            answerOptions: [
                { answerText: 'France', isCorrect: false },
                { answerText: 'Japan', isCorrect: false },
                { answerText: 'Britian', isCorrect: true },
                { answerText: 'Germany', isCorrect: false },

            ],
        },
        {
            //13
            questionText: 'What is the main component of the sun?',
            answerOptions: [
                { answerText: 'Gas', isCorrect: true },
                { answerText: 'Molten iron', isCorrect: false },
                { answerText: 'Liquid lava', isCorrect: false },
                { answerText: 'Rock', isCorrect: false },

            ],
        },
        {
            //14
            questionText: 'Where did the powers of Spiderman come from?',
            answerOptions: [
                { answerText: 'He was born with them', isCorrect: false },
                { answerText: 'He was bitten by a radioactive spider', isCorrect: true },
                { answerText: 'He went through a scientific experiment', isCorrect: false },
                { answerText: 'He woke up with them after a dream', isCorrect: false },

            ],
        },
        {
            //15
            questionText: 'Which company is known for publishing the Mario video game?',
            answerOptions: [
                { answerText: 'Xbox', isCorrect: false },
                { answerText: 'SEGA', isCorrect: false },
                { answerText: 'Electronic arts', isCorrect: false },
                { answerText: 'Nintendo', isCorrect: true },

            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {

        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    let winmsg;
    if (score === 15) {
        winmsg = 'Great! You got all of them correct. Score: ' + score + '/' + questions.length;
    } else if (score === 14) {
        winmsg = 'Good. You scored ' + score + ' out of' + questions.length;
    } else if (score === 13) {
        winmsg = 'Good. You scored ' + score + ' out of' + questions.length;
    } else if (score === 12) {
        winmsg = 'Good. You scored ' + score + ' out of' + questions.length;
    } else if (score === 11) {
        winmsg = 'Good. You scored ' + score + ' out of' + questions.length;
    } else if (score === 10) {
        winmsg = 'Good. You scored ' + score + ' out of' + questions.length;
    } else if (score === 9) {
        winmsg = 'Well played. You scored ' + score + ' out of' + questions.length;
    } else if (score === 8) {
        winmsg = 'Well played. You scored ' + score + ' out of' + questions.length;
    } else if (score === 7) {
        winmsg = 'Well played. You scored ' + score + ' out of' + questions.length;
    } else if (score === 6) {
        winmsg = 'Well played. You scored ' + score + ' out of' + questions.length;
    } else if (score === 5) {
        winmsg = 'Better luck next time. You scored ' + score + ' out of' + questions.length;
    } else if (score === 4) {
        winmsg = 'Better luck next time. You scored ' + score + ' out of' + questions.length;
    } else if (score === 3) {
        winmsg = 'Better luck next time. You scored ' + score + ' out of' + questions.length;
    } else if (score === 2) {
        winmsg = 'Better luck next time. You scored ' + score + ' out of' + questions.length;
    } else if (score === 1) {
        winmsg = 'Better luck next time. You scored ' + score + ' out of' + questions.length;
    } else if (score === 0) {
        winmsg = 'Better luck next time. You scored ' + score + ' out of' + questions.length;
    }

    return (
        <div className='main'>
            <div className='title'>
                <h2 className='title-msg'>QuizMaster</h2>
            </div>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>{winmsg}</div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}