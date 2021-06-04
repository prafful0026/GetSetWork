import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/NavBar.css'

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="navbar_left"><Link to={'/'} >GetSetWork</Link></div>
            <div className="navbar_right">
                <div className="navbar_icons navbar_user">
                    <i class="navbar_icons far fa-user-circle"></i>
                </div>
                <div className="navbar_icons navbar_notification">
                    <i class="far fa-bell"></i>
                    <div className="navbar_notificationCount">5</div>
                </div>
                <div className="navbar_icons navbar_message">
                    <i class="far fa-envelope"></i>
                    <div className="navbar_messageCount">5</div>
                </div>
            </div>
        </div>
    )
}
