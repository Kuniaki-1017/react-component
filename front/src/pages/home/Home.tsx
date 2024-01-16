import './Home.css';
import Topbar from '../../../components/topbar/Topbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import Timeline from '../../../components/timeline/Timeline';
import Rightbar from '../../../components/Rightbar/rightbar';


const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeConteiner">
                <Sidebar />
                <Timeline />
                <Rightbar />
            </div>
        </>
    )

}

export default Home;

