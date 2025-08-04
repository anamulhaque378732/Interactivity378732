import { useState } from 'react';

let initialCounters = [0, 0, 0];


const ReplacingAnArray = () => {

    const [counters, setCounters] = useState(initialCounters)
    const handleIncrementClick = (index) => {
        const nextCounter = counters.map((c, i) => {
            if (i === index) {
                return c + 1;
            } else {
                return c;
            }
        })
        setCounters(nextCounter)



    };


    return (
        <div>


            <ul className="border m-20 p-20 rounded-2xl">
                {
                    counters.map((counter, i) => (
                        <li key={i}>
                            {counter}
                            <button className="bg-amber-500 text-3xl p-2" onClick={() => { handleIncrementClick(i) }}>+1</button>
                        </li>

                    ))
                }
            </ul>















        </div>
    );
};

export default ReplacingAnArray;