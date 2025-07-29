
function AlertButton({ message, children }) {
    return (
        <>
            <button className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl" onClick={() => alert(children)}> {message}</button>

        </>
    );
}
const Toolbar = () => {
    return (
        <>

            <AlertButton message="clicked"> Please ,pardon me</AlertButton>
        </>
    );
};

export default Toolbar;