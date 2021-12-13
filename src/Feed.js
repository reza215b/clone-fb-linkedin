import React, { useEffect, useState } from 'react'
import './Feed.css';
import Post from './Post'
import InputOption from './InputOption.js';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import { Avatar } from '@mui/material';

function Feed() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = e => {
        e.preventDefault();

      db.collection('posts').add({
            name: "reza",
            description: "tes aja",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };

    return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Avatar />
                <form>
                    <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    type="text"
                    placeholder={"How's your day?"}
                    />
                    <input 
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="image URL" 
                    />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo"
                color="#70B5F9" />
                <InputOption Icon={EventIcon} title="Event"
                color="#70B5F9" />  
                <InputOption Icon={CalendarViewDayIcon} title="Article"
                color="#70B5F9" />  
            </div>
        </div>
        {posts.map(({ id, data: {name, description, message,
        photoUrl} }) => (
          <Post 
          key = {id}
          name = {name}
          description = {description}
          message ={message}
          photoUrl= {photoUrl}
          />  
        ))}
    
    </div>
    );
}

export default Feed
