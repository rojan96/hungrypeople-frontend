import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

const styles = {
    color: 'White',
    fontFamily: 'Just Another Hand',
    backgroundColor: '#4b6584',
    textAlign: 'center',
    padding: 20,
    height: 700,
    fontSize: 60
};

const stylesBusinessDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'

}

export class RecommendedBusinesses extends React.Component {

    render() {
        return (
            <Container style={styles} fluid>
                <p>Recommended Businesses</p>
                <div style={stylesBusinessDiv}>

                </div>
            </Container>
        );
    }
}

