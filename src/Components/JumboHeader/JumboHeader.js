import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const styles = {
    background: 'none',
    textAlign: "center",
    fontSize: 50,
    paddingBottom: 200,
    opacity:'1'
};

const stylesHeader = {
    fontSize: 100
}


export class JumboHeader extends React.Component {

    render(){
        return(
            <Jumbotron style={styles}>
                <h1 style={stylesHeader}> Hungry People</h1>
                <p>
                    Order food. Wherever you are. Wherever you want.
                </p>
                <Button variant={"light"} size={"lg"}>Get Food.</Button>
            </Jumbotron>
        );
    }
}

