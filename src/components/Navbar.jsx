import './navbar.css'
function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav
      className="navvy"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left section: Logo */}
        <div>
          <img
            src="https://images.rivian.com/2md5qhoeajym/5MKwIdWGoisDyu54lHQ5wU/4247cae841f1a7fc0e8277028a242809/rivian-logo.svg"
            alt="Logo"
            style={{ width: "166px", height: "33px" }}
          />
        </div>

        {/* Middle section: List */}
        <ul
          className="text-white"
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "18px",
            gap: "20px",
            fontWeight: "bold",
            letterSpacing:".8px"
          }}
        >
          <li style={{ marginRight: "20px" }}>R1T</li>
          <li style={{ marginRight: "20px" }}>R1S</li>
          <li style={{ marginRight: "20px" }}>R2</li>
          <li style={{ marginRight: "20px" }}>Gear Shop</li>
          <li style={{ marginRight: "20px" }}>Fleet</li>
          <li style={{ marginRight: "20px" }}>Spaces</li>
          {/* Add more list items as needed */}
        </ul>

        {/* Right section: Buttons */}
        <div className="text-white">
          <button className='btn' style={{ marginRight: "10px", padding:'8px', borderRadius:'18px' }}>Demo Drive</button>
          <button>Sign In</button>
          <img src="" alt="" />
        </div>
      </nav>

      {/* Your content goes here */}
    </div>
  );
}

export default Navbar;
