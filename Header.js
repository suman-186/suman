import React ,{useState, useEffect} from 'react'
import './App.css'

function Header() {
    const data={name:"",Password:"", email:""};
    const[inputData,  setInputData]= useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])
    function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)

    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.Password){
            alert("All fields are Mandartory")
    }
    else{
        setFlag(true)
    }
}
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'> Hello {inputData.name}, You've Registered Successfully </h2>:""}</pre>

    <form  className='container' onSubmit={handleSubmit}>
      <div className='header'>
      <h2>Registration Form</h2>
      </div>
      <div>
        <input type='text' placeholder="Enter Your Name" name="name" value={inputData.name} onChange={handleData}></input>
        </div>
        <div>
        <input type='text' placeholder="Enter Your Password" name="Password" value={inputData.Password} onChange={handleData}></input>
        </div>
        <div>
        <input type='text' placeholder="Enter Your Email" name="email" value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
        <button type="Submit">Submit</button>
        </div>
        
    </form>
    </>
  )
}

export default Header