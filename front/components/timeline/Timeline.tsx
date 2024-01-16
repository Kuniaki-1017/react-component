import Share from '../share/Share';
import Post from '../Post/Post';
import './Timeline.css';
import { Posts } from '../../data/dummydata.js';

Posts

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>


  )
}

export default Timeline;