
import './Rightbar.css';
import Online from '../online/Online'
import {Users} from '../../data/dummydata';


const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="eventConteiner">
                    <figure className="eventStarImgBox"><img src="/src/assets/img/star.png" alt="" className="starImg" /></figure>
                    <span className="eventText"><b>フォロワー限定イベント開催中!!</b></span>
                </div>
                <figure className="eventThumbBox"><img src="/src/assets/img/ad.jpeg" alt="" className="eventThumbImg" /></figure>
                <h4 className="rightbarTitle">オンラインの友達</h4>
                <ul className="rightbatFriendList">
                    {Users.map((user) => {
                        return(
                            <Online user={user} key={user.id} />
                        )
                    })}
                </ul>
                <h3 className="promotionTitle">プロモーション広告</h3>
                <ul className="promotionList">
                    <li className="promotionItem">
                        <figure className="promotionImgBox"><img src="/src/assets/img/promotion/promotion1.jpeg" alt="" className="promotionImg" /></figure>
                        <p className="promotionName">ショッピング</p>
                    </li>
                    <li className="promotionItem">
                        <figure className="promotionImgBox"><img src="/src/assets/img/promotion/promotion2.jpeg" alt="" className="promotionImg" /></figure>
                        <p className="promotionName">カーショップ</p>
                    </li>
                    <li className="promotionItem">
                        <figure className="promotionImgBox"><img src="/src/assets/img/promotion/promotion3.jpeg" alt="" className="promotionImg" /></figure>
                        <p className="promotionName">カンパニー</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Rightbar;