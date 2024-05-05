import React from "react";
import { Productos } from "./componentes/Productos/index";
import { Header } from "./componentes/Header";
import 'boxicons';
import {BrowserRouter as Router} from "react-router-dom";
import { Paginas } from "./componentes/Paginas/index.jsx" ;
import { DataProvider } from './context/Dataprovide.jsx';


function App() {
  return (
    <DataProvider>
    <div className="App">
      
      <Router>
      <Header/>
      <Paginas/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
