// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-red-700 text-white flex justify-between items-center px-6 py-4">
      <h1 className="text-3xl font-serif font-bold tracking-wide hover:cursor-pointer">
        MAREFAT
      </h1>

      <nav className="flex items-center space-x-6 text-sm uppercase font-medium">
        <a href="#" className="hover:text-gray-200">
          About
        </a>
        <a href="#" className="hover:text-gray-200">
          Experience Marefat
        </a>
        <a href="#" className="hover:text-gray-200">
          Admission
        </a>
        <a href="#" className="hover:text-gray-200">
          The Latest
        </a>
        <a href="#" className="hover:text-gray-200">
          Alumnae
        </a>
        <a href="#" className="hover:text-gray-200">
          Giving
        </a>
        <span className="ml-4 hover:cursor-pointer">👤</span>
        <span className="ml-4 hover:cursor-pointer">🔍</span>
      </nav>
    </header>
  );
}
