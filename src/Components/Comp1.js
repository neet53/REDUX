import React from 'react'
import { useSelector } from 'react-redux'
import Comp2 from './Comp2';

 function Comp1() {
    const selectordataA=useSelector((state)=>{
       return state.SliceAreducer;
    });
    const selectordataB=useSelector((state)=>{
        return state.SliceBreducer;
     });
     console.log(selectordataB)
  return (
    <div>
        <p>Comp1 accesing SliceA:{selectordataA.data}</p>
        <p>Comp1 accesing SliceB:{selectordataB.data}</p>
        <Comp2/>
    </div>
  );
}
export default Comp1;