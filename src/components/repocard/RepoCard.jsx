import React from "react"
import './Repocard.css'


const RepoCard = ({repoName, owner, repoPrivate}) => {
    const repoLink = `https://github.com/${owner}/${repoName}`


    return (
        <div className= "repocard">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            <h4>{repoName}</h4>
            <h4>Private: {repoPrivate? "Private": "Public"}</h4>
            <a href={repoLink} target="_blank">See more about this Repo</a>
            

            
        </div>
    )
}

export default RepoCard
