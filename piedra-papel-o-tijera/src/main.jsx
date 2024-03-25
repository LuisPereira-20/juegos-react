import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './Componentes/Button'
import piedra from './Componentes/img/piedra.svg'
import papel from './Componentes/img/papel.svg'
import tijera from './Componentes/img/tijera.svg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="grid grid-cols-3 gap-4 p-4 bg-sky-200">
    <div className='flex flex-col items-center justify-center'>
      <img src={piedra} className='w-2/4' />
      <Button text="Piedra" classes="bg-white text-black border-solid border-2 border-black rounded-full p-2 px-4 hover:border-black hover:font-black"/>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <img src={papel} className='w-2/4' />
      <Button text="Papel" classes="bg-white text-black border-solid border-2 border-black rounded-full p-2 px-5 hover:border-black hover:font-black"/>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <img src={tijera} className='w-2/4' />
      <Button text="Tijera" classes="bg-white text-black border-solid border-2 border-black rounded-full p-2 px-5 hover:border-black hover:font-black"/>
    </div>
    </div>
  </React.StrictMode>
)
