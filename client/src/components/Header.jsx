import React from 'react';
import logo from '../assets/Artboard 1@3x.png';
import { useSelector } from 'react-redux'
import { Outlet, Link } from "react-router-dom";
import { Button } from '@mantine/core';

export default function Header() {


    return (
    <>
        <div className='header'>
            <Link to={"/"}><img src={logo} height="85px" className='logo'></img></Link>
            <div className='texts'>
                <Link style={{ textDecoration: 'none' }}>
                <div className='link'>
                    <span className='perexod'>
                        CREATE A POST
                    </span>
                </div>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                <div className='link'>
                    <span className='perexod'>
                        VEIW POSTS
                    </span>
                </div>
                </Link>
                <div className='signs'>
                    <Link to={`/signup`} style={{ textDecoration: 'none' }}><Button variant="filled" color="orange" size="md" >SIGN UP</Button></Link>
                    <Link to={`/signin`} style={{ textDecoration: 'none' }}><Button variant="default" color="gray" style={{"margin-left": "5px"}}>SIGN IN</Button></Link>
                </div>
            </div>
        </div>
    </>
  );
}