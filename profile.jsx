import React from "react";
import pic from "./profile.jpeg";

function Profile(){
    return <div className="profile">
    <img className="profile-image" src={pic} />
       <div className="profile-name"><h4>Sathish Kumar</h4>
       <h5>Chennai, TN</h5></div>
    </div>
}

export default Profile