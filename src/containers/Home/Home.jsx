

import React from 'react';
import Navigator from '../../components/Navigator/Navigator';
import './Home.css';

const Home = () => {
     return (
         <div className='homeComponent'>
            soy Home

            <Navigator destino="Login" link="/login"/>

            
         </div>
     )
}
export default Home;