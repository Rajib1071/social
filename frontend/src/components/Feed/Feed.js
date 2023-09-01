import React, { useState, useEffect } from 'react';
import CreatePost from './CreatePost'; // Import the CreatePost component
import Post from '../Post/Post'; // Import the Post component
import './feedStyles.css'; // Import feed styles
import axios from 'axios';


const Feed = () => {
    
    const [posts, setPosts] = useState([]); // State to hold posts

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('http://localhost:3001/api/posts/user/64f03f378c3e15f65b642471'); // Replace with your actual endpoint
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []); // Empty dependency array means this effect runs only once after initial render
    return (
        <div className="feed">
            <CreatePost />
            <div className="post-list">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
