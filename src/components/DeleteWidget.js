import React from 'react'
import '../css/Widget.css'

const DeleteWidget = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [name,setName] = useSate('');
  
  const deleteWidget = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch("http://localhost:8080/v1/deleteWidget/{name}",{
          method:"DELETE",
          headers:
          { "Content-Type":"Application/json"},
          body: JSON.stringify({
            "name":{name}
          }),
  });
  if(!response.ok){
    throw new Error("Failed to delete data");
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
            <input className='input' 
              type='text'
              placeHolder ="Name"
              value = {name}
              onChange = {()=> setName(e.target.value)}/>
        </label>
        <button className='button' onClick={deleteWidget}>Delete Widget</button>
        <label>{data}</label>
    </div>
  )
}

export default DeleteWidget
