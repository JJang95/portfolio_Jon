import React from 'react';
import Typical from 'react-typical';

export default function profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter'></i>
                        </a>    
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Jonathan</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop = {Infinity}
                                    steps={[
                                        "Full Stack Developer",
                                        1000,
                                        "Web Developer",
                                        1000,
                                        "MERN Stack Developer",
                                        1000,
                                        "React/React Native Developer",
                                        1000,
                                        "Backend Developer",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Proficient in developing applications that encompass both the front-end and back-end components.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            Hire Me {" "}
                        </button>
                        <a href='Jonathan Jang-Resume.pdf' download='Jonathan Jang.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
