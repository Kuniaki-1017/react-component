import './Share.css';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import FaceIcon from '@mui/icons-material/Face';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <figure className="shareImgBox"><img src="/public/img/person/1.jpeg" alt="" className="shareImg" /></figure>
                    <input type="text" className="shareInput" placeholder='今何してるの' />
                </div>
                <hr className="shareHr" />
                <div className="shareButtons">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <ImageIcon className="shareIcon" htmlColor='blue' />
                            <span className="shareOptiontext">写真</span>
                        </div>
                        <div className="shareOption">
                            <GifIcon className="shareIcon" htmlColor='hotpink' />
                            <span className="shareOptiontext">GIF</span>
                        </div>
                        <div className="shareOption">
                            <FaceIcon className="shareIcon" htmlColor='green' />
                            <span className="shareOptiontext">気持ち</span>
                        </div>
                        <div className="shareOption">
                            <AnalyticsIcon className="shareIcon" htmlColor='red' />
                            <span className="shareOptiontext">投票</span>
                        </div>
                    </div>
                    <button className="shareButton">投稿</button>
                </div>
            </div>
        </div>
    )
};

export default Share;