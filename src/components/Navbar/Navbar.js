import "./Navbar.css"
import logo from "../../Assets/99-logo.png"

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="menus">
                    <p>For Buyers</p> 
                    <p>For Tenants</p>      
                    <p>For Owners</p>      
                    <p>For Dealers/Builders</p>      
                    <p>Insights</p>      
                    <button>Post Property</button>
                </div>
                <div className="contact">
                <i style={{backgroundColor:"whitesmoke", padding:"8px", borderRadius:"50%"}}  class="fa-solid fa-headphones"></i>
                <i style={{backgroundColor:"whitesmoke", padding:"8px", borderRadius:"50%"}}  class="fa-regular fa-user"></i>
                </div>
            </div>
        </div>


        <div className="search">
            <div className="search-container">
                <div className="serach-menus">
                    <p>Buy</p>
                    <p>Rent</p>
                    <p>PG/Co-living</p>
                    <p>Commercial</p>
                    <p>Coworking</p>
                    <p>Plots/Land</p>
                    <p>Projects</p>
                </div>
                <div className="search-container2">
                    <div className="choose">
                    All Residential <i  class="fa-solid fa-angle-down"></i>
                    </div>
                    <input type="text" placeholder="3 BHK sale in Chennai"/>
                    <div className="seach-flat">
                    <i  style={{backgroundColor:"whitesmoke", padding:"15px", borderRadius:"50%", color:"blue"}} class="fa-solid fa-location-crosshairs"></i>
                    <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar