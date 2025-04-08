import { FiX, FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";

const SideCart = ({ isOpen, onClose, cartItems = [] }) => {
  // Efecto para deshabilitar scroll cuando el carrito está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(0,0,0,0.40)" }}
          onClick={onClose}
        />
      )}

      {/* Carrito */}
      <div
        className={`fixed top-0 right-0 h-full max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <FiShoppingCart /> Tu Carrito
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Cerrar carrito"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="h-[calc(100%-180px)] overflow-y-auto p-4">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded mr-3 flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="text-vO font-bold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                  <button className="text-gray-500 hover:text-red-500">
                    <FiX />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FiShoppingCart className="text-4xl text-gray-300 mb-4" />
              <p className="text-gray-500">Tu carrito está vacío</p>
              <p className="text-sm text-gray-400 mt-2">
                Agrega productos para continuar
              </p>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-vO">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <button
            className={`w-full bg-vO text-white py-3 rounded hover:bg-opacity-90 transition-colors ${
              cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={cartItems.length === 0}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default SideCart;
