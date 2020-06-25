import React, { useState, useEffect } from "react";
import { getMenu } from "../../util/HPserver";
import "./Style.css";
import { MenuItems } from "./MenuItems";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "react-bootstrap";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Menu(props) {
    const [menu, setMenu] = useState([]);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {Object.keys(userIds).map((userId) => (
                            <Tab
                                label={userId}
                                {...a11yProps(parseInt(userId, 10))}
                            />
                        ))}
                    </Tabs>
                </AppBar>

                {Object.keys(userIds).map((userId) => (
                    <TabPanel
                        ClassName="tabpanel"
                        value={value}
                        index={parseInt(userId, 10) - 1}
                    >
                        {userIds[userId].map((item) => (
                            <MenuItems className="hvr-outline-in" item={item} />
                        ))}
                    </TabPanel>
                ))}
            </div>
        </Container>
    );
}
