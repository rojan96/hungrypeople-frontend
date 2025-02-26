import React, { useState, useEffect } from "react";
import { getMenu } from "../../util/HPserver";
import "./Style.css";
import { MenuItems } from "./MenuItems";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Table } from "react-bootstrap";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
//import { AuthContext } from "../../context/auth";

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
        minWidth: 800,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Menu(props) {
    const [menu, setMenu] = useState([]);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    //const { user } = useContext(AuthContext);
    useEffect(() => {
        async function fetchItems() {
            let menuItems = await getMenu(props.businessId);
            // let business = await getBusinessById(props.businessId);
            setMenu(menuItems);
        }
        fetchItems();
    }, [props.businessId]);

    let categories = {};
    let categoryItems = [];
    if (menu) {
        for (let item of menu) {
            if (item.category in categories) {
                categories[item.category].push(item);
            } else {
                categories[item.category] = [];
                categories[item.category].push(item);
                categoryItems.push(item.category);
            }
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container className="Menu">
            {/* {business ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={business.bCoverPictureUrl} />
          <h1 style={{ textAlign: "center" }}>{business.bFullName} Menu</h1>
        </div>
      ) : (
        <h1>nothing found</h1>
      )} */}

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
                        {Object.keys(categories).map((category) => (
                            <Tab
                                label={category}
                                {...a11yProps(
                                    parseInt(
                                        categoryItems.indexOf(category) - 1,
                                        10
                                    )
                                )}
                            />
                        ))}
                    </Tabs>
                </AppBar>
                <Table striped bordered hover className="Table">
                    <tbody>
                        {Object.keys(categories).map((category) => (
                            <TabPanel
                                className="tabpanel"
                                value={value}
                                index={parseInt(
                                    categoryItems.indexOf(category),
                                    10
                                )}
                            >
                                {categories[category].map((item) => (
                                    <tr>
                                        <MenuItems
                                            className="hvr-outline-in"
                                            item={item}
                                            edit={props.edit}
                                            businessId={props.businessId}
                                        />
                                    </tr>
                                ))}
                            </TabPanel>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}
