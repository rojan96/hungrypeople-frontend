import React, { useContext, useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { postMenuItem } from "../../util/HPserver";

export default function AddMenuItem() {
    const history = useHistory();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const { user } = useContext(AuthContext);
    function validateForm() {
        return category.length > 0 && description.length > 0;
    }

    return (
        <div className="LoginPage">
            <div className="InnerLogin">
                <h2>Add Menu Item</h2>
                <form className="category">
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

                    <Button
                        variant="light"
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
                </form>
            </div>
        </div>
    );
}
