
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>


        {/* Cargamos el componente header fuera de Routes,
        para que quede fijado y aunque se cambie de vista/container, header
        permanezca fijo */}

        <Header/>


        <Routes>

             {/* Todo aquello que incluyamos dentro de Routes
             serán vistas cambiantes, serán distintas "pantallas", es decir,
             la parte que irá intercambiandose según vayamos a una url u otra 
             con el método useNavigate */}
             

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>

        </Routes>
      
        {/* En cambio, aqui tambien llamamos al componente header
        fuera del contexto de Routes, en este caso, DEBAJO precisamente,
        ya que queremos que quede debajo de cualquier parte cambiante de la aplicación */}
        <Footer/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
