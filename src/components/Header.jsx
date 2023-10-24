import React from 'react';
import logo from "../assets/Logo.png"
import profileIcon from "../assets/Profile.png"
import notificationIcon from "../assets/Notification.png"
import {HiViewList} from 'react-icons/hi';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-nav-block'>
                <div className='logo-block'>
                    <img className='logo' src={logo} alt={'logo'}/>
                    <span className='logo-text'>arber</span>
                </div>
                <div className='navbar'>
                    <span className='nav-item'>Home</span>
                    <span className='nav-item'>History</span>
                    <span className='nav-item'>Service</span>
                    <span className='nav-item'>Gallery</span>
                </div>
            </div>
            <div className='appointment-block'>
                <div className='profile-icon'>
                    <img src={profileIcon} alt="user-icon"/>
                </div>
                <div className='notification-icon'>
                    <img src={notificationIcon} alt="alert-icon"/>
                </div>
                <button className='appointment-button'>Appointment</button>
            </div>
            <HiViewList className='burger-menu-icon'/>
        </header>
    );
};

export default Header;


// import React from 'react';
// import scissorIcon1 from "../assets/Logo.png"
// import profileIcon from "../assets/Profile.png"
// import notificationIcon from "../assets/Notification.png"
//
// const Header = () => {
//     return (
//         <div className='header'>
//             <div className='logo-block'>
//                 <img className='logo' src={scissorIcon1} alt="logo-1"/>
//                 <div className={'logo-sign'}>arber</div>
//             </div>
//             <div className='navbar'>
//                 <p>Home</p>
//                 <p>History</p>
//                 <p>Service</p>
//                 <p>Gallery</p>
//             </div>
//             <div className='appointment-block'>
//                 <img className='user-icon' src={profileIcon} alt="profile"/>
//                 <img className='bell-icon' src={notificationIcon} alt="profile"/>
//                 <button className='appointment-btn'>Appointment</button>
//             </div>
//
//         </div>
//     );
// };
//
// export default Header;