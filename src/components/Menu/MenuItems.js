import React from "react";
import "./Style.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Row, Col } from "react-bootstrap";

export function MenuItems(props) {
    return (
        <div className="MainMenu hvr-reveal">
            <Row>
                <Col>
                    <div className="MenuItems ">
                        <p className="ItemText">Item Id: {props.item.id}</p>
                        <p className="ItemText">
                            Item Id: {props.item.category}
                        </p>
                        <p className="ItemText">Item Id: {props.item.price}</p>
                        <p className="ItemText">{props.item.name}</p>
                        <p className="ItemText">
                            Item Name: {props.item.description}
                        </p>
                    </div>
                    ;
                </Col>
                <Col className="CartIcon">
                    <AddShoppingCartIcon style={{ fontSize: 40 }} />
                </Col>
            </Row>
        </div>
    );
}
