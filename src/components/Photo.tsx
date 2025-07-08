import React from "react";
import userProfile from "./UserProfile";

function Photo() {
    return(
        <>
        <div className="description">
        <img className="photo--default" src={defaultUserPhoto} />
        <h4>{userProfile.userName}</h4>
        <p>{userProfile.userDescription}</p>
      </div>
      </>
    )
}

export default Photo;