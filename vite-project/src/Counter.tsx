import {useState, useRef} from 'react'

function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const refCount = useRef(0);

    const increaseCount = () => {
        refCount.current += 1;
        console.log(`refCount current value =${refCount.current}`);

    }

    const asyncCount = () => {
        setCount1(refCount.current);
        setCount2(c => c + 1);
    }

    return (
        <>
            <h2>Counter</h2>
            <p>count1 = {count1}</p>
            <p>count2 = {count2}</p>

            <button onClick={increaseCount}>useRef</button>
            <button onClick={asyncCount}>useState</button>
        </>
    );
}

export default Counter