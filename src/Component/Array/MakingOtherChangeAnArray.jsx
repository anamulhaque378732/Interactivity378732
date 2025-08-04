import { useState } from 'react';
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
];
const MakingOtherChangeAnArray = () => {

    const [list, setList] = useState(initialList);

    const handleClick = () => {
        const nextList = [...list]
        nextList.reverse();
        setList(nextList);


    };
    return (
        <div className="text-black border p-2 m-5 rounded-2xl">
            <button onClick={handleClick} className="text-2xl bg-gray-300 rounded-2xl font-bold p-5 m-2"> Reverse</button>
            <ul className="text-2xl font-bold p-2 m-6 ">
                {
                    list.map(artwork => (
                        <li key={artwork.id}>{artwork.title}</li>
                    ))}
            </ul>




        </div>
    );
};

export default MakingOtherChangeAnArray;