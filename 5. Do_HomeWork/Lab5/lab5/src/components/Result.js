import React from 'react';

function Result({ score, onReplay, onShare }) {
    return (
        <div className='p-4 border rounded'>
            <h2 className='text-danger'>Quiz Completed!</h2>
            <p>Your Score: {score}</p>
            <button className='btn btn-danger' onClick={onReplay}>Replay Quiz</button>
        </div>
    );
}

export default Result;
