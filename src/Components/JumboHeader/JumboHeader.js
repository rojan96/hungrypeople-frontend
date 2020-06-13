import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import '../App/Style.css'
import DesktopBg from "../../images/bg-curvy-desktop.svg";
import mainIllustration from "../../images/illustration-intro.svg";

const styles = {
    background: 'none',
    textAlign: "center",
    fontSize: 50,
    margin: 0
};

const stylesHeader = {
    fontSize: 100,
    fontFamily: 'Cabin Sketch'
}

// const stylesDiv = {
//     border: '2px solid white'
// }

export class JumboHeader extends React.Component {

    render() {
        return (
            <Jumbotron style={styles} fluid>
                <div className="bg-desktop"><img src={DesktopBg} alt="bg-desktop" width="100% "/>
                </div>
                <div>
                    <div className="hero-section container">
                        <div className="hero-image">
                            <img src={mainIllustration} alt="hero-image" style={{maxWidth: '40%'}}/>
                        </div>
                        <div className="hero-content">
                            <h1 style={stylesHeader}> HungryPeople</h1>
                            <p>Order food. Wherever you are. Wherever you want.
                            </p>
                            <Link to="/Search">
                                <button>Get Food.</button>
                            </Link>
                        </div>
                    </div>

                </div>


            </Jumbotron>
        );
    }
}

