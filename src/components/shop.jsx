import { useState } from "react";
import ProductCard from "./productCard";

function Shop() {
  const allProducts = [
    {
      id: "1",
      title: "Cacerola Alta M150B",
      category: "cacerolas",
      price: 52.89,
      originalPrice: 58.9,
      discount: 10,
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget1.png",
      isNew: true,
      color: "blue",
      rating: 4,
      reviews: 24,
      shipping: "Envío gratis",
      slug: "cacerola-alta-m150b",
    },
    {
      id: "2",
      title: "Sartén Chef M200",
      category: "sartenes",
      price: 52.89,
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget2.png",
      rating: 5,
      reviews: 18,
      color: "red",
      shipping: "Envío gratis",
      slug: "sarten-chef-m200",
    },
    {
      id: "3",
      title: "Olla Baja con tapa M100",
      category: "ollas",
      price: 52.89,
      originalPrice: 60.5,
      discount: 15,
      color: "black",
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget3.png",
      rating: 4,
      reviews: 12,
      slug: "olla-baja-m100",
    },
    {
      id: "4",
      title: "Cacerola Ovalada M180",
      category: "cacerolas",
      price: 52.89,
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget4.png",
      isNew: true,
      rating: 3,
      color: "white",
      reviews: 8,
      shipping: "Envío gratis",
      slug: "cacerola-ovalada-m180",
    },
    {
      id: "5",
      title: "Juego de Sartenes Premium",
      category: "sartenes",
      price: 89.99,
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget5.png",
      rating: 5,
      color: "blue",
      reviews: 32,
      shipping: "Envío en 24h",
      slug: "juego-sartenes-premium",
    },
    {
      id: "6",
      title: "Juego de Sartenes Premium",
      category: "sartenes",
      price: 89.99,
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget5.png",
      rating: 5,
      color: "pink",
      reviews: 32,
      shipping: "Envío en 24h",
      slug: "juego-sartenes-premium",
    },
    {
      id: "7",
      title: "Juego de Sartenes Premium",
      category: "sartenes",
      price: 89.99,
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget5.png",
      rating: 5,
      color: "yellow",
      reviews: 32,
      shipping: "Envío en 24h",
      slug: "juego-sartenes-premium",
    },
    {
      id: "8",
      title: "Juego de Sartenes Premium",
      category: "sartenes",
      price: 89.99,
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget5.png",
      rating: 5,
      color: "green",
      reviews: 32,
      shipping: "Envío en 24h",
      slug: "juego-sartenes-premium",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedColor, setSelectedColor] = useState(null);

  const availableColors = [...new Set(allProducts.map((p) => p.color))];

  const filteredProducts = allProducts
    .filter((product) => {
      if (selectedCategory === "todos") return true;
      return product.category === selectedCategory;
    })
    .filter((product) => {
      if (!selectedColor) return true;
      return product.color === selectedColor;
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.price - b.price;
      if (sortOrder === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Encabezado */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-vO mb-2">
          Nuestra colección
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Viví tu hogar
        </p>
      </div>

      {/* Layout principal */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filtros en móvil como dropdown */}
        <details className="block lg:hidden mb-6 border rounded pl-4 pt-2 pb-1">
          <summary className="cursor-pointer font-semibold mb-2">
            Filtros y Orden
          </summary>
          <div className="flex flex-col gap-4 mt-4 pr-4">
            {/* Filtros duplicados para mobile */}
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Categoría</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 w-full rounded px-4 py-2 text-sm"
              >
                <option value="todos">Todas las categorías</option>
                <option value="cacerolas">Cacerolas</option>
                <option value="sartenes">Sartenes</option>
                <option value="ollas">Ollas</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1">Ordenar por</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 w-full rounded px-4 py-2 text-sm"
              >
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="default">Sin orden</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1">Color</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedColor(selectedColor === color ? null : color)
                    }
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColor === color ? "border-vO" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <button
                  onClick={() => setSelectedColor(null)}
                  className="w-6 h-6 rounded-full border-2 text-xs flex items-center justify-center"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </details>

        {/* Sidebar filtros desktop */}
        <div className="hidden lg:flex flex-col w-64 sticky top-20 h-fit gap-6">
          <div>
            <h2 className="font-semibold mb-2">Filtros</h2>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 w-full rounded px-4 py-2 text-sm mb-2"
            >
              <option value="todos">Todas las categorías</option>
              <option value="cacerolas">Cacerolas</option>
              <option value="sartenes">Sartenes</option>
              <option value="ollas">Ollas</option>
            </select>
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 w-full rounded px-4 py-2 text-sm mb-2"
            >
              <option value="todos">Todas las Marcas</option>
              <option value="cacerolas">Emile Henry</option>
              <option value="sartenes">Mauviel 1830</option>
              <option value="ollas">Denis & Ros</option>
            </select>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Ordenar</h2>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 w-full rounded px-4 py-2 text-sm"
            >
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="price-asc">Alfabetico: menor a mayor</option>
              <option value="price-desc">Alfabetico: mayor a menor</option>
              <option value="default">Sin orden</option>
            </select>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Color</h2>
            <div className="flex flex-wrap gap-2">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    setSelectedColor(selectedColor === color ? null : color)
                  }
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color ? "border-vO" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
              <button
                onClick={() => setSelectedColor(null)}
                className="w-6 h-6 rounded-full border-2 text-xs flex items-center justify-center"
              >
                X
              </button>
            </div>
          </div>
        </div>

        {/* Productos */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;