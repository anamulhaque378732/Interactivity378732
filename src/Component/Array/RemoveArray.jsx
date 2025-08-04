import { useState } from 'react';
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
]
const RemoveArray = () => {

    const [artists, setArtists] = useState(initialArtists);



    return (
        <div className=" mx-20 border rounded-2xl my-20 p-10">

            <h1 className="text-3xl font-bold p-2 m-2">Inspiring sculptors : </h1>

            <ul>
                {artists && artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name} {' '}
                        <button className="font-medium text-xl bg-amber-200 p-2 m-2 rounded-xl" onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );

                        }} > Delete</button>

                    </li>



                ))}
            </ul>

            {/* <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul> */}


        </div >
    );
};

export default RemoveArray;