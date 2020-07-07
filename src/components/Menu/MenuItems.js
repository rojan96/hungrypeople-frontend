import React, { useContext } from "react";
import "./Style.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Edit from "@material-ui/icons/Edit";
import { Row, Col, Button } from "react-bootstrap";
import { notify } from "../../util/Toast";
import { AuthContext } from "../../context/auth";
import { postItemToCart } from "../../util/HPserver";

export function MenuItems(props) {
    const { user } = useContext(AuthContext);
    return (
        <div className="MainMenu hvr-reveal">
            <Row style={{ minWidth: 800 }}>
                <Col xs={9}>
                    <div className="MenuItems">
                        <p className="ItemText">Name: {props.item.name}</p>
                        <p className="ItemText">Price: {props.item.price}</p>
                        <p className="ItemText">
                            Description: {props.item.description}
                        </p>
                    </div>
                </Col>
                <Col className="CartIcon" xs={3}>
                    {props.edit ? (
                        <Button variant="none">
                            <Edit style={{ fontSize: 40 }} />
                        </Button>
                    ) : (
                        <p></p>
                    )}
                    <Button variant="none" style={{ marginLeft: 5 }}>
                        <AddShoppingCartIcon
                            style={{ fontSize: 40 }}
                            onClick={async () => {
                                const addToCart = await postItemToCart(
                                    user,
                                    props.businessId,
                                    props.item
                                );
                                if (addToCart) {
                                    notify(`Successfully Added to Cart`, true);
                                } else {
                                    notify("👎 Adding to cart failed.");
                                }
                            }}
                        />
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
