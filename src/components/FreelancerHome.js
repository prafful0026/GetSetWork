import React, { useEffect, useState } from 'react'
import '../assets/FreelancerHome.css'
import FreelancerProjectCard from './FreelancerProjectCard'
import NavBar from './NavBar'

export default function FreelancerHome() {
    const [yourProjectModal, setYourProjectModal] = useState(false)

    const handleYourProjectClick = () => {
        if(yourProjectModal){
            setYourProjectModal(false)
        }else{
            setYourProjectModal(true)
        }
    }

    return (
        <>
            <NavBar/>
            <div onClick={handleYourProjectClick} className="freelancerHome_yourProjectButton">
                <i class="fas fa-scroll"></i>
            </div>
            {yourProjectModal&&(
            <div>
                <div onClick={handleYourProjectClick} className="modalBackground"></div>
                <div className="freelancerHome_yourProject">
                    <h1 style={{paddingLeft:'5vw'}}>Your Projects</h1>
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
            )}
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
