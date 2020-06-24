import React, { useState, useEffect } from "react";
import { getMenu } from "../../util/HPserver";
import "./Style.css";
import { MenuItems } from "./MenuItems";
import { Tab, Row, Col, Nav } from "react-bootstrap";

export function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            let menuItems = await getMenu();
            setMenu(menuItems);
        }
        fetchItems();
    }, []);

    let userIds = {};

    for (let item of menu) {
        if (item.userId in userIds) {
            userIds[item.userId].push(item);
        } else {
            userIds[item.userId] = [];
            userIds[item.userId].push(item);
        }
    }

    console.log(userIds);

    return (
        // <div className="MainMenu">
        //     {menu.map((item) => (
        //         <MenuItems item={item} />
        //     ))}
        // </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {Object.keys(userIds).map((userId) => (
                            <Nav.Item>
                                <Nav.Link eventKey={userId}>{userId}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {Object.keys(userIds).map((userId) => (
                            <Tab.Pane eventKey={userId}>
                                {userIds[userId].map((item) => (
                                    <div>
                                        <p>{item.id}</p>
                                        <p>{item.userId}</p>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </Tab.Pane>
                        ))}

                        <Tab.Pane eventKey="second">
                            <h1>Song 2</h1>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}
