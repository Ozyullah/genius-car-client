import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="card card-side shadow-xl mt-10">
                
                    <div className='imageOne'>
                        <figure><img src={person} alt="Movie" /></figure>
                    </div>
                    <div className='imageTwo'>
                        <figure><img src={parts} alt="Movie" /></figure>
                    </div>
            
                <div className="card-body ml-12">
                    <h4 className='text-red-400'>About Us</h4>
                    <h2 className="card-title">We are qualified <br /> & of experience <br /> in this field</h2>
                    <p className='text-xs'>There are many variations of passages of<br /> Lorem Ipsum available, but the majority<br /> have suffered alteration in some form,<br /> by injected humour, or randomised words<br /> which don't look even slightly believable.</p>

                    <p className='text-xs'>the majority have suffered alteration in some<br /> form, by injected humour, or randomised<br /> words which don't look even slightly believable. </p>
                    <div className="card-actions">
                        <button className="btn btn-warning">Get More info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;