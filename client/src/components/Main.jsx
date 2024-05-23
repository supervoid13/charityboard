import React from 'react';
import Header from "./Header";
import pic from "../assets/dw.jpeg";
import pic2 from "../assets/man.jpg";
import arrow from '../assets/navigate.png';
import { Outlet, Link } from "react-router-dom";
import { Button } from '@mantine/core';
import Footer from './Footer';

export default function Main() {
  return (
    <>
    <div className="main-container">
      <Header></Header>
      <div className="image-container">
        <img src={pic} alt="Image" className="image" />
        <div className='shade'></div>
        <div className='maxp'>
            <p >Help people with us!</p>
        </div>
        <div className='minip'>
            <p>Charity Boad.</p>
        </div>  
        <Link style={{ textDecoration: 'none' }} to={"/posts"}>
            <div className='goto'>
                <img src={arrow} width="50"></img>
                <p className='myp'>Go check posts!</p>
            </div>
        </Link>
      </div>
    </div>
    <div className='second-main'>
        <div className='orange-block'>
            <div className='text-in-or'>
                <span className="try">DO YOU NEED FINANCIAL HELP?</span>
                <Button variant="outline" color="rgba(255, 255, 255, 1)" size='xl' className='buth'>LEAVE A REQUEST!</Button>
            </div>
        </div>
        <img src={pic2} width="1200" height="575"></img>
    </div>
    <Footer></Footer>
    </>
  );
}