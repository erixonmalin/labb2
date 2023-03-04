import {HashRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from "./layout/Layout.js";
import Home from './menupages/Home.js';
import { PortfolioFetch } from './menupages/Portfolio.js';
import { WorkComponent } from './menupages/Work.js';
import { EduComponent } from './menupages/Education.js';
import Contact from './menupages/Contact.js';
import Egg1 from "./components/SecretEgg1";
import Egg2 from "./components/SecretEgg2";
import React from 'react';
 

function App() {
  return ( 
    <div>
   <HashRouter>
      <Layout>
      <Egg1 />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/portfolio' element={<PortfolioFetch />}/>
          <Route path='/work' element={<WorkComponent />}/>
          <Route path='/education' element={<EduComponent />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Layout>
    </HashRouter>
    <Egg2/>
    </div>
  );
}

export default App;
