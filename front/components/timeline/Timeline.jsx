/* 使用するコンポーネントとcssの読込 */
import Share from '../share/Share.jsx';
import Post from "../post/Post.jsx";
import './Timeline.css';
/* 作成したダミーデータを読み込む */
import { Posts} from '../../data/dummydata.js';




const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
       {/* Postsデータの数分(ユーザーの数だけ)map出力。map→配列の数分処理+新しい配列として値を返す=Postコンポーネント複数返す */}
        {Posts.map((post) => {
          return(
            /* map等で複数のコンポーネント出力する際は必ず一意のkeyを設定する */
            <Post post={post} key={post.id} />
          )
        }
        )}
       
      </div>
    </div>


  )
}

export default Timeline;