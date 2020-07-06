import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "../App/Style.css";
import mainIllustration from "../../images/illustration-intro.svg";

const styles = {
    background: "none",
    textAlign: "center",
    fontSize: 50,
    margin: 0,
    paddingTop: 0,
    fontFamily: "Just Another Hand",
    letterSpacing: 5,
};

const stylesHeader = {
    fontSize: 90,
    fontWeight: "lighter",
    fontFamily: "Sacramento",
    overflow: "hidden",
};

export class JumboHeader extends React.Component {
    render() {
        return (
            <Jumbotron style={styles} fluid>
                <div className="bg-desktop">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#d2dae2"
                            c="1"
                            d="M0,96L30,101.3C60,107,120,117,180,128C240,139,300,149,360,165.3C420,181,480,203,540,197.3C600,192,660,160,720,149.3C780,139,840,149,900,144C960,139,1020,117,1080,138.7C1140,160,1200,224,1260,224C1320,224,1380,160,1410,128L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                        />
                    </svg>
                </div>
                <div>
                    <div className="hero-section container">
                        <div className="main-image hvr-wobble-vertical">
                            <img
                                src={mainIllustration}
                                alt="People eating"
                                style={{ maxWidth: "80%", padding: 0 }}
                            />
                        </div>
                        <div className="hero-content">
                            <h1 style={stylesHeader} className="hvr-buzz-out">
                                {" "}
                                HungryPeople
                            </h1>
                            <h2>
                                Order food. Wherever you are. Wherever you want.
                            </h2>
                            <br />
                            <Link to="/Search">
                                <button className="hvr-buzz-out">
                                    Get Food.
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}
