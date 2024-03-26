import React, { useState, useMemo } from 'react'
function Jugar(){
    const options = ['piedra', 'papel', 'tijera']
    const [setSelected] = useState('')
    const [RivalSetSelected] = useState(''); 
    
    const setSelection = () => {
        if (!setSelected) {
            return;
        }
        const RivalSelection = math.floor(math.random() * options.length);
        RivalSetSelected = (options[RivalSelection]);
    }
    const result = useMemo (() => {
        if (setSelected === RivalSetSelected) {
            return alert('Empate');
    }
    else{
        if (
            (computedSelected === "rock" && selected === "scissors") ||
            (computedSelected === "paper" && selected === "rock") ||
            (computedSelected === "scissors" && selected === "paper")
          ) {
            return alert("Perdiste");
          }
          return alert("Tu ganas");
        }
      }, [setSelected, RivalSetSelected]);
    }

export default Jugar