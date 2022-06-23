

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigator.css';

const Navigator = (props) => {

    let nextView = useNavigate();

    const takeMe = () => {
        nextView(props.link)
    }

     return (
         <div className='navigatorDesign' onClick={()=>takeMe()}>
            {props.destino}
         </div>
     )
}
export default Navigator;