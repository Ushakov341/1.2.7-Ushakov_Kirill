import React from "react";
import userProfile from "./UserProfile";

function Interests() {
        return( 
        <>
        <div className="card">
          <div className="card-header">Интересы</div>
            {userProfile.map ((userProfile) => ( 
              <ul className="card-content">
            <li className="content-item">
            {userProfile.interests}
            </li>
            </ul>
           ))}
        </div>
        </>
        )
}

export default Interests;