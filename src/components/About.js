import React from "react";
import myImage1 from "../img/nav3.jpg";
import myImage2 from "../img/about1.jpg";
import myImage3 from "../img/about2.jpg";
import myImage4 from "../img/about3.jpg";
import "./login.css";

const About = () => {
  return (
    <>
    <div className="about1">
   <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card change">
      <img src={myImage1} className="about-img1" alt="notes img" width="400" height="170"/>
      <div className="card-body">
      <h4 className='about1'>Welcome to Inotebook, your digital companion for capturing thoughts, ideas, and inspirations effortlessly. Our platform is designed to streamline your note-taking experience, helping you stay organized, productive, and inspired every step of the way.</h4>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card change">
    <img src={myImage3} className="about-img1" alt="notes img" width="400" height="170"/>
      <div className="card-body">
      <h4 className='about1'>With a focus on user experience and innovation, we've curated a robust set of features to meet your note-taking needs. From creating and editing notes to organizing them into customizable categories, our platform provides the flexibility and functionality you need to capture and organize your thoughts effectively. </h4>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card change">
    <img src={myImage2} className="about-img1" alt="notes img" width="400" height="170"/>
      <div className="card-body">
      <h4 className='about1'>Behind Inotebook is a dedicated team of professionals committed to delivering excellence in everything we do. With a blend of expertise in technology, design, and user experience, we're constantly innovating and evolving to bring you the best-in-class note-taking experience. Your security and privacy are our top priorities.</h4>


      </div>
    </div>
  </div>
  <div className="col">
    <div className="card change">
    <img src={myImage4} className="about-img1" alt="notes img" width="400" height="170"/>
      <div className="card-body">
      <h4 className='about1'>Our mission is simple to empower individuals to unlock their creativity, enhance their productivity, and achieve their goals through the power of digital note-taking. Whether you're a student, professional, or creative thinker, our platform offers a versatile and intuitive solution for managing your notes with ease.</h4>

      </div>
    </div>
  </div>
</div>
</div>
   </>
  );
};

export default About;

