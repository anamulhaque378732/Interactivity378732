
function Button({ onSmash, children }) {
    return (

        <button className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl" onClick={e => {
            e.stopPropagation();
            onSmash();
        }}>
            {children}
        </button>
    );
}
const StopPropagation = () => {
    return (
        <div>
            <div className="btn  text-2xl bg-amber-200 p-2 m-2 border rounded-2xl" onClick={() => {
                console.log('You clicked on the toolbar!');
            }}>
                <Button onSmash={() => console.log('Playing!')}>
                    Play Movie
                </Button>
                <Button onSmash={() => console.log('Uploading!')}>
                    Upload Image
                </Button>
            </div>
        </div>
    );
};

export default StopPropagation;