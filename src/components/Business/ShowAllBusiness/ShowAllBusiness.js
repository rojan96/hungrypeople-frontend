import React, { useEffect, useState } from "react";
import Business from "../Business";

const divStyles = {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
};

function ShowAllBusiness(props) {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            "https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/business"
        );
        const items = await data.json();
        setItems(items.content);
    };

    try {
        return (
            <div style={divStyles}>
                {items.map((item) => (
                    <Business content={item} />
                ))}
            </div>
        );
    } catch (error) {
        return <div> Nothing found. </div>;
    }
}

export default ShowAllBusiness;
