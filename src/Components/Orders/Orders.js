import React from 'react';
import './Orders.css';
const style={
    textAlign: 'center',
    background: '',
    margin: 0,
    padding: 20,
    fontFamily: 'Cabin Sketch',
}

export default function Orders () {
    return(
        <div className="orderDiv">
            <h1>Past Orders:</h1>
            <h3>6/5/2020</h3>
            <h4>Momo: 2</h4>
        </div>
    );
}