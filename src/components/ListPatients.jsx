import Patient from './Patient';


const ListPatients = ({patients, setPatient, eliminatePatient}) => {

        return (
            <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            { patients && patients.length
            ?
                (<>
                    <h2 className="font-black text-3xl text-center">List Patiens</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Managment your {''}
                    <span className="font-bold text-green-400">Patients and Dates</span>
                    </p>
                    {patients.map((patient) => <Patient 
                        key={patient.id}
                        patient={patient}
                        setPatient={setPatient}
                        eliminatePatient={eliminatePatient}
                    />)}
                </>)

            :
                 (<>
                    <h2 className="font-black text-3xl text-center">The are not patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Starts creating one {''}
                    <span className="font-bold text-green-400">and will be on this side</span>
                    </p>
                    {patients.map((patient) => <Patient key={patient.id} patient={patient} />)}
                </>)
            }
        </div>
    )
}

export default ListPatients
