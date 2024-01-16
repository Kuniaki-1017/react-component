
import './Rightbar.css';

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="eventConteiner">
                    <figure className="eventImgBox"><img src="/public/img/star.png" alt="" className="eventImg" /></figure>
                    <span className="eventText"><b>フォロワー限定イベント開催中!!</b></span>

                </div>
                <figure className="eventThumbBox"><img src="/public/img/ad.jpeg" alt="" className="eventThumbImg" /></figure>
                <h4 className="rightbarTitle">オンラインの友達</h4>
                <ul className="rightbatFriendList">
                    <li className="rightbarFriend">
                        <figure className="rightbarProfileImgBox">
                            <img src="/public/img/person/1.jpeg" alt="" className="ightbarProfileImg" />
                            <span className='rightbarOnline'></span>
                        </figure>
                        <span className="rightbarProfileName">name</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Rightbar;