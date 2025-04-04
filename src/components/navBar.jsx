import { useState } from "react";
import { FiSearch, FiShoppingCart, FiX, FiMenu } from "react-icons/fi";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
    // Lógica de búsqueda
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Barra superior con buscador y carrito */}
      <nav className="mt-8 bg-white text-vO shadow-md">
        {/* Versión mobile (se muestra solo en pantallas pequeñas) */}
        <div className="md:hidden flex justify-between items-center p-4 md:mt-0 mt-2">
          <button onClick={toggleMenu} className="p-2">
            <FiMenu className="text-2xl" />
          </button>
          
          <img
            src="https://www.denis-ros.com/wp-content/uploads/2023/01/denis-ros.png"
            alt="Denis Ros"
            className="w-24"
          />
          
          <div className="flex items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 relative"
            >
              <FiShoppingCart className="text-2xl " />
              <span className="absolute -top-1 -right-1 bg-vO text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="py-2 px-4 space-y-2">
              <li className="py-2 border-b">
                <div className="relative">
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-vO"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 text-gray-500" />
                  </form>
                </div>
              </li>
              <li className="py-2 border-b">
                <button className="w-full text-left">CUENTA</button>
              </li>
              {["NEW IN", "PRODUCTOS", "SALE", "MARCAS", "GIFTCARDS", "RECETAS"].map((item) => (
                <li key={item} className="py-2 border-b">
                  <button className="w-full text-left">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Versión desktop (se muestra en pantallas medianas/grandes) */}
        <div className="hidden md:grid md:grid-cols-3 items-center py-2">
          {/* Buscador */}
          <div className="relative w-3/4">
            <form onSubmit={handleSearch} className="flex items-center ml-5">
              <input
                type="text"
                placeholder="Buscar productos..."
                className={`pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-vO transition-all ${
                  isSearchFocused ? "ring-2 ring-vO" : ""
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <FiSearch className="absolute ml-3 text-gray-500" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-gray-500 hover:text-vO"
                >
                  <FiX />
                </button>
              )}
            </form>
          </div>

          {/* Logo */}
          <div>
            <img
              src="https://www.denis-ros.com/wp-content/uploads/2023/01/denis-ros.png"
              alt="Denis Ros"
              className="m-2 w-1/2 mx-auto"
            />
          </div>

          {/* Carrito y cuenta */}
          <div className="mr-5 flex items-center justify-end">
            <span className="mr-5 text-vO hidden lg:inline">CUENTA</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <FiShoppingCart className="text-2xl" />
              <span className="absolute -top-1 -right-1 bg-vO text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Menú principal desktop */}
        <div className="hidden md:block border-t border-gray-200">
          <div className="container mx-auto px-4 text-vO">
            <ul className="flex space-x-6 py-3 justify-center items-center font-bold">
              <li className="hover:underline px-3 py-1 rounded cursor-pointer">
                NEW IN
              </li>
              <li className="hover:underline px-3 py-1 rounded cursor-pointer">
                PRODUCTOS
              </li>
              <li className="hover:underline px-3 py-1 rounded cursor-pointer">
                SALE
              </li>
              <li className="hover:underline px-3 py-1 rounded cursor-pointer">
                MARCAS
              </li>
              <li className="hover:underline px-3 py-1 rounded cursor-pointer">
                GIFTCARDS
              </li>
              <li className="hover:underline px-3 py-1 rounded cursor-pointer">
                RECETAS
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carrito deslizable (se mantiene igual) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">Tu Carrito</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <FiX className="text-xl" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-center text-gray-500 py-8">
            Tu carrito está vacío
          </p>
          <button className="w-full bg-vO text-white py-2 rounded hover:bg-opacity-90 mt-4">
            Ver carrito
          </button>
        </div>
      </div>

      {/* Overlay cuando el carrito está abierto */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
}

export default NavBar;