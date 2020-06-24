import React, { useState, useEffect } from "react";
import { getMenu } from "../../util/HPserver";
import "./Style.css";
import { MenuItems } from "./MenuItems";
import { Tab, Tabs } from "react-bootstrap";

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

    return (
        <Tabs defaultActiveKey="1" className="MainMenu tabs">
            {Object.keys(userIds).map((userId) => (
                <Tab eventKey={userId} title={userId}>
                    {userIds[userId].map((item) => (
                        <MenuItems item={item} />
                    ))}
                </Tab>
            ))}
        </Tabs>
    );
}
