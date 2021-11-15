import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react' 
import "./Header.styles.css"

const Header = () => {

    const [show, setShow] = useState(false)
        const navigate = useNavigate(); 
        const handlerMenu = ()=>{ setShow(!show) } 
        return(

        
        <>
            <div className ="header-container">
            <h1>Project Github </h1>
            <button onClick={handlerMenu}><i className="fa fa-bars">
                </i></button> 
            
            </div>
            <div className={show ? "menuNav" : "notVisible"}>
            <ul>
                <li onClick={()=> navigate('/')}>
                    <a class="fa fa-home"/><span>Home</span>
            </li>
            <li onClick={()=> navigate(- 1)}>
        <a href="#" class="previous round">&#8249;</a>
        <span>Go Back</span>
            </li><li onClick={()=> navigate(+ 1)}>
            < span className="onlySpan">Next</span>
            <a href="#" class="next round">&#8250;</a>
        </li>
        </ul>
        </div>
        </>
        )
}

export default Header
