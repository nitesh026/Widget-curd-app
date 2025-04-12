import React from 'react';
import '../css/Widget.css';

const DisplayWidget = () => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/v1/getAllWidgets")
        .then((response) => {
            if(!response.ok){
                    throw new Error('Network response are not Ok');
            } 
            return response.json();
        }).then((data) =>{
            setData(data);
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        });
    },[]);
  return (
    <div className="table-container">
        <table className="table">
            <thead>
           <tr className="th">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
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
