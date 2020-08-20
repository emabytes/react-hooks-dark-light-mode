import React, { useState } from 'react';

const DarkLightMode = () => {
    const [isLight, setBackground] = useState(true)
    return (
        <article className={isLight ? "light" : "dark"} id="container">
            <h1>{isLight ? "Light" : "Dark"}</h1>
            <button onClick={() => setBackground(!isLight)}>{isLight ? "Change to dark" : "Change to light"}</button>
        </article>
    );
}

export default DarkLightMode;