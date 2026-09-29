function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        PJAG
      </a>

      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#projects">Projects</a>
        <a href="#identity">Identity</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;