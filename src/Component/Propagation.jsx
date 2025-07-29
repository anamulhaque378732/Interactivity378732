

const Propagation = () => {
    return (
        <div className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl" onClick={() => {
            console.log('You clicked on the toolbar!');
        }}>
            <button className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl" onClick={() => console.log('Playing!')}>
                Play Movie
            </button>
            <button className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl" onClick={() => console.log('Uploading!')}>
                Upload Image
            </button>
        </div>
    );
};

export default Propagation;