import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Main from './source/com.hpmv.main/main';
import MapView from './source/com.hpmv.main/mapView';
import ListView from './source/com.hpmv.main/listView';
import Nav from './staging_source/com.hpmv.static.widgets/navigatorBar';
import Foot from './staging_source/com.hpmv.static.widgets/footerBar'
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom';


const NavHead = () =>{
  return (
    <div>
      {!(useLocation().pathname==='/') && <Nav/>}
    </div>
  );
}
const Footer = () =>{
  return(
    <div>
      {!(useLocation().pathname==='/') && <Foot />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <NavHead />
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/main' element={<Main/>}/>
    <Route path='/mapView' element={<MapView/>}/>
    <Route path='/listView' element={<ListView/>}/>
    <Route path='/order' element={<h1>This is order page</h1>}/>
    <Route path='/contact' element={<h1>This is contact page</h1>}/>
    <Route path='/about' element={<h1>This is about page</h1>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);
