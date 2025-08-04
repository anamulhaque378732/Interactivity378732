import { useState } from 'react';

let nextId = 3;
const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];
const InsertingAnArray = () => {
    const [name, setName] = useState('')

    const [artists, setArtists] = useState(initialArtists)
    const handleClick = () => {
        const insertAt = 3; // could be any index
        const nextArtists = [
            //Items before the insertion point
            ...artists.slice(0, insertAt),
            //new item
            {
                id: nextId++, name: name
            },
            // Items after the insertion point:
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    };


    return (
        <div className="my-20 mx-20">
            <h1 className="text-5xl">Inspiring sculptors:</h1>

            <input className="bg-gray-300 p-2 m-4 rounded-2xl" type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <button onClick={handleClick} className="bg-gray-300 p-2 m-2 rounded-xl "> Insert</button>

            <ul className="text-3xl">
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default InsertingAnArray;