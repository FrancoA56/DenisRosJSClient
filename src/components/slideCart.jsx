import { FiX, FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";

const SlideCart = ({ isOpen, onClose, cartItems }) => {
  // Efecto para deshabilitar scroll cuando el carrito está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Carrito */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">Tu Carrito</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Cerrar carrito"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="p-4 h-[calc(100%-180px)] overflow-y-auto">
          {cartItems && cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded mr-3"></div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                    <p className="text-vO font-bold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">Tu carrito está vacío</p>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span>Total:</span>
            <span className="font-bold">
              ${cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0}
            </span>
          </div>
          <button 
            className="w-full bg-vO text-white py-2 rounded hover:bg-opacity-90 disabled:opacity-50"
            disabled={!cartItems || cartItems.length === 0}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideCart;