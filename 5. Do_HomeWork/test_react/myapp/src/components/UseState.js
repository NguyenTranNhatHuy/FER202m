import React, { useState } from 'react';

export default function UseState() {
    const [color, setColor] = useState('red');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <h1>Demo UseState</h1>
            <label htmlFor="colors">Choose color:</label>
            <select name="colors" id="colors" onChange={handleColorChange}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
            </select>
            <div style={{ backgroundColor: color, width: '100px', height: '100px', marginTop: '10px' }}></div>
        </div>
    );
}
