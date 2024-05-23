import Header from "./Header";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getposts} from '../slices/appSlice.js';

export default function NewPost() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await dispatch(getposts());
            setPost(response.payload[postId - 1]);
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(post);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Header />
        <div className="cardof">
            <img src={post.avatar} width="500px" height="700px"></img>
            <div className="text-of-card">
                <div>
                    <div className="header-of-card">
                        {post.title}
                    </div>
                    <div className="main-text-card">
                        {post.content}
                    </div>
                    
                </div>
                <div className="help-tel">
                    {post.accountDetails}
                    <div className="goal">
                         NEED: {post.goal}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
