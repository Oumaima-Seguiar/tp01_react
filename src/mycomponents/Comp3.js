import React, { useState } from 'react'

export default function Comp3() {
    const [counter, setcounter]=useState(10);
    const inc=()=>{
        let c=counter;
        c++;
        setcounter(c);

    }
    const des=()=>{
        let c=counter;
        c--;
        setcounter(c);

    }
    return (
    <div>
        le valeu du state counter est {counter}
      <input type="button" value='+' onClick={inc}/>
      <input type="button" value='-' onClick={des}/>
    </div>
  )
}
