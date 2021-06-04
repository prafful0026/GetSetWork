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
                    <div className="freelancer_photo"><img src="https://avatars.githubusercontent.com/u/55028717?v=4" alt="display photo" /></div>
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
                    <FreelancerProjectCard none={'none'}/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard none={'none'}/>
                    <FreelancerProjectCard none={'none'}/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard/>
                    <FreelancerProjectCard none={'none'}/>
                    <FreelancerProjectCard/>

                </div>
            </div>
        </>
    )
}
