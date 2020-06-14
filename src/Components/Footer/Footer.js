import React from 'react';
import './Footer.css';

const style = {
    textAlign: 'center',
    background: '#a5b1c2',
    margin: 0,
    padding: 20,
    fontFamily: 'Just Another Hand',
    width: '100%',
    fontSize: 40
}

export default function Footer() {
    return (
        <div style={style}>
            <p>Copyright 2020 HungryPeople</p>
            <p>All rights reserved.</p>
        </div>
    );
}