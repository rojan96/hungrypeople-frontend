import React from "react";
import "./Style.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Row, Col } from "react-bootstrap";

export function MenuItems(props) {
    return (
        <div className="MainMenu">
            <Row>
                <Col>
                    <div className="MenuItems ">
                        <p className="ItemText">Item Id: {props.item.id}</p>
                        <p className="ItemText">{props.item.userId}</p>
                        <p className="ItemText">
                            Item Name: {props.item.title}
                        </p>
                    </div>
                </Col>
                <Col className="CartIcon">
                    <AddShoppingCartIcon fontSize="large" />
                </Col>
            </Row>
        </div>
    );
}
