import React from 'react'
import '../assets/FreelancerProjectCard.css'

export default function FreelancerProjectCard() {
    return (
        <div className='freelancerProjectCard'>
            <div className="freelancerProjectCard_Carousel"><img src="https://i.ytimg.com/vi/195RY7jCuZg/maxresdefault.jpg" alt="display photo" /></div>
            <div className="freelancerProjectCard_data">
                <p className="freelancerProjectCard_heading"><strong>Shopping App in Java/Kotlin</strong></p>
                <p className="freelancerProjectCard_discription">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non  
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="freelancerProjectCard_time"> <strong>Time : </strong>7-10 working days</p>
                <p className="freelancerProjectCard_price"><strong>Price : </strong>Rs.2,500</p>
            </div>
        </div>
    )
}
