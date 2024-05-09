import logo from "../assets/preview-removebg-preview 1.png"
function Header(){
    return (
        <>
        <header>
          <nav className="header-nav">
            <img src={logo} alt='' />
            <ul className="header-nav-ul">
                <li className="header-nav-li">Services</li>
                <li className="header-nav-li">Products</li>
                <li className="header-nav-li">Pricing</li>
                <li className="header-nav-li">Contact Us</li>
            </ul>
          </nav>
        </header>
        </>
        
        
    )
}

export default Header;