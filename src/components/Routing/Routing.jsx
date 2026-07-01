import React from 'react';
import{Route,  Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Competition from '../Competition/Competition';
import Sponsors from '../Sponsors/Sponsors';
import Disciplines from '../Discipline/Disciplines';
import JoinEcosystem from '../Ecosystem/JoinEcosystem';

const Routing = () => {
  return (
<>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Competition/>}/>
        <Route path='/programs' element={<Disciplines/>}/>
        <Route path='/community' element={<JoinEcosystem/>}/>
        <Route path='/partner' element={<Sponsors/>}/>

    </Routes>

</>
  )
}

export default Routing
