import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "../Components/Navigationbar";
import LandingPage from "../Components/LandingPage";
import Trending from "../Components/Trending";
import Movies from "../Components/Movies";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div className="App">
      <Navigationbar />
      <LandingPage />
      <Trending />
      <Movies />
      <Footer />
    </div>
  );
}

export default HomePage;
