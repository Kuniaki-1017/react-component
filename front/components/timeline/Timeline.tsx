import Share from '../share/Share';
// import Post from '../Post/Post';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {/* <Post /> */}
      </div>
    </div>


  )
}

export default Timeline;