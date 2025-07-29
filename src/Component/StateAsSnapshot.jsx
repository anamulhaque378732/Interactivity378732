import { useState } from 'react';

const StateAsSnapshot = () => {

    const [number, setNumber] = useState(0)


    return (
        <>
            {/* <div>
                <h1 className="p-4 m-5 text-5xl">{number}</h1>
                <button className="btn p-6 w-24 rounded-2xl m-2 text-2xl bg-amber-500" onClick={() => {
                    setNumber(number + 1)
                    setNumber(number + 1)
                    setNumber(number + 1)

                }} > +3</button>
            </div> */}

            {/* <div>
                <h1 className="p-4 m-5 text-5xl">{number}</h1>
                <button className="btn p-6 w-24 rounded-2xl m-2 text-2xl bg-amber-500" onClick={() => {
                    setNumber(number + 5)
                    alert(number)

                }} > +5</button>
            </div> */}

            <div className="flex">
                <h1 className="p-4 m-5 text-5xl">{number}</h1>
                <button className="btn p-6 w-24 rounded-2xl m-2 text-2xl bg-amber-500" onClick={() => {
                    setNumber(number + 5)
                    setTimeout(() => {
                        alert(number)
                    }, 3000)
                }}

                > +5</button>
            </div>

        </>

    );
};

export default StateAsSnapshot;