import React from 'react';

function About() {
    return(
        <div id='about'>
            <div className='about-text'>
               <h1>UPCOMING EVENT</h1>
               <p>Add Event Here</p>
            </div>
            <div className='about-image'>
               <img src={aboutimage} alt=''/>
            </div>

        </div>
    )
}

export default About;