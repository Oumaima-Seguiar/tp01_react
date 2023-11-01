import logo from './logo.svg';
import './App.css';
//import Comp1 from './mycomponents/Comp1';
//import Comp2 from './mycomponents/Comp2';
//import Comp3 from './mycomponents/Comp3';
import Calc from './mycomponents/Calc';




function App() {
   
 const finparent=(p)=>{
    alert('Hello From Parent' +p)
 }

  return (
    <div className="App">
    <Calc/>

    </div>
  );
}

export default App;
