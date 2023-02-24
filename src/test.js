
import React, { useState } from 'react';
import './App.css';


function App() {
  //State
  let [compteur, setCompteur] = useState(0);
  let [cpt, setCpt] = useState(0);
  let [pas, setPas] = useState(0);
  let [max, setMax] = useState(0);
  let [min, setMin] = useState(0);

  //let max = 0, min = 0;
  //let pas = 0;

  //Comportement
  const handleAddOne = () => {
    if ( compteur <= 4 ){
      setCompteur(compteur + 1);
    } else
    alert("Top Incrémentation ...");
  };

  const handleSubOne = () => {
    if ( -4 <= compteur ){
      setCompteur(compteur - 1);
    } else
    alert("Top Décrémentation ...");
  };

  const handleInput = (event) => {
    setCompteur(event.target.value);
  }

  const handleReset = () => {
    setCompteur(compteur = 0);
    setCpt(cpt = 0);
    setPas(pas = 0);
    setMin(min = 0);
    setMax(max = 0);
  }

 const handleDepart = (e) => {
    
    cpt = e.currentTarget.value;
    //console.log('valeur de départ :' + cpt);
    setCpt(cpt);
  }
  
  

 const handleMax = (e) => {
    max = e.currentTarget.value;
    setMax(max);
    //console.log('Le Max est : ' + max);
  }
  
  const handleMin = (e) => {
    min = e.currentTarget.value;
    setMin(min);
    console.log(min);
  }

  const handlePas = (e) => {
    pas =  e.currentTarget.value;
    setPas(pas);
  }
  

  const handleIncrement = () => {
       if(cpt <= max-pas) {
        cpt = parseInt(cpt) + parseInt(pas);
      setCpt(cpt);
    }else
    alert(`STOP : Valeur Maximale atteinte :  ${max}`);
    
  };
 
  const handleDecrement = () => {
  
  if(Math.abs(cpt) <= Math.abs(min-pas)){ //(-min)+pas) {
     cpt = parseInt(cpt) - parseInt(pas);
   setCpt(cpt);
 }else
 alert(`STOP : Valeur Minimale atteinte :  ${-min}`);
 
};




  //Affichage - render
  return (
    <div className="App">
      <h1>Mon premier projet avec Mahmoud</h1>
      <div className="box">
        <h3>Incrémenter / Décrémenter (+/- 1)</h3>
        <h1>{compteur}</h1>
        
        <button className='bt1' onClick={handleSubOne}>-1</button>
        <input type="text" value={compteur} onChange={(e) => handleInput(e)}></input>
        
        <button className='bt1' onClick={handleAddOne}>+1</button><br />
        
        <button className="reset" onClick={handleReset}>Reset</button>  
      </div>

      <div className="Param">
            <h3>Incrémenter / Décrémenter ( Avec paramètres)</h3>
            <h1>{cpt}</h1>
      
            <label>Donner la valeur de départ</label>
            <input className='in' type="number"  value={cpt} onChange={(e) => handleDepart(e)}></input> <br />

            <label>Donner le pas Inc / Déc</label>
            <input className='in' type="number" value={pas} onChange={(e) => handlePas(e)}></input> <br />

            <label>Donner la valeur Maximale à atteindre </label>
            <input className='in' type="number" value={max} onChange={(e) => handleMax(e)}></input><br />

            <label>Donner la valeur Minimale à atteindre</label>
            <input className='in' type="number" value={min} onChange={(e) => handleMin(e)}></input><br />

            <button  onClick={handleDecrement}>Decrémenter</button>
            <button  onClick={handleIncrement}>Incrémenter</button><br />

            <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
