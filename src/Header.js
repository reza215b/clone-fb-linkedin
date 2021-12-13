import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FlagIcon from '@mui/icons-material/Flag';
import AnnouncementIcon from '@mui/icons-material/Announcement';

function Header() {
    return ( 
    <div className="header">
     <div className="header__left">
        {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt=""
        /> */}
        <div className="header__input">
        <SearchIcon />
            <input placeholder= "Cari Project" type="text"/>
         </div>
        </div>

        <div className="header__center">
            <div className="header__option
            header__option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
                <AccountTreeIcon fontSize="large" />
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                <AnnouncementIcon fontSize="large" />
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar />
                <h4>M Reza</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>
    );
}

export default Header;
