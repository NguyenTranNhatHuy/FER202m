import React, { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';
import { toast } from 'react-toastify';

function QuizApp() {
    const [quizData, setQuizData] = useState({
        questions: [
            {
                id: 1,
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Madrid"],
                answer: "Paris"
            },
            {
                id: 2,
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Mars", "Earth"],
                answer: "Jupiter"
            }
        ],
        currentQuestion: 0,
        score: 0,
        quizEnd: false
    });

    const [selectedAnswer, setSelectedAnswer] = useState('');


    const handleAnswerSelect = (option) => {
        setSelectedAnswer(option);
    };

    const handleSubmitAnswer = () => {
        if (!selectedAnswer) {
            toast.error('Please choose your answer!');
            return; // Prevent further execution
        }
        const currentQuestion = quizData.questions[quizData.currentQuestion];
        if (selectedAnswer === currentQuestion.answer) {
            setQuizData(prevState => ({
                ...prevState,
                score: prevState.score + 1
            }));
        }
        moveToNextQuestion();
    };

    const moveToNextQuestion = () => {
        const nextQuestionIndex = quizData.currentQuestion + 1;
        if (nextQuestionIndex < quizData.questions.length) {
            setQuizData(prevState => ({
                ...prevState,
                currentQuestion: nextQuestionIndex
            }));
            setSelectedAnswer('');
        } else {
            setQuizData(prevState => ({
                ...prevState,
                quizEnd: true
            }));
        }
    };

    const handleReplay = () => {
        setQuizData({
            ...quizData,
            currentQuestion: 0,
            score: 0,
            quizEnd: false
        });
        setSelectedAnswer('');
    };


    const currentQuestion = quizData.questions[quizData.currentQuestion];
    const isLastQuestion = quizData.currentQuestion === quizData.questions.length - 1;

    return (
        <div className='mt-5 d-flex justify-content-center align-items-center'>
            {!quizData.quizEnd ? (
                <div className='border rounded p-4'>
                    <Question
                        questionid={currentQuestion.id}
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        selectedAnswer={selectedAnswer}
                        onAnswerSelect={handleAnswerSelect}
                        onSubmitAnswer={handleSubmitAnswer}
                        isLastQuestion={isLastQuestion}
                    />
                </div>
            ) : (
                <div>
                    <Result
                        score={quizData.score}
                        onReplay={handleReplay}
                    />
                </div>
            )}
        </div>
    );
}

export default QuizApp;
