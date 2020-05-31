import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {JumboHeader} from '../JumboHeader/JumboHeader';
import {NavBar} from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import './Style.css';

const styles = {
    color: 'black',
    fontFamily: 'Cabin Sketch',
    backgroundImage : 'url(' + require('../../momoMain.jpg') +')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '1000'
};

export class BusinessBanner extends React.Component {
    render(){
        return(
            <Container style = {styles} fluid>
                <NavBar />
                <JumboHeader />
            </Container>
        );
    }
}

