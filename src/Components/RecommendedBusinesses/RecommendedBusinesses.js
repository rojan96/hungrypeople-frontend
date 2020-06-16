import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../App/Style.css';
const styles = {
    color: 'White',
    fontFamily: 'Just Another Hand',
    backgroundColor: '#4b6584',
    textAlign: 'center',
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
            <div style={styles} fluid>
                <p className="hvr-buzz-out">Recommended Businesses</p>
                <div style={stylesBusinessDiv}>

                </div>
            </div>
        );
    }
}

