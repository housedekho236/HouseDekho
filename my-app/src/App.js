import logo from './logo.svg';
import './App.css';
import menu from './images/menu.png';
import profile from './images/profile.png';
import location from './images/location.png';
import mic from './images/mic.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';

function App() {
  var clicks = 0;
  function menuBtnClick(){
    alert("Menu Button Clicked");
  }
  function profileBtnClick(){
    alert("Profile Button Clicked");
  }

  return (
    <div className="App">
        <div className="HeaderArea">
            <div className="Menu">
              <img src={menu} alt="menu button" onClick={menuBtnClick}/>
            </div>
            <div className="Logo">
              <h1>HouseDekho</h1>
            </div>
            <div className="Profile">
              <img src={profile} alt="profile button" onClick={profileBtnClick}/>
            </div>
        </div>

        <div className = "SearchBox">
          <div className = "TitleMenu">
            <div id = "Buy">
              <h2>Buy</h2>
            </div>
            <div id = "Rent">
              <h2>Rent</h2>
            </div>
            <div id = "Pg">
              <h2>PG/Co-Living</h2>
            </div>
            <div id = "Commercial">
              <h2>Commercial</h2>
            </div>
            <div id = "Plot">
              <h2>Plot</h2>
            </div>
          </div>

          <div className = "SearchBar">
            <div class = "Search_Bar">
              <form action="google.com">
                <input type="text" placeholder="Search by location" name="search"/>
               </form>
            </div>
            <div class = "Location">
            <img src={location} alt="Location button"/>
            </div>
            <div class = "Mic">
            <img src={mic} alt="Mic button"/>
            </div>
            <div class = "Search">
              <button id = "SearchBtn">Search</button>
            </div>
           </div>
        </div>

        <div class = "HighDemand">
          <div class = "TitleDiv">
            <h2 id = "Title">Projects in High Demand</h2>
          </div>
          <div class = "SlideBox">
            
          </div>
          
        </div>

        <div class = "HighDemand">
          <div class = "TitleDiv">
            <h2 id = "Title">Projects in High Demand</h2>
          </div>
          <div class = "SlideBox">
            
          </div>
          
        </div>

        <div class = "HighDemand">
          <div class = "TitleDiv">
            <h2 id = "Title">Projects in High Demand</h2>
          </div>
          <div class = "SlideBox">
            
          </div>
          
        </div>

        <div class = "FooterArea">
          <div class = "LeftBox">
            <h2>Company</h2>
            <h2>About Us</h2>
            <h2>Contact Us</h2>
            <h2>Feedback</h2>
          </div>
          <div class = "RightBox">
            <h1>Contact Us</h1>
            <h2>Number - 9790746565</h2>
            <h2>Email Id - housedekho362@gmail.com</h2>
            <h2>Connect With Us</h2>
            <div>
              <img src={facebook} alt="facebook button" id ="FacebookBtn"/>
              <img src={youtube} alt="youtube button" id ="SocialMediaBtn"/>
              <img src={twitter} alt="twitter button" id ="SocialMediaBtn"/>
              <img src={instagram} alt="instagram button" id ="SocialMediaBtn"/>
            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
