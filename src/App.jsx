import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})



  useEffect(() => {
    const getLocalStorage = () => {
      const savePatients = JSON.parse(localStorage.getItem('patients')) || [];

      setPatients(savePatients)
    }
    getLocalStorage()
  }, []) // this is executed only once 

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const eliminatePatient = (id) => { // this function is executed in the patient but i need the array of the patients and the id throught listpatiens
    const updatePatients = patients.filter(element => element.id !== id) // FILTERS DONT MUTE THE ARRAY ORIGINAL IT CREATE A NEW ONE

    setPatients(updatePatients)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patient={patient}
          patients={patients}
          setPatients={setPatients}
          setPatient={setPatient}
        />
        <ListPatients 
          patients={patients}
          setPatient={setPatient}
          eliminatePatient={eliminatePatient}/>
      </div>
    </div>
  )
}

export default App


