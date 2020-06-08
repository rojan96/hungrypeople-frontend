import React from 'react';

const style={
    textAlign: 'center',
    background: 'gray',
    margin: 0,
    padding: 20,
    fontFamily: 'Cabin Sketch',
}

export default function Footer () {
    return(
        <div style={style}>
            <h3>Copyright 2020 HungryPeople</h3>
            <h4>All rights reserved.</h4>
        </div>
    );
}