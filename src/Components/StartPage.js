import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GrStorage } from "react-icons/gr";
import { FiUploadCloud } from "react-icons/fi";
import { BsBarChartLine } from "react-icons/bs";
import { GiSpeedometer, GiFireShield } from "react-icons/gi";
import { BiCheckShield } from "react-icons/bi";
import { IconContext } from "react-icons";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { default as image } from "../Assets/StartPage_footer.PNG";

export default function StartPage() {
  // const myDivColor = {
  //   color: "red",
  //   fontFamily: "Sans-Serif",
  //   fontSize: "3rem",
  // };

  return (
    <div className='container-fluid' style={{background: '#A7EEEE'}}>

          <div className="row p-1">
            <div className="col-lg-2">
              <a href="." className='text-success badge rounded-pill bg-light text-decoration-none p-3 w-100'>Premium</a>
            </div>
            <div className="col-lg-8"></div>
            <div className="col-lg-2 d-flex">
              <a href="." className='text-decoration-none badge rounded-pill bg-info p-3 w-100'>Sign in</a>
              &ensp;
              <a href="." className='text-decoration-none badge rounded-pill bg-info p-3 w-100'>Sign up</a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 p-5 text-center">
              <p style={{color: 'gray'}}>UC-Release v1.0.0</p>
              <h1 style={{fontWeight: '900'}}>ULTIMATE CLOUD</h1>
              <h4>THE INFINITY FREE BASE STORAGE FILE</h4>
              <button className='btn btn-warning btn-lg text-success'><RiUploadCloud2Fill /> <span className='text-white'>Upload Files</span></button>
              <br />
              <p style={{fontWeight: 'bold', display: 'inline'}}>Popular files: </p><span>zip, mp3, PDF, doc, images...</span>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <p className='text-center'>FEATURES</p>
              <div className="d-flex">
                <div className='bg-light p-3 m-1 w-100'>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <FiUploadCloud />
                  </IconContext.Provider>
                  <p className='fw-bold'>Simple Uploading</p>
                  <p>Upload your videos as fast as your connection will allow & up to 5GB per file.</p>
                </div>
                <div className='bg-light p-3 m-1 w-100'>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <GrStorage />
                  </IconContext.Provider>
                  <p className='fw-bold'>Unlimited Storage</p>
                  <p>Don't worry about low space, There is no limit for Storage .. you can upload as you like.</p>
                </div>
                <div className='bg-light p-3 m-1 w-100'>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BsBarChartLine />
                  </IconContext.Provider>
                  <p className='fw-bold'>Live Reports</p>
                  <p>Get and track all your views and earning in real time.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className='bg-light p-3 m-1 w-100'>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <GiSpeedometer />
                  </IconContext.Provider>
                  <p className='fw-bold'>Unlimited Speed</p>
                  <p>Downloading has never been faster with our blazing fast servers.</p>
                </div>
                <div className='bg-light p-3 m-1 w-100'>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <BiCheckShield />
                  </IconContext.Provider>
                  <p className='fw-bold'>Safe & Secure</p>
                  <p>With our advanced encryption method your files will be always safe with us.</p>
                </div>
                <div className='bg-light p-3 m-1 w-100'>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <GiFireShield />
                  </IconContext.Provider>
                  <p className='fw-bold'>Ad-Free</p>
                  <p>With our advanced encryption method your files will be always safe with us.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center p-5" style={{background: '#B9F4EA'}}>
              <img src={image} alt="StartPage_footer" className='rounded' />
              <br />
              <p className='h4 fw-bold'>What are you waiting for?</p>
              <a href="." className='badge rounded-pill bg-info text-decoration-none p-3'>Get Started</a>
            </div>
          </div>

    </div>
  )
}
