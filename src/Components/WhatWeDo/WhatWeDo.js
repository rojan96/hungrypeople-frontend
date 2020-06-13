import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

const styles = {
    color: 'White',
    fontFamily: 'Cabin Sketch',
    textAlign: 'center',
    padding: 30,

};

export class WhatWeDo extends React.Component {
    render() {
        return (
            <Container className="WhatWeDo" style={styles} fluid>
                <h1>What we do</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor ac lorem eget
                    sagittis. Fusce tincidunt condimentum placerat. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Proin eleifend elit eu scelerisque pretium. Nullam
                    pretium nisi non mauris convallis scelerisque. Suspendisse venenatis semper turpis, eget molestie
                    turpis molestie id. Duis faucibus pellentesque magna, nec luctus nulla pharetra vel.</h4>

                <h4>Ut lacinia et lorem nec lacinia. Aliquam erat volutpat. Morbi tempus quis justo in posuere. Ut vitae
                    libero a nisi gravida ultricies. Nunc tincidunt gravida lorem ut bibendum. Donec ornare est at
                    hendrerit tempus. Morbi vitae sapien at arcu vestibulum ultricies nec vitae urna.</h4>
            </Container>
        );
    }
}
