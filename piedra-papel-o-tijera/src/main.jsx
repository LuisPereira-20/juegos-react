import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './Componentes/Button'
import piedra from './Componentes/img/piedra.svg'
import papel from './Componentes/img/papel.svg'
import tijera from './Componentes/img/tijera.svg'
import Jugar from './Componentes/js/Jugar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-sky-500'>
      <h1 className='text-3xl text-white text-center font-black'>Piedra, Papel o Tijera</h1>
      <div className='grid grid-cols-3'>
      <div className='flex flex-col items-center justify-center'>
        <img src={piedra} className='w-2/4 mx-auto bg-white border-solid border-2 border-black my-2' />
        <h3 className='text-3xl text-white text-center font-semibold'>Rival</h3>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-3xl text-white text-center font-bold'>Elige una opciòn</h3>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <img src={papel} className='w-2/4 mx-auto bg-white border-solid border-2 border-black my-2' />
        < h3 className='text-3xl text-white text-center font-semibold'>Usuario</h3>
      </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='flex flex-col items-center justify-center'>
          <img src={piedra} className='w-2/4 bg-white border-solid border-2 border-black my-2' />
          <Button onClick={() => setSelected('piedra')} text="Piedra" classes="bg-white text-black border-solid border-2 border-black rounded-full p-2 px-4 hover:border-black hover:font-black"/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img src={papel} className='w-2/4 bg-white border-solid border-2 border-black my-2' />
          <Button text="Papel" classes="bg-white text-black border-solid border-2 border-black rounded-full p-2 px-5 hover:border-black hover:font-black"/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img src={tijera} className='w-2/4 bg-white border-solid border-2 border-black my-2' />
          <Button text="Tijera" classes="bg-white text-black border-solid border-2 border-black rounded-full p-2 px-5 hover:border-black hover:font-black"/>
        </div>
      </div>
    </div>
  </React.StrictMode>
)
