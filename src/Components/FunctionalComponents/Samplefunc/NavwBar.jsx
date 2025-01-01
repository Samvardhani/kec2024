import { Link } from 'react-router-dom';
import '../../../assets/css/NaveBar.css';  // Ensure you have this import to use custom styles

function NaveBar() {
  return (
    <nav className="navebar">
      <ul className="navebar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/useEffect">useEffect</Link></li>
      </ul>
    </nav>
  );
}

export default NaveBar;
