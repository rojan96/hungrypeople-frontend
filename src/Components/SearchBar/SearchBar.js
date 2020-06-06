import React, {useState, useEffect} from 'react';
import Business from "../Business/Business";

const divStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
}

function SearchBar() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/business'
        );
        const items = await data.json();
        console.log(items.content);
        setItems(items.content)
    }

    try {
        return (
            <div style={divStyles}>
                {
                    items.map(item => (
                        <Business content={item}/>
                    ))
                }
            </div>
        );
    } catch (error) {
        return (<div> Nothing found. </div>)
    }

}

export default SearchBar;