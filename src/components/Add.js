import Popup from "reactjs-popup";
import itemData from "../utils/mockData";
import {useState} from "react";

function Add() {
    const [searchText,setSearchText] = useState("");
    const [selectedItems,setSelectedItems] = useState([]);
    const [itemList,setItemList] = useState(itemData);

    const filterItems = itemList.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))

    const handleClick = (item) => {
        const updateItemList = itemList.filter((i)=> i!==item);
        setItemList(updateItemList);
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    }
    const handleRemove = (item) => {
        const updateItemList = selectedItems.filter((i)=> i!==item);
        setSelectedItems(updateItemList);
        
        setItemList((prevSelectedItems) => [...prevSelectedItems, item]);
    }
    return (
        <div>
            <Popup 
            trigger={<input type="text" className="input" value={searchText} onChange = {(e)=> {setSearchText(e.target.value)}}></input>}
            position="bottom left">
                <div className="pop-up"> {
                    filterItems.map((item) => 
                    <div className="item" onClick ={() => handleClick(item)}>{item}</div>)
                    }
                </div>
            </Popup>
            {
                selectedItems.map((item) => 
                <div className="chip">
                <button>{item}</button>
                <button className="remove" onClick = {() => handleRemove(item)}>X</button>
                </div>
                )
            }
           
        </div>
    )
}
export default Add;