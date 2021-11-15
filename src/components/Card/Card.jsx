import React from 'react'
import "./Card.styles.css"
import { Link } from 'react-router-dom'

const Card = (props) => {
    const {userName, image, followers, following, repositories}=props
    return (
        <div className="card-container">
          <img src={image} alt={`image of ${userName}`} />  
          <h2>{userName}</h2>
          <ul>

          <Link to={`/users/${userName}/followers`}> <li>Followers</li> </Link>
          <Link to={`/users/${userName}/following`}> <li>Following</li> </Link>
          <Link to={`/users/${userName}/repo`}> <li>Repositories</li> </Link>
          </ul>
        </div>
    )
}

export default Card