import React from 'react'
import '../css/Widget.css'

const AddWidget = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [name,setName] = useState('');
  const [description,setDescription] = useSate('');
  const [price,setPrice] = useState('');
  
  const postData = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch("http://localhost:8080/v1/createWidget",{
          method:"POST",
          headers:
          { "Content-Type":"Application/json"},
          body: JSON.stringify({
            "name":{name},
            "description":{description},
            "price": {price}
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
            <input className='input' 
              type="text"
              placeHolder ="Name"
              value = {name}
              onChange = {()=> setName(e.target.value)}
              />
        </label>
        <label className='label'>
            Description:
            <input className='description' 
              type='text'
              placeHolder ="Description"
              value = {description}
              onChange = {()=> setDescription(e.target.value)}
            />
        </label>
        <label className='label'>
            Price:
            <input className='price' type='text'
              placeHolder ="Price"
              value = {price}
              onChange = {()=> setPrice(e.target.value)}
              />
        </label>
        <button className='button' onClick={addWidgets}>Add Widget</button>
    </div>
  )
}

export default AddWidget
