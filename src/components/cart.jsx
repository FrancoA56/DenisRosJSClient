import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { SiMercadopago } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";

const fakeCartItems = [
  {
    id: 1,
    name: "Cacerola Alta M150B",
    price: 52.89,
    quantity: 2,
    image:
      "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget1.png",
    sku: "sku-001",
    maxQuantity: 5,
  },
  {
    id: 2,
    name: "Sartén Chef M200",
    price: 52.89,
    quantity: 1,
    image:
      "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget2.png",
    sku: "sku-102",
    maxQuantity: 3,
  },
  {
    id: 3,
    name: "Olla Baja con tapa M100",
    price: 52.89,
    quantity: 3,
    image:
      "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget3.png",
    sku: "sku-203",
    maxQuantity: 10,
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(fakeCartItems);
  const [isLoading, setIsLoading] = useState(false);

  // Calcular totales
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 10000 ? 0 : 1500; // Envío gratis para compras > $10000
  const total = subtotal + shipping;

  // Actualizar cantidad
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.min(Math.max(1, newQuantity), item.maxQuantity),
            }
          : item
      )
    );
  };

  // Eliminar item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <p className="text-xl text-gray-600 mb-4">Tu carrito está vacío</p>
          <Link
            to="/productos"
            className="inline-block bg-vO text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Descubrir productos
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lista de productos */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Encabezado */}
              <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 border-b text-sm font-medium text-gray-500">
                <div className="col-span-5">Producto</div>
                <div className="col-span-2 text-center">Precio</div>
                <div className="col-span-3 text-center">Cantidad</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              {/* Items del carrito */}
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4">
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                      {/* Imagen y nombre */}
                      <div className="md:col-span-5 flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            SKU: {item.sku}
                          </p>
                        </div>
                      </div>

                      {/* Precio unitario */}
                      <div className="md:col-span-2 text-center">
                        <span className="md:hidden text-sm text-gray-500 mr-2">
                          Precio:
                        </span>
                        <span>${item.price.toLocaleString("es-AR")}</span>
                      </div>

                      {/* Selector de cantidad */}
                      <div className="md:col-span-3 flex items-center justify-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 text-gray-500 hover:text-vO disabled:opacity-30"
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus className="text-rC" />
                        </button>
                        <span className="mx-2 w-10 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 text-gray-500 hover:text-vO disabled:opacity-30"
                          disabled={item.quantity >= item.maxQuantity}
                        >
                          <FiPlus className="text-rC"/>
                        </button>
                      </div>

                      {/* Subtotal y acciones */}
                      <div className="md:col-span-2 flex items-center justify-end space-x-4">
                        <span className="font-medium text-vO">
                          $
                          {(item.price * item.quantity).toLocaleString("es-AR")}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label="Eliminar"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Acciones del carrito */}
              <div className="p-4 border-t flex justify-between">
                <Link
                  to="/productos"
                  className="text-vO hover:underline flex items-center"
                >
                  ← Seguir comprando
                </Link>
                <button
                  onClick={clearCart}
                  className="text-gray-500 hover:text-red-500 flex items-center"
                >
                  <FiTrash2 className="mr-1" /> Vaciar carrito
                </button>
              </div>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString("es-AR")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratis</span>
                    ) : (
                      `$${shipping.toLocaleString("es-AR")}`
                    )}
                  </span>
                </div>
                {shipping === 0 && subtotal > 0 && (
                  <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                    ¡Felicidades! Tienes envío gratis en esta compra.
                  </div>
                )}
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span className="text-rC">Total</span>
                  <span className="text-rC">${total.toLocaleString("es-AR")}</span>
                </div>
              </div>

              <button
                className={`w-full bg-vO text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Procesando..." : "Finalizar compra"}
              </button>

              {/* Métodos de pago */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-medium mb-3">Métodos de pago</h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-gray-100 p-2 rounded flex justify-center">
                    <FaCcVisa />
                  </div>
                  <div className="bg-gray-100 p-2 rounded flex justify-center">
                    <FaCcMastercard />
                  </div>
                  <div className="bg-gray-100 p-2 rounded flex justify-center">
                    <FaMoneyBillTransfer />
                  </div>
                  <div className="bg-gray-100 p-2 rounded flex justify-center">
                    <SiMercadopago />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
