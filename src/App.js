import React from 'react'
import { useState } from 'react';
import Logo from "./Images/logo.png";

const App = () => {

  const [inputData, setInputData] = useState("");
  const [Items, setItems] = useState([])

  // Add Items
  const addItem = () => {
    if (!inputData) {
      setItems([]);
    }
    else {
      setItems([...Items, inputData]);
    }
    setInputData("")
  }

  // delete Items
  const deleteItem = (id) => {
    const updatedItem = Items.filter((elem, index) => {
      return id !== index;
    })
    setItems(updatedItem);
  }

  // Delete All
  const removeAll = () => {
    setItems([])
  }

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <figure>
            <img src={Logo} alt="This is a logo" />
            <figcaption>Add List Here </figcaption>
          </figure>

          <div className="addItem">
            <input type="text"
              placeholder='Add items here'
              value={inputData}
              onChange={(event) => { setInputData(event.target.value) }}
            />

            <i className="fa-solid fa-plus addBtn" title='add item' onClick={addItem} />
          </div>

          <div className="showItems">
            {
              Items.map((eleme, index) => {
                return (

                  <div className="eachItem" key={index}>
                    <h3>{eleme} </h3>
                    <i className="fa-solid fa-trash-can deleteBtn" title='Delete Item' onClick={() => { deleteItem(index) }} />
                  </div>

                )
              })
            }

          </div>
          <div className="deleteAllBtn">
            <button onClick={removeAll}>
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
