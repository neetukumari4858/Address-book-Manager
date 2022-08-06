import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {BsPencilSquare} from "react-icons/bs"

function App() {
  // const [name,setName]=useState("")
  // const [number,setNumber]=useState("")

  const [data,setData]=useState({
    name:"",
    number:""
  })
  const {name,number}=data
  const [addContact,setAddContact]=useState([])
  
  const nameHandler=(e)=>{
    setData({...data,name:e.target.value})
  }
  const numberHandler=(e)=>{
    setData({...data,number:e.target.value})
  }
  const addContactHandler=()=>{
    setAddContact([...addContact,data]) 
    setData({...data, name:"",number:""})

  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="contact_container">
          <h1 className="heading_one">Contacts</h1>
          <div className="input_container">
            <input type="text" className="input_box" placeholder="Enter Name" value={name} onChange={nameHandler}/>

            <input type="number" className="input_box" placeholder="Enter phone number" value={number} onChange={numberHandler} />

            <button className="add_contact_btn" value={addContact} onClick={addContactHandler}>
              Add<span>Contact</span>
            </button>
          </div>
        </div>
        <div className="contact_list_outer">
          <button className="see_contect_btn">See Contacts</button>
          {/* search */}
          <div class="search-container">
            <input className='search_input' placeholder="Search.." name="search" />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          {/* show item */}
          
          {addContact.map(({name,number})=>{
            return (
              <div className='item_div'>
              <p className='paragraph'>{name}<span>{number}</span></p>
              <div>
                <button> <BsPencilSquare /></button>
              </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
