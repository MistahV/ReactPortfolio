import React from 'react'
import portrait from '../assets/images/ProfilePic.jpeg'


const Intro = () => {
    return (
        <div>
            
            <div className="proPic">
                {/* <img src="./assets/images/ProfilePic.jpeg" alt="CV Photo"> </img> */}
                <img src={portrait} alt="Me, Myself and I"></img>
            </div>

            <main>
            
            <section className="about">
                <p className="txt-bld">About Me!</p>
                <p>Hello! My name is Chris Van Etten, and I am currently a high school reading and writing teacher on the South Side of Chicago. Teaching has been one of the most difficult yet rewarding things that I've ever done, and I have been privleged enough to teach the same group of student for all four years of their high school careers!</p>
                <p>Now that my students are graduating, I am ready to switch careers. I am hoping to enter the consulting field and to eventually start my own organization in Chicago, and in the modern world, an understanding of the Internet and website design is an indispensable tool. I enrolled in the 6-month Northwestern Coding Boot Camp program to help me develop this skillset as I prepare to leave the classroom.</p>
                <p>Below, you will see a collection of the multiple projects I have completed independently as part of this coding program. Please reach out directly using my contact information at the bottom if you have any questions! I look forward to hearing from you soon!</p>
            </section>

            </main>
        </div>
    )
}


export default Intro;
