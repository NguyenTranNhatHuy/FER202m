import React, { useState } from 'react'

export default function Demo({ title }) {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('black');
    const [color, setColor] = useState('white');


    const changeTheme = () => {
        setTheme(theme === 'black' ? 'white' : 'black');
        setColor(color === 'black' ? 'white' : 'black')
    };
    return (
        <>
            <div>{title}</div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p >Huy</p>
            <button style={{ backgroundColor: theme, color: color }} onClick={changeTheme}>Change Theme</button>
        </>
    )
}
