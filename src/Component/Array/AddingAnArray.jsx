import { useState } from 'react';
let nextId = 0;
const AddingAnArray = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);



    return (
        <div className=" mx-20 border rounded-2xl my-20 p-10">
            <h1 className="text-3xl font-bold p-2 m-2">Inspiring sculptors : </h1>

            <input className="bg-amber-50 p-2   rounded-xl" type="text" placeholder="Type something" value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists([
                    ...artists,
                    {
                        id: nextId++,
                        name: name
                    }
                ])
            }} className="font-medium text-xl bg-amber-200 p-2 m-2 rounded-xl" > ADD</button>

            <ol>
                {artists.map(artist => (<li key={artist.id}> {artist.name}</li>))}
            </ol>

        </div>
    );
};

export default AddingAnArray;