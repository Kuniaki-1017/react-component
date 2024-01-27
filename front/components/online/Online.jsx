import PropTypes from 'prop-types';

const Online = ({user}) => {
    return (
        <li className="rightbarFriend">
        <figure className="rightbarProfileImgBox">
            <img src="/src/assets/img/person/1.jpeg" alt="" className="rightbarProfileImg" />
        </figure>
        <span className='rightbarOnline'></span>
        <span className="rightbarProfileName">{user.username}</span>
    </li>

    )
}

Online.PropTypes = {
    user: PropTypes.
}


export default Online;