import React from "react";
import "./Style.css";
import "../../App/Style.css";
const styles = {
    color: "#2f3542",
    fontFamily: "Just Another Hand",
    textAlign: "center",
};

export class WhatWeDo extends React.Component {
    render() {
        return (
            <div id="WhatWeDo" className="WhatWeDo" style={styles}>
                <h1 className="WhatWeDo-title hvr-buzz-out">What we do</h1>
                <h4 className="WhatWeDo-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque porttitor ac lorem eget sagittis. Fusce
                    tincidunt condimentum placerat. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Proin eleifend elit eu scelerisque pretium.
                    Nullam pretium nisi non mauris convallis scelerisque.
                    Suspendisse venenatis semper turpis, eget molestie turpis
                    molestie id. Duis faucibus pellentesque magna, nec luctus
                    nulla pharetra vel.
                </h4>
                <h4 className="WhatWeDo-text">
                    Ut lacinia et lorem nec lacinia. Aliquam erat volutpat.
                    Morbi tempus quis justo in posuere. Ut vitae libero a nisi
                    gravida ultricies. Nunc tincidunt gravida lorem ut bibendum.
                    Donec ornare est at hendrerit tempus. Morbi vitae sapien at
                    arcu vestibulum ultricies nec vitae urna.
                </h4>
                {/* <div className="whatWeDoWave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#718093" fillOpacity="1" d="M0,288L20,245.3C40,203,80,117,120,117.3C160,117,200,203,240,240C280,277,320,267,360,256C400,245,440,235,480,229.3C520,224,560,224,600,192C640,160,680,96,720,58.7C760,21,800,11,840,53.3C880,96,920,192,960,197.3C1000,203,1040,117,1080,90.7C1120,64,1160,96,1200,128C1240,160,1280,192,1320,208C1360,224,1400,224,1420,224L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">
                        </path>
                    </svg>
                </div> */}
            </div>
        );
    }
}
