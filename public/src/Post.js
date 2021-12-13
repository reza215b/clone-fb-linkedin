import { Avatar } from '@mui/material';
import React from 'react'
import InputOption from "./InputOption"
import "./Post.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({ profilePic, name, description, message, image }) {
    return (
    <div className='post'>
        <div className="post__header">
        <Avatar src={profilePic} />
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
            </div>    
        </div>
        <div className="post__body">
        <p>{message}</p>
        </div>
        <div className="post__image">
        <img src={image} alt="" />
        </div>
        <div className="post__button">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray"/>
        <InputOption Icon={CommentIcon} title="Comment" color="gray"/>
        <InputOption Icon={ShareIcon} title="Share" color="gray"/>
        <InputOption Icon={SendIcon} title="Send" color="gray"/>
        </div>
    </div>
        );
}

export default Post
