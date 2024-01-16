import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <figure className="postIconImg"><img src="/src/assets/img/person/1.jpeg" alt="" className="iconImg" /></figure>
                        <span className="postUserName">kuniaki</span>
                        <div className="postDate">5分前</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon className="" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">SNSを自作中です</span>
                    <figure className="postImgBox"><img src="/src/assets/img/post/1.jpeg" alt="" className="postImg" /></figure>

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <figure className="likeImgBox"><img src="/src/assets/img/heart.png" alt="" className="likeImg" /></figure>
                        <span className="postLikeCounter">5人がいいねを押しました</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postLikeCommentText">4:コメント</span>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post;