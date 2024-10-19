import React from 'react';

function Question(props) {
    const { questionid, question, options, selectedAnswer, onAnswerSelect, onSubmitAnswer, isLastQuestion } = props;

    const handleOptionSelect = (option) => {
        onAnswerSelect(option);
    };

    return (
        <div>
            <h2 className='text-danger'><span>Q{questionid}: </span>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li style={{ listStyle: 'none' }} key={index}>
                        <label>
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => handleOptionSelect(option)}
                            />
                            <span className='m-2'></span>{" "}{option}
                        </label>
                    </li>
                ))}
            </ul>
            {isLastQuestion ? (
                <button className='btn btn-success' onClick={onSubmitAnswer}>Submit Answer</button>
            ) : (
                <button className='btn btn-success' onClick={onSubmitAnswer}>Next</button>
            )}
        </div>
    );
}

export default Question;
