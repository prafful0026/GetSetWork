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
                    <div className="freelancer_photo"><img src="https://d.newsweek.com/en/full/297016/mia-khalifa.jpg?w=1600&h=1200&q=88&f=05e38c93735f104017d3d79e772785a1" alt="display photo" /></div>
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
