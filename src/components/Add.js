import { Button } from "@mui/material";
import Popup from "reactjs-popup";

function Add() {
    return (
        <div>
            <Popup 
            trigger={<Button>Add+</Button>}
            modal>
                <div className="pop-up">
                    <textarea className="pop-up-text" placeholder="Enter the task here" ></textarea>
                    <button className="pop-up-button">Save</button>
                </div>
            </Popup>
           
        </div>
    )
}
export default Add;