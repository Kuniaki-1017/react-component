import React from 'react';
import './Topbar.css';

const Topbar = () => {

    return (
        <div className='topbarConteiner'>
            <div className="topbarLeft">
                <span className="topbarLeft">Real SNS</span>
            </div>
            <div className="topbarCenter">
                <div className="serachbar">
                    <input type="text" className="serchInput" placeholder='探し物は何ですか？' />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarIconItem">1</div>
                <div className="topbarIconItem">2</div>
            </div>
            <img src="/public/img/person/1.jpeg" alt="" className='topbarImg' />


        </div>


    )
}

export default Topbar;