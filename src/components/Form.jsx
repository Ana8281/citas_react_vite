import React, { useState, useEffect } from 'react';

import Error from './Error';


function Form ({ patients, setPatients, patient, setPatient}) {
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [symptom, setSymptom] = useState('')
    const [error, setError] = useState(false);

    useEffect(() => {
        if ( Object.keys(patient).length > 0) {
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptom(patient.symptom)
        }

    }, [patient])

    const generateId = () => {
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36)

        return random + date;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if ([ name, owner, email, date, symptom ].includes('')) {
            setError(true);

            return;
        }

        const objectPatient = {
            name,
            owner,
            email,
            date,
            symptom,
        }

        if (patient.id) {
            // Editing register
            objectPatient.id = patient.id; // add id of the patient to object registered
            console.log(objectPatient)
            console.log(patient)

            const patientUpdated = patients.map(patientFromState => patientFromState.id === patient.id ? objectPatient : patientFromState)

            setPatients(patientUpdated)
            setPatient({}) // is very important to clean state to dont have many things store

        } else {
            // New Register
            objectPatient.id = generateId()
            setPatients([...patients, objectPatient])
        }

        setError(false)
        

        //reset the form
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptom('')


    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Following Patients</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="font-bold text-green-400">Managment</span>
            </p>
            <form 
                action="" 
                className="bg-white shadow-md rounded-lg py-10 px-5"
                onSubmit={handleSubmit}
            >
                {error && (
                    <Error><p>fields cant be empty</p></Error>
                )}
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Name Pet</label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        id="pet"
                        type="text"
                        placeholder="Name Pet"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold" input="owner">Name Owner</label>
                    <input 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        type="text"
                        placeholder="Name Owner"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        input="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="exit" className="block text-gray-700 uppercase font-bold">Exit</label>
                    <input 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        input="exit"
                         type="date"
                         value={date}
                         onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label>
                    <textarea
                        id="symptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
                        placeholder="describe the symptoms"
                        value={symptom}
                        onChange={(e) => setSymptom(e.target.value)}
                    />
                </div>


                <input type="submit" className="bg-green-400 w-full p-3 text-white uppercase font-bold hover:bg-green-600 cursor-pointer rounded-md transition-all" value={patient.id ? 'Editing..' : 'Add Patient'} />
            </form>
        </div>
    )
}


export default Form;