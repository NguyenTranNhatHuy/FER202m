import React, { createContext, useContext, useEffect, useState } from 'react';
import moment from 'moment';


export default function ClockComponent() {
    const [currentDateTime, setCurrentDateTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(moment());
        }, 1000);
    }, []);
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <span className='fs-5'>
                {currentDateTime.format('MMMM Do YYYY, h:mm:ss a')}
            </span>
        </div>
    )
}
