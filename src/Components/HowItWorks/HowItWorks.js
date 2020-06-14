import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import FoodTable from '../../images/undraw_breakfast_psiw.svg';
import FoodPicker from '../../images/undraw_healthy_options_sdo3.svg';
import Shopping from '../../images/undraw_shopping_app_flsj.svg';
import Dinner from '../../images/undraw_special_event_4aj8.svg';

const styles = {
    color: 'White',
    fontFamily: 'Just Another Hand',
    backgroundColor: '#718093',
    textAlign: 'center',
    padding: 20,
    fontSize: 60
};

const stylesBusinessDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'

}

const styleHowItWorksImg = {
    maxWidth: '20%',
    padding: 0,
}

const styleHowItWorksText = {

}

export class HowItWorks extends React.Component {

    render() {
        return (
            <Container style={styles} fluid>
                <p>How it works</p>
                <div style={stylesBusinessDiv} >
                    <div className="hero-image">
                        <img src={FoodTable} alt="hero-image" style={styleHowItWorksImg}/>
                    </div>
                    <div className="hero-image">
                        <img src={FoodPicker} alt="hero-image" style={styleHowItWorksImg}/>
                    </div>
                    <div className="hero-image">
                        <img src={Shopping} alt="hero-image" style={styleHowItWorksImg}/>
                    </div>
                    <div className="hero-image">
                        <img src={Dinner} alt="hero-image" style={styleHowItWorksImg}/>
                    </div>
                </div>
            </Container>
        );
    }
}
