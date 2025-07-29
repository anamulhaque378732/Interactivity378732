
const PreventDefault = () => {
    return (
        <div>
            <form className="border p-2 bg-amber-200 w-72 m-4 rounded-xl" onSubmit={(e) => {
                e.preventDefault();
                console.log("Submitting");

            }}>
                <input className="bg-white p-2 rounded-xl" />
                <button className="p-2">Send</button>
            </form>
        </div>
    );
};

export default PreventDefault;