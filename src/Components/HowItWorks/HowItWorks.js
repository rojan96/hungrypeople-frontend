import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodTable from '../../images/undraw_breakfast_psiw.svg';
import FoodPicker from '../../images/undraw_healthy_options_sdo3.svg';
import Shopping from '../../images/undraw_shopping_app_flsj.svg';
import Dinner from '../../images/undraw_special_event_4aj8.svg';
import "../App/Style.css";
import "./Style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const styles = {
    color: 'White',
    fontFamily: 'Just Another Hand',
    backgroundColor: '#718093',
    textAlign: 'center',
    fontSize: 60
};

const stylesBusinessDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    flexWrap: 'wrap',
}


export class HowItWorks extends React.Component {

    render() {
        return (
            <div style={styles} fluid="true">

                <p className="hvr-buzz-out"> How it works</p>
                <div style={stylesBusinessDiv} >
                        <Row>
                            <Col xs={12} lg={6}><img className="hero-image hvr-buzz-out" src={FoodTable} alt="Food on a table" /></Col>

                            <Col xs={12} lg={6}><img className="hero-image hvr-buzz-out" src={FoodPicker} alt="Pick food from menu" /></Col>

                            <Col xs={12} lg={6}><img className="hero-image hvr-buzz-out" src={Shopping} alt="Shopping for food"/></Col>

                            <Col xs={12} lg={6}><img className="hero-image hvr-buzz-out" src={Dinner} alt="Eating dinner" /></Col>
                        </Row>


                </div>
                <div className="HowItWorksWave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4b6584" fillOpacity="1" d="M0,256L40,256C80,256,160,256,240,224C320,192,400,128,480,117.3C560,107,640,149,720,176C800,203,880,213,960,224C1040,235,1120,245,1200,250.7C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                </div>
            </div>
        );
    }
}
