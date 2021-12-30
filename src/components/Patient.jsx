import React from 'react'

function Patients({patient, setPatient, eliminatePatient}) {
    const {id, name, owner, email, date, symptom} = patient;

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
            <span className="font-normal normal-case">{name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
            <span className="font-normal normal-case">{owner}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Date: {''}
            <span className="font-normal normal-case">{date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
            <span className="font-normal normal-case">{symptom}</span>
            </p>

            <div className='flex justify-between mt-10'>
            <button 
                    type="button"
                    className="py-2 px-10 bg-green-400 hover:bg-green-400 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPatient(patient)}
                >Edit
                </button>
                <button 
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-500 text-white font-bold uppercase rounded-lg"
                    onClick={() => eliminatePatient(id)}
                >Remove
                </button>
            </div>

        </div>
    )
}

export default Patients
