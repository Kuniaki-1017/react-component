import './Home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';


const Home = () => {
    return (
        <>
            <Topbar />
            <Sidebar />
            <Timeline />
        </>)

}

export default Home;