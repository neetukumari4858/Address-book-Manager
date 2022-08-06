import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Showdata } from './components/showData'
import { useContact } from './hooks/contactContext'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const { data, dispatchData } = useContact()
  const [open, setOpen] = useState(false)
  const [inputData, setInputdata] = useState({ name: '', number: '',id:uuidv4() })
  const { name, number } = inputData
  const { addContact } = data

  const addContactHandler = () => {
    if (name.trim().length > 1 && number.trim().length > 1) {
      dispatchData({ type: 'ADD_DATA', payload: inputData })
      setInputdata({ name: '', number: '' })
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="contact_container">
          <h1 className="heading_one">Contacts</h1>
          <div className="input_container">
            <input
              type="text"
              className="input_box"
              placeholder="Enter Name"
              value={name}
              onChange={(e) =>
                setInputdata({ ...inputData, name: e.target.value })
              }
            />

            <input
              type="number"
              className="input_box"
              placeholder="Enter phone number"
              value={number}
              onChange={(e) =>
                setInputdata({ ...inputData, number: e.target.value })
              }
            />

            <button
              className="add_contact_btn"
              value={addContact}
              onClick={addContactHandler}
            >
              Add<span>Contact</span>
            </button>
          </div>
        </div>
        <div className="contact_list_outer">
          <button
            className="see_contect_btn"
            value={open}
            onClick={() => setOpen(!open)}
          >
            See Contacts
          </button>
          {open ? <Showdata /> : null}
        </div>
      </div>
    </div>
  )
}

export default App
