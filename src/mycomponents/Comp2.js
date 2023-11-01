import React from 'react'

export default function Comp2() {

    //hnaya kaytktb code javascript
    //let group = "fullStack";

   // const x=11;
   // const myElement =<h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
   let marr = ['Morocco' , 1 ,'Tanger', 'hello']
  return (
      
           <>
           {
            marr.map( (x)=>{

                    return <li>{x}</li>
                })
           }
           </>
  )
}
