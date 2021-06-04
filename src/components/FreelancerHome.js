import React, { useEffect } from 'react'
import '../assets/FreelancerHome.css'
import FreelancerProjectCard from './FreelancerProjectCard'
import NavBar from './NavBar'

export default function FreelancerHome() {

    return (
        <>
            <NavBar/>
            <div className='freelancerHome'>
                <div className="freelancerHome_left">
                    <div className="freelancer_photo"><img src="https://media-exp3.licdn.com/dms/image/C4E03AQHhhPDR-pWxnw/profile-displayphoto-shrink_800_800/0/1607581026296?e=1628121600&v=beta&t=5xqKd8iFWdyO1-gp_nWd6_t0CUmVkB27sKMVSe_gTaQ" alt="display photo" /></div>
                    <div className="freelancer_about">
                        <strong>About</strong>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. 
                        </p>
                    </div>
                    <div className="freelancer_skill">
                        <strong>Skills</strong>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua.
                        </p>
                    </div>
                </div>
                <div className="freelancerHome_right">
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>

                </div>
            </div>
        </>
    )
}
