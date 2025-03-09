import "./Header.css"
import image1 from "../../assets/TeamTrack_Logo.png"
const Header = () =>{
    return(
        <>
        <header>
            <div>
                <img src={image1} alt="logo" width={50} height={50}/>
            </div>
            <div className="navlinks">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        </header>
        
        </>
    )
}
export default Header