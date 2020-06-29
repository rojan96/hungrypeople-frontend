import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App/Style.css";
import Business from "../Business";

const styles = {
    color: "#2f3542",
    fontFamily: "Just Another Hand",
    backgroundColor: "#ced6e0",
    fontSize: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

const stylesBusinessDiv = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
};

const content = {
    bFullName: "Delicious Momo Center",
    id: "123",
    bEmail: "momo@momo.com",
};

export class RecommendedBusinesses extends React.Component {
    render() {
        return (
            <div style={styles} fluid="true">
                <p className="hvr-buzz-out">Recommended Businesses</p>
                <div style={stylesBusinessDiv}>
                    <Business content={content} />
                    <Business content={content} />
                    <Business content={content} />
                    <Business content={content} />
                </div>
            </div>
        );
    }
}
