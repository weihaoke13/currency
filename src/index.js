import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './Converter';

import './styles.css';


function App(){
    return(
        <div className='App'>
            <Converter />
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);
