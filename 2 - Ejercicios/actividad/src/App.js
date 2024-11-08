import React, { useState } from 'react';
import './App.css';
import imagenes from './imagenes';

const App =()=>{


  const  [number , setNumber] = useState(1);
  const contarClick =() =>{
    setNumber(number+1)
    if(number>7){
      setNumber(1)
    }
  }
  return (
    <div class= "pag">
      
      <table class="Reyes">
        <tr>
          <td><div id="cont1">  
            <p className="numero"  onClick={() => contarClick(setNumber)}>
              {number}
            </p>          
            <button className="aceptar">Aceptar</button>
            <img id="Rey_1" src={imagenes.img1}/>
            <p id="text">Rey 1</p>
          </div></td>
          <td><div id="cont2">
          <p className="numero"  onClick={() => contarClick(setNumber)}>
              {number}
            </p>          
            <button className="aceptar">Aceptar</button>
            <img id="Rey_2" src={imagenes.img2}/>
            <p id="text">Rey 1</p> 
          </div></td>
          <td><div id="cont3">
          <p className="numero"  onClick={() => contarClick(setNumber)}>
              {number}
            </p>          
            <button className="aceptar">Aceptar</button>
            <img id="Rey_3" src={imagenes.img3}/>
            <p id="text">Rey 1</p>
          </div></td>
        </tr>
      </table>
    </div>
    
  )
}

export default App;
