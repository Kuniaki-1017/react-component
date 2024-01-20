import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import {Users} from '../../data/dummydata';



const Post = ({post}) => {
    // const user = Users.filter((user) => user.id ===post.id );
    // console.log(user[0].username)
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <figure className="postIconImg"><img src={Users.filter((user) => user.id === post.id  )[0].profilePicture}  alt="" className="iconImg" /></figure>
                                                        {/*  filterで条件に合うオブジェクトを取得。filterは履いてるで返すため[{取得オブジェクトの中身}]の0番目のusernameで動的に名前を取得*/}
                        <span className="postUserName">{Users.filter((user) => user.id === post.id)[0].username}</span>
                        <div className="postDate">{post.date}</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon className="" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <figure className="postImgBox"><img src={post.photo} alt="" className="postImg" /></figure>

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <figure className="likeImgBox"><img src="/src/assets/img/heart.png" alt="" className="likeImg" /></figure>
                        <span className="postLikeCounter">{post.like}人がいいねを押しました</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postLikeCommentText">{post.comment}:コメント</span>

                    </div>
                </div>
            </div>
        </div>
    )
};
/* 特に注意なのは対象コンポーネント(Post.propTypesでいうとPost)が定義される前に使用するとエラーになる */
/* propを渡したときはPropTypesで型の検証を行わないとエラーになる */
/* PropTypesとpropTypesで小文字の箇所が異なるので注意 */
Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;