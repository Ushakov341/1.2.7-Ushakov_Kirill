import React from "react";
import userProfile from "./UserProfile";

function Location() {
        return( 
        <>
        <div className="card">
          <div className="card-header">Местоположение</div>
          <div className="card-content">Страна: {userProfile.location.country}</div>
          <div className="card-content">Город: {userProfile.location.city}</div>
          <div className="card-content">Адрес: {userProfile.location.address}</div>
        </div>
        </>
        )
}

export default Location;