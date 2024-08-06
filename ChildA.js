import React, { useState } from 'react'

function ChildA(props){
  const [name, setName]= useState();
  function handleSubmit(e){
    e.preventDefault();
    props.getData(name)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name * </label><br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
         <br/>
        <label>Last Name * </label><br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
         <br/>
        <label>Password * </label><br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br/>
        <label>Contact No * </label><br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br/>
        <label>Email * </label><br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br/>
        <button> Submit</button>
        </form>
    </div>
  )
}

export default ChildA
