import { useState } from 'react';

const UpdatingObject2 = () => {

    const [person, setPerson] = useState({
        firstName: "anamul haque",
        lastName: "bejoy",
        email: "anamulhaaque@gmail.com"
    });


    const handleChange = e => {

        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })



    };


    return (
        <div>
            <label>
                First name:
                <input className="bg-gray-200 p-2 m-2 rounded-xl"
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:
                <input className="bg-gray-200 p-2 m-2 rounded-xl"
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input className="bg-gray-200 p-2 m-2 rounded-xl"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
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

export default UpdatingObject2;