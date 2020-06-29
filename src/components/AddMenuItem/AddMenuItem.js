import React, { useContext, useState, useEffect } from "react";
import {
    Button,
    FormControl,
    FormGroup,
    FormLabel,
    Form,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { postMenuItem, getBusinessInfo } from "../../util/HPserver";
import "./Style.css";

export default function AddMenuItem() {
    const history = useHistory();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const { user } = useContext(AuthContext);
    const [businessInfo, setBusinessInfo] = useState({});

    useEffect(() => {
        async function fetchData() {
            const businessInfo = await getBusinessInfo(user);
            setBusinessInfo(businessInfo);
        }
        fetchData();
    }, []);

    function validateForm() {
        return category.length > 0 && description.length > 0;
    }

    return (
        <div className="LoginPage">
            <div className="InnerLogin">
                <Form className="AddMenuItemForm">
                    <h2>Add Menu Item</h2>
                    <Form.Row>
                        <FormGroup controlId="name">
                            <FormLabel>name</FormLabel>
                            <FormControl
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                            />
                        </FormGroup>
                        <FormGroup controlId="price">
                            <FormLabel>price</FormLabel>
                            <FormControl
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="price"
                            />
                        </FormGroup>
                    </Form.Row>

                    <FormGroup controlId="category">
                        <FormLabel>Category</FormLabel>
                        <FormControl
                            autoFocus
                            type="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup controlId="description">
                        <FormLabel>Description</FormLabel>
                        <FormControl
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="description"
                        />
                    </FormGroup>

                    <Button
                        variant="light"
                        className="AddFoodButton"
                        block
                        disabled={!validateForm()}
                        onClick={async () => {
                            const menuItem = {
                                category: category,
                                description: description,
                                name: name,
                                price: price,
                            };
                            const saveMenuItem = await postMenuItem(
                                user,
                                businessInfo.id,
                                menuItem
                            );
                            if (saveMenuItem) {
                                alert("Successfully added new menu item");
                            } else {
                                alert("Something went wrong");
                            }
                        }}
                    >
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
}
