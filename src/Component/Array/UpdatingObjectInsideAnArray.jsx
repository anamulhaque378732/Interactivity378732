import { useState } from 'react';
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];
const UpdatingObjectInsideAnArray = () => {

    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    const handleToggleMyList = (artworkId, nextSeen) => {
        // const myNextList = [...myList];
        // const artWork = myNextList.find(a => a.id === artWorkId);

        // // console.log(artWork);

        // artWork.seen = nextSeen;
        // setMyList(myNextList);
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        }));
    };
    const handleToggleYourList = (artworkId, nextSeen) => {
        // const yourNextList = [...yourList];
        // const artwork = yourNextList.find(a => a.id === artWorkId);
        // artwork.seen = nextSeen;
        // setYourList(yourNextList)
        setYourList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        }));

    };
    return (
        <div className="mx-20">
            <h1 className="text-3xl font-bold p-4 m-5"> Art Bucket List</h1>



            <ItemList atWorks={myList} onToggle={handleToggleMyList}></ItemList>
            <h1 className="text-3xl font-bold p-4 m-5"> My list of art to see: </h1>
            <ItemList atWorks={yourList} onToggle={handleToggleYourList}></ItemList>


        </div>
    );
};


function ItemList({ atWorks, onToggle }) {
    return (
        <>

            <ul>
                {
                    atWorks.map(atWork => (
                        <li key={atWork.id}>
                            <label >
                                <input
                                    type="checkbox"
                                    checked={atWork.seen}
                                    onChange={e => {
                                        onToggle(
                                            atWork.id,
                                            e.target.checked

                                        );
                                    }}
                                />
                                {atWork.title}
                            </label>

                        </li>
                    ))}
            </ul>

        </>
    )
};


















export default UpdatingObjectInsideAnArray;