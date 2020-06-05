import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

const styles = {
    color: 'White',
    fontFamily: 'Cabin Sketch',
    backgroundColor: 'orange',
    textAlign: 'center',
    height: 700
};

export class WhatWeDo extends React.Component {
    render(){
        return(
            <Container style = {styles} fluid>
                <h1>What we do</h1>
            </Container>
        );
    }
}

