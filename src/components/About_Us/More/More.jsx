import React from 'react';
import Image from '../../../assets/About/about-item-menu.png';
import '../responsive.css';
import './More.css'

const More = () => {
    return (
        <section className="about">
            <img src="../../../assets/About/about-item-menu.png" className="about-site-img" alt="" />
            <div className="about-container">
                <div className="about-img-container">
                    <img src={Image} className="about-image" alt="" />
                </div>
                <div className="about-text-container">
                    <div className="about-headings">
                        
                        <h1 className="about-main-heading">
                            Food Is An Important Part Of A Balanced Diet
                        </h1>
                        <p className="about-sub-heading">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Debitis ea magni quod dicta tenetur!
                            Ea fugiat rem magni quasi eius quisquam.
                            Qui commodi non quaerat exercitationem 
                            sed, assumenda iure quos?
                        </p>
                        <p className="about-sub-heading">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Debitis ea magni quod dicta tenetur!
                            Ea fugiat rem magni quasi eius quisquam.
                        </p>
                        <p className="about-sub-heading">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Debitis ea magni quod dicta tenetur!
                            Ea fugiat rem magni quasi eius quisquam.
                        </p>
                        <div className="about-btns">
                            <a href="#" className="action-btn">Learn More</a>
                            <a href="#" className="action-btn-two"><i className="fa fa-video-camera"></i> Watch Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default More;
