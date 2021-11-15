import React from "react";
import { Link } from "react-router-dom";
import "../FollowersCard/Followers.styles.css"

const FollowersCard = ({userName, image}) => {
  return (
    <div className="followercard">
      <img src={image} alt={`image of ${userName}`} /> 
      <h4>{userName}</h4>
      <Link to={`/users/${userName}`}>
        <button>Ver mas!</button>
      </Link>
    </div>
  );
};

export default FollowersCard;
