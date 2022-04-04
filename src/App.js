import "./App.css";
import Profile from "./profile/profile";
import PropTypes from "prop-types";
import Footer from "./profile/Footer";

function App() {
  return (
    <div className="App">
      <Profile
        img="/obama_photo.jpg"
        name="Barack Hussein Obama II"
        bio="Barack Obama is an American politician who served as the 44th president of the United States from 2009 to 2017"
        profession="Politician"
      />
      <Footer />
    </div>
  );
}

Profile.defaultProps = {
  img: "/obama_photo.jpg",
  name: "Barack Hussein Obama II",
  bio: "Barack Obama is an American politician who served as the 44th president of the United States from 2009 to 2017",
  profession: "Politician",
};

Profile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};

export default App;
