import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Showdata } from './components/showData'
import { useContact } from './hooks/contactContext'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const { data, dispatchData } = useContact()
  const [open, setOpen] = useState(false)
  const [inputData, setInputdata] = useState({
    name: '',
    number: '',
  })
  const [EditData, setEditData] = useState(null)

  const openContactsHandle = () => {
    setOpen(!open)
  }

  const { name, number } = inputData
  const { addContact } = data

  const addContactHandler = () => {
    if (EditData) {
      if (name.trim().length > 0 && number.trim().length > 0) {
        dispatchData({ type: 'EDIT_DATA', payload: inputData })
        setInputdata({ name: '', number: '' })
        setEditData(null)
      }
    } else {
      if (name.trim().length > 0 && number.trim().length > 0) {
        dispatchData({
          type: 'ADD_DATA',
          payload: {
            name: name,
            number: number,
            id: uuidv4(),
          },
        })
        setInputdata({ name: '', number: '' })
      }
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
              {!EditData ? ' Add Contact' : 'UpDate Contact'}
            </button>
          </div>
        </div>
        <div className="contact_list_outer">
          <button
            className="see_contect_btn"
            value={open}
            onClick={openContactsHandle}
          >
            See Contacts
          </button>
          {open ? (
            <Showdata
              setInputdata={setInputdata}
              EditData={EditData}
              setEditData={setEditData}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
