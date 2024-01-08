import React from 'react';
import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {

    return (
        <div className='topbarConteiner'>
            <div className="topbarLeft">
                <span className="logo">Real SNS</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className='serachIcon' />
                    <input type="text" className="searchInput" placeholder='探し物は何ですか？' />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarIconItems">
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <figure className='topbarImgBox'>
                        <img src="/public/img/person/1.jpeg" alt="" className='topbarImg' />
                    </figure>
                </div>
            </div>


        </div>


    )
}

export default Topbar;