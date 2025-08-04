
import { useState } from 'react';
const UpdatingObject = () => {
    const [person, setPerson] = useState({
        firstName: "anamul haque",
        lastName: "bejoy",
        email: "anamulhaaque@gmail.com"
    });


    //------------- 1   - sorasori change hbena --------
    // const handleFirstNameChange = e => {
    //     person.firstName = e.target.value;
    // };

    // const handleLastNameChange = e => {
    //     person.lastName = e.target.value;
    // };


    // const handleEmailChange = e => {
    //     person.email = e.target.value;
    // };

    // ------------------ 2 bar bar copy kora lage      ------------
    // const handleFirstNameChange = e => {
    //     setPerson({ firstName: e.target.value });
    // };

    // const handleLastNameChange = e => {
    //     setPerson({ lastName: e.target.value });
    // };


    // const handleEmailChange = e => {
    //     setPerson({ email: e.target.value });
    // };

    // -------------- use spread operator


    const handleFirstNameChange = e => {
        setPerson({ ...person, firstName: e.target.value });
    };

    const handleLastNameChange = e => {
        setPerson({ ...person, lastName: e.target.value });
    };


    const handleEmailChange = e => {
        setPerson({ ...person, email: e.target.value });
    };



    return (
        <div>
            <label>
                First name:
                <input className="bg-gray-200 p-2 m-2 rounded-xl"
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input className="bg-gray-200 p-2 m-2 rounded-xl"
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input className="bg-gray-200 p-2 m-2 rounded-xl"
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </div>
    );
};

export default UpdatingObject;