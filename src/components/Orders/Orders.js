import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import OrderItems from "./OrderItems/OrderItems";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./Orders.css";

const useRowStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
});

export default function CollapsibleTable() {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users/orders/`,
                {
                    headers: {
                        Authorization: user,
                    },
                }
            )
            .then((data) => {
                //console.log("orders");
                setOrders(data.data.content);
            });
    }, []);
    return (
        <TableContainer component={Paper} className="OrderComponent">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Order id</TableCell>
                        <TableCell align="right">No. of items</TableCell>
                        <TableCell align="right">Total Price($)</TableCell>
                        <TableCell align="right">Placed on</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <Row key={order.id} row={order} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const [numberOfItems, setNumberOfItems] = React.useState(0);
    const [totalPrice, setTotalPrice] = React.useState(0);

    const handleItemCount = (count) => {
        setNumberOfItems(count);
    };

    const handleTotalPrice = (total) => {
        setTotalPrice(total);
    };

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{numberOfItems}</TableCell>
                <TableCell align="right">{totalPrice}</TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
                <TableCell align="right">
                    <button variant="contained" className="btn-success btn-sm">
                        Mark as Completed
                    </button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Order items
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">
                                            Quantity
                                        </TableCell>
                                        <TableCell align="right">
                                            Price ($)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <OrderItems
                                        key={row.id}
                                        id={row.id}
                                        handleItemCount={handleItemCount}
                                        handleTotalPrice={handleTotalPrice}
                                    />
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
