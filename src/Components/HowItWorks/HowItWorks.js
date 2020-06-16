import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import FoodTable from '../../images/undraw_breakfast_psiw.svg';
import FoodPicker from '../../images/undraw_healthy_options_sdo3.svg';
import Shopping from '../../images/undraw_shopping_app_flsj.svg';
import Dinner from '../../images/undraw_special_event_4aj8.svg';
import "../App/Style.css";

const styles = {
    color: 'White',
    fontFamily: 'Just Another Hand',
    backgroundColor: '#718093',
    textAlign: 'center',
    fontSize: 60
};

const stylesBusinessDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
}

const styleHowItWorksImg = {
    maxWidth: '40%',
    padding: 0,
}

const styleHowItWorksText = {

}

export class HowItWorks extends React.Component {

    render() {
        return (
            <div style={styles} fluid>

                <p className="hvr-buzz-out"> How it works</p>
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
                <div className="HowItWorksWave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4b6584" fill-opacity="1" d="M0,256L40,256C80,256,160,256,240,224C320,192,400,128,480,117.3C560,107,640,149,720,176C800,203,880,213,960,224C1040,235,1120,245,1200,250.7C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                </div>
            </div>
        );
    }
}
