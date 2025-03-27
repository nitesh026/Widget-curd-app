import React from 'react'
import '../css/Widget.css'

const addWidgets = () => {
    
}


const AddWidget = () => {
  return (
    <div>
        <label className='label'>
            Name:
            <input className='input' type='text'/>
        </label>
        <label className='label'>
            Description:
            <input className='description' type='text'/>
        </label>
        <label className='label'>
            Price:
            <input className='price' type='text'/>
        </label>
        <button className='button' onClick={addWidgets}>Add Widget</button>
    </div>
  )
}

export default AddWidget