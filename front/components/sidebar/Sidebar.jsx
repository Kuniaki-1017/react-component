
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidbarItem">
                        <HomeIcon className="sidebarIcon" />
                        <span className="sidebarItemText">ボーム</span>
                    </li>
                    <li className="sidbarItem">
                        <SearchIcon className="sidebarIcon" />
                        <span className="sidebarItemText">検索</span>
                    </li>
                    <li className="sidbarItem">
                        <NotificationsIcon className="sidebarIcon" />
                        <span className="sidebarItemText">通知</span>
                    </li>
                    <li className="sidbarItem">
                        <MessageIcon className="sidebarIcon" />
                        <span className="sidebarItemText">メッセージ</span>
                    </li>
                    <li className="sidbarItem">
                        <BookmarkIcon className="sidebarIcon" />
                        <span className="sidebarItemText">ブックマーク</span>
                    </li>
                    <li className="sidbarItem">
                        <PersonIcon className="sidebarIcon" />
                        <span className="sidebarItemText">プロフィール</span>
                    </li>
                    <li className="sidbarItem">
                        <SettingsIcon className="sidebarIcon" />
                        <span className="sidebarItemText">設定</span>
                    </li>
                </ul>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <figure className="sidebarImgBox"><img className="sidebarImg" src="/src/assets/img/person/2.jpeg" alt="" /></figure>
                        <span className="sidebarFriendName">Shin Code</span>
                    </li>
                    <li className="sidebarFriend">
                        <figure className="sidebarImgBox"><img className="sidebarImg" src="/src/assets/img/person/3.jpeg" alt="" /></figure>
                        <span className="sidebarFriendName">Tnaka</span>
                    </li>
                    <li className="sidebarFriend">
                        <figure className="sidebarImgBox"><img className="sidebarImg" src="/src/assets/img/person/4.jpeg" alt="" /></figure>
                        <span className="sidebarFriendName">Sato</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;