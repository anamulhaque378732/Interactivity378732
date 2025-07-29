//import { useState } from 'react'
const QueueingSeriesOfStateUpdates = () => {

    // ------- 1    ------
    // const [number, setNumber] = useState(0);


    // ------------------   2 ------------

    // const [pending, setPending] = useState(0)
    // const [completed, setCompleted] = useState(0)
    // async function handleClicked() {
    //     setPending(pending + 1);
    //     await delay(3000);
    //     setPending(p => p - 1)
    //     setCompleted(c => c + 1)
    // };








    return (
        <div>

            {/* ------1------ */}
            {/* <div className="flex">

                <h1 className="text-3xl font-bold p-2 m-2">{number}</h1>

                <button className="btn text-2xl font-bold p-2 m-2 bg-amber-200 rounded-sm" onClick={() => {
                    setNumber(number + 5)
                    setNumber(number => number + 1)
                    setNumber(number => number + 2)

                }

                }>+3</button>

            </div> */}
            {/* <div className="flex">

                <h1 className="text-3xl font-bold p-2 m-2">{number}</h1>

                <button className="btn text-2xl font-bold p-2 m-2 bg-amber-200 rounded-sm" onClick={() => {
                    setNumber(number + 5)
                    setNumber(number => number + 1)
                    setNumber(45)

                }

                }>+3</button>

            </div> */}


            {/* ----------   2       -------- */}
            {/* <div className="flex">

                <h1 className="text-3xl font-bold p-2 m-2">Pending : {pending}</h1>
                <h1 className="text-3xl font-bold p-2 m-2">Completed : {completed} </h1>

                <button onClick={handleClicked} className="btn text-2xl font-bold p-2 m-2 bg-amber-200 rounded-sm">Buy</button>

            </div> */}






        </div>
    );
};




// -------------- 2 ------------
// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }



//   -------------- 3   ---------------

export default QueueingSeriesOfStateUpdates;