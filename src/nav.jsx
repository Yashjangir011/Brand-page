

function NavBar(){
    return(
        <div class="navbar">
        <div className="logo">
            <img src="public/images/brand_logo.png" alt="" />
        </div>
    <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </div>
    <div class="log">
        <button>Login</button>
    </div>
</div>
    )
}


export default NavBar
