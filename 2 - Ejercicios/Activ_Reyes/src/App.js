import React, { useState } from 'react';
import './App.css';
import imagenes from './imagenes';

const App =()=>{
  

  const  [number , setNumber] = useState(1);
  const  [number2 , setNumber2] = useState(1);
  const  [number3 , setNumber3] = useState(1);
  const  [number4 , setNumber4] = useState(0);
  const  [number5 , setNumber5] = useState(1);
  const  [number6 , setNumber6] = useState(2);
  
  const contarClick =() =>{
    setNumber(number+1)
    setNumber4(number4+1)
    if(number4>=2){
      setNumber4(0)
    }  
    if(number>8){
      setNumber(1)
    }
  }

  const contarClick2 =() =>{
    setNumber2(number2+1)
    setNumber5(number5+1)
    if(number5>=2){
      setNumber5(0)
    }
    if(number2>8){
      setNumber2(1)
    }  
  }
  
  const contarClick3 =() =>{
    setNumber3(number3+1)
    setNumber6(number6+1)
    
    if(number6>1){
      setNumber6(0)   
    }
    if(number3>8){
      setNumber3(1)
    }  
  }
  
 
     
  return (
    <div class= "pag">
      
      <table className="Reyes">
        <tr>Reyes</tr>
        <tr>

          <td><div id="cont1" >  
            <button className="numero" style={{background: number>7 ? '#ff0000' :'#47fc00' }}>
              {number}
            </button>
            <img id="Rey_1" src={imagenes[number4]} onClick={() => contarClick()} />
            <p id="text">Rey {number4+1}</p>
          </div></td>

          <td><div id="cont2">
          <button className="numero" style={{background: number2>7 ? '#ff0000' :'#47fc00' }}>
              {number2}
            </button>          
            <img id="Rey_2" src={imagenes[number5]} onClick={() => contarClick2()}/>
            <p id="text">Rey {number5+1}</p> 
          </div></td>

          <td><div id="cont3">
          <button className="numero" style={{background: number3>7 ? '#ff0000' :'#47fc00' }}>
              {number3}
            </button> 
            <img id="Rey_3" src={imagenes[number6]} onClick={() => contarClick3()}/>
            <p id="text">Rey {number6+1}</p>
          </div></td>
        </tr>
      </table>
    </div>
    
  )
}

export default App;
