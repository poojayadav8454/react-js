import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <ul>
          <li><Link to = "/HOME" >Home</Link></li>
          <li><Link to = "/about" >About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
