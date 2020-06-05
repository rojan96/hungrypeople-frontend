import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Business from "../Business/Business";

const styles = {
    color: 'White',
    fontFamily: 'Cabin Sketch',
    backgroundColor: 'lightblue',
    textAlign: 'center',
    padding: 5,

};

const stylesh1 = {
    border: '2px solid white',
    padding: 3
}

export class RecommendedBusinesses extends React.Component {

    render(){
        return(
            <Container style = {styles} fluid>
                <h1 style={stylesh1}>Recommended Businesses</h1>
                <div>
                    <Business />
                    <Business />
                </div>
            </Container>
        );
    }
}

