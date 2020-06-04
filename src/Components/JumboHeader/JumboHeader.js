import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const styles = {
    background: 'none',
    textAlign: "center",
    fontSize: 50,
    margin: 0
};

const stylesHeader = {
    fontSize: 100
}

const stylesDiv = {
    border: '2px solid white'
}

export class JumboHeader extends React.Component {

    render(){
        return(
            <Jumbotron style={styles}>
                <div style={stylesDiv}>
                    <h1 style={stylesHeader}> HungryPeople</h1>
                    <p>
                        Order food. Wherever you are. Wherever you want.
                    </p>
                </div>
                <Button variant={"light"} size={"lg"}>Get Food.</Button>
            </Jumbotron>
        );
    }
}

