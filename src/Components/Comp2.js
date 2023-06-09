import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { reducerFunction1 } from '../Features/SliceA';
import "./Mystyle.css";
function Comp2() {
    const {textInput, setTextInput}=useState();
    console.log("state variable :",textInput);
    const dispatch=useDispatch();
  return (
    <div className="Comp2">
        <p>Comp2</p>
        <input value={textInput}
        onChange={(e)=>{
            setTextInput(e.target.value);
        }}/>
        <button onClick={()=>{dispatch(reducerFunction1(textInput));}}>Update Data</button>
    </div>
  );
}

export default Comp2