import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Home.css";
import Profile from "./Profile/Profile";

const Home = () => {
  return (
    <div id="Home" className="home-container">
      <Header />
      <Profile />
      <Footer />
      
    </div>
  );
};

export default Home;
