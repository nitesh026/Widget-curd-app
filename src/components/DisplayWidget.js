import React from 'react';
import '../css/Widget.css';

const DisplayWidget = () => {
    const data =
    [
        {"name": "Laptop","description": "This is HP laptop","price": "21000"},
        {"name": "Mobile","description": "Realme mobile","price": "11000" },
        {"name": "Tab","description": "This is Samsung Tab","price": "10000"},
        {"name": "VIP","description": "This is Safari VIP","price": "5000"},
        {"name": "Mouse","description": "This is Logitech mouse","price": "500"}
    ];
  return (
    <div className="table-container">
        <table className="table">
            <thead>
           <tr className="th">
            <th>Name</th><th>Description</th><th>Price</th><th>Action</th>
           </tr>
            </thead>
            <tbody>
                {data.map((widget) => (
                    <tr key = {widget.name}>
                        <td>{widget.name}</td>
                        <td>{widget.description}</td>
                        <td>{widget.price}</td>
                        <td>
                            <select id='dropdown'>
                                <option className='option'>Update</option>
                                <option className='option'>Delete</option>
                            </select>
                        </td>
                        <td>
                            <button className='button'>Submit</button>
                        </td>
                    </tr>
                    
                   
                ))}
            </tbody>
            <tr>
             <td><button className='button'>Update</button></td>
             <td><button className='button'>Delete</button></td>
             <td><button className='button'>Display</button></td>
             <td><button className='button'>Search</button></td>
            </tr>
                
        </table>
    </div>
  )
}

export default DisplayWidget