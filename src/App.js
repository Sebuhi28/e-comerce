import './App.css';
import Header from './components/Header'; 
import Form from './components/Form'
import Info from './components/Info'
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App"> 
        <Header />
      <div className='div1'>
        <Form />
        <Info />
      </div>
    </div>
  );
}


export default App;
