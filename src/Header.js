import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import image from "./image/tinder-logo.jpg";
import ForumIcon from '@material-ui/icons/Forum';
import Tindercards from './TinderCards';


export default function Header() {
    

    return (
        <div className='header'>         
            <IconButton>
                < PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img 
            className="header_logo"
            src={image} alt={"logo"}
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>           
        </div>
    )
}
