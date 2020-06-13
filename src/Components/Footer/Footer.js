import React from 'react';
import './Footer.css';

const style = {
    textAlign: 'center',
    background: 'gray',
    margin: 0,
    padding: 20,
    fontFamily: 'Cabin Sketch',
    position: 'absolute',
    bottom: 0,
    width: '100%'
}

export default function Footer() {
    return (
        <div style={style}>
            <h3>Copyright 2020 HungryPeople</h3>
            <h4>All rights reserved.</h4>
        </div>
    );
}