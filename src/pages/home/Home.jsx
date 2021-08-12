import { useHistory } from 'react-router-dom';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import { useAuth } from '../../contexts/AuthContext';
import './home.scss';

const Home = () => {
    let history = useHistory()
    const { currentUser } = useAuth()
    if (!currentUser) {
        history.push('/Login')
    }
    return (
        <div className="home">
            <Navbar />
            <Featured type="movie" />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
