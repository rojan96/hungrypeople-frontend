import React from "react";
import "./Style.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Row, Col } from "react-bootstrap";

export function MenuItems(props) {
    return (
        <div className="MainMenu hvr-reveal">
            <Row style={{ minWidth: 800 }}>
                <Col xs={10}>
                    <div className="MenuItems">
                        <p className="ItemText">Name: {props.item.name}</p>
                        <p className="ItemText">Price: {props.item.price}</p>
                        <p className="ItemText">
                            Description: {props.item.description}
                        </p>
                    </div>
                </Col>
                <Col className="CartIcon" xs={2}>
                    <AddShoppingCartIcon style={{ fontSize: 40 }} />
                </Col>
            </Row>
        </div>
    );
}
