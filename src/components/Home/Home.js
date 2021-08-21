import GetStarted from "./GetStarted/GetStarted";
import Header from "./Header/Header";
import Jobs from "./Jobs/Jobs";
import PostJob from "./PostJob/PostJob";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Jobs />
            <PostJob />
            <GetStarted />
            <Footer />
        </div>
    );
};

export default Home;
