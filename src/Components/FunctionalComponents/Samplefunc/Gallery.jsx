import { useState } from 'react';

const Gallery = () => {
    // Correct destructuring of useState
    const [counter, setCount] = useState(0); 

    // Increment function to update the counter
    const increment = () => {
        setCount(counter + 1);
    };
    const decrement = () => {
        setCount(counter - 1);
    };
    const Reset = () => {
        setCount(0);
    };

    return (
        <section>
            <h3 style={{ color: "black" }}>THIS IS GALLERY PAGE</h3>
            <h2 style={{ textAlign: "center", color: "black" }}>Learning state concept</h2>
            <h2 style={{ color: "black" }}>The state of my variable counter is {counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </section>
    );
}

export default Gallery;
