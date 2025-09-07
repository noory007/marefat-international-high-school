// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-700 text-white flex justify-between items-center px-6 py-4 sticky top-0 z-50">
      <h1 className="text-3xl font-serif font-bold tracking-wide hover:cursor-pointer">
        <Link to="/" className="hover:text-gray-200">
          MAREFAT
        </Link>
      </h1>
      <nav className="flex items-center space-x-6 text-sm uppercase font-medium">
        <Link to="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link to="/experience" className="hover:text-gray-200">
          Experience Marefat
        </Link>
        <Link to="/admission" className="hover:text-gray-200">
          Admission
        </Link>
        <Link to="/latest" className="hover:text-gray-200">
          The Latest
        </Link>
        <Link to="/alumni" className="hover:text-gray-200">
          Alumni
        </Link>
        <Link to="/giving" className="hover:text-gray-200">
          Giving
        </Link>
        <span className="ml-4 hover:cursor-pointer">👤</span>
        <span className="ml-4 hover:cursor-pointer">🔍</span>
      </nav>
    </header>
  );
}
