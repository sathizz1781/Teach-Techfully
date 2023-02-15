import React from "react";
import pic from "./tropy.jpeg"
import { FaRegListAlt } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaTeamspeak } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function Navbar() {
return <div className="navBar">
    <h3 className="navBar-h3">Task Techfully</h3>
    <button><h4 className="navBar-h4"><FaRegListAlt /> Courses</h4></button><br></br>
    <button><h4 className="navBar-h4"><FaMoneyCheck /> Payment</h4></button><br></br>
    <button><h4 className="navBar-h4"><FaRocketchat /> Chat</h4></button><br></br>
    <button><h4 className="navBar-h4"><FaPeopleArrows /> Groups</h4></button><br></br>
    <button><h4 className="navBar-h4"><FaUserGraduate /> Students</h4></button><br></br>
    <button><h4 className="navBar-h4"><FaTeamspeak /> Support</h4></button><br></br>
    <img className="navBar-image" src={pic} /><br></br>
    <button><h4 className="navBar-h4"><FaExternalLinkAlt /> Logout</h4></button><br></br>
</div>
}

export default Navbar