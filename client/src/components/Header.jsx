import React, { useState } from 'react';
import logo from '../assets/Artboard 1@3x.png';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import { Button, Modal, FileInput, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import axios from 'axios';
import {post} from '../slices/appSlice.js';
export default function Header() {
    const user = useSelector(state => state.app.user);
    const isLoggedIn = useSelector(state => state.app.isLoggedIn);
    const [opened, { open, close }] = useDisclosure(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(1);
    const [file, setFile] = useState(null);
    const [imgurUrl, setImgurUrl] = useState(null);
    const [goal, setGoal] = useState(0);
    const [details, setDetails] = useState('');
    const dispatch = useDispatch();
    const handleFileChange = (file) => {
        setFile(file);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('https://api.imgur.com/3/image', formData, {
                headers: {
                    Authorization: `Client-ID fd10f9828f5c913`,
                },
            });

            const imgUrl = response.data.data.link;
            setImgurUrl(imgUrl);

            // Here you can send the image URL along with other form data to your backend
            // For demonstration, just logging the URL
            console.log('Uploaded Image URL:', imgUrl);

            // Close the modal after upload
        } catch (error) {
            console.error('Error uploading to Imgur:', error);
            alert('Failed to upload file to Imgur');
        }
    };
    const handlePost = async () => {
        handleUpload();
        
        const response = await dispatch(post(title, content, category, imgurUrl, goal, details));

        console.log(response);
        close();
    }
    return (
        <>
            <Modal opened={opened} onClose={close}>
                <Input.Wrapper label="Title" mt="sm">
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" />
                </Input.Wrapper>
                <Input.Wrapper label="Content" mt="sm">
                    <Input value={content} onChange={(e) => setContent(e.target.value)} placeholder="" />
                </Input.Wrapper>
                <Input.Wrapper label="Category" mt="sm">
                    <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="" />
                </Input.Wrapper>
                <Input.Wrapper label="Goal" mt="sm">
                    <Input value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="" />
                </Input.Wrapper>
                <Input.Wrapper label="Details" mt="sm">
                    <Input value={details} onChange={(e) => setDetails(e.target.value)} placeholder="" />
                </Input.Wrapper>
                <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" mt="sm" onChange={handleFileChange} />
                <div className='button-modal'>
                    <Button onClick={handlePost} color='orange'>Send</Button>
                </div>
                {imgurUrl && (
                    <div>
                        <p>Uploaded Image URL: <a href={imgurUrl} target="_blank" rel="noopener noreferrer">{imgurUrl}</a></p>
                        <img src={imgurUrl} alt="Uploaded" />
                    </div>
                )}
            </Modal>
            <div className='header'>
                <Link to={"/"}><img src={logo} height="85px" className='logo' alt="Logo" /></Link>
                <div className='texts'>
                    <div className='link' onClick={open}>
                        <span className='perexod'>
                            CREATE A POST
                        </span>
                    </div>
                    <Link style={{ textDecoration: 'none' }} to={"/posts"}>
                        <div className='link'>
                            <span className='perexod'>
                                VIEW POSTS
                            </span>
                        </div>
                    </Link>
                    {!isLoggedIn &&
                        <div className='signs'>
                            <Link to={`/signup`} style={{ textDecoration: 'none' }}><Button variant="filled" color="orange" size="md">SIGN UP</Button></Link>
                            <Link to={`/signin`} style={{ textDecoration: 'none' }}><Button variant="default" color="gray" style={{ marginLeft: '5px' }}>SIGN IN</Button></Link>
                        </div>
                    }
                    {user &&
                        <div className='signs'>
                            {user}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}