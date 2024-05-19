import React from 'react';
import Header from "./Header";
import pic from "../assets/dw.jpeg";
import arrow from '../assets/navigate.png';
import { Outlet, Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="main-container">
      <Header></Header>
      <div className="image-container">
        <img src={pic} alt="Image" className="image" />
        <div className='shade'></div>
        <div className='maxp'>
            <p >Help people with us!</p>
        </div>
        <div className='minip'>
            <p>On this platform you can give money to the people!</p>
        </div>
        <Link style={{ textDecoration: 'none' }}>
            <div className='goto'>
                <img src={arrow} width="50"></img>
                <p className='myp'>Go check posts!</p>
            </div>
        </Link>
      </div>
    </div>
  );
}