import React from 'react'
import '../css/Widget.css'

const AddWidget = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  
  const postData = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch("http://localhost:8080/v1/createWidget",{
          method:"POST",
          headers:
          { "Content-Type":"Application/json"},
          body: JSON.stringify({
            "name":"Laptop",
            "description":"This is HP Laptop",
            "price": "12000"
          }),
  });
  if(!response.ok){
    throw new Error("Failed to post data");
  }
  const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
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
