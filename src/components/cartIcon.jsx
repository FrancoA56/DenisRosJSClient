import { FiShoppingCart } from "react-icons/fi";

const CartIcon = ({ itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-100 relative"
      aria-label="Abrir carrito"
    >
      <FiShoppingCart className="text-2xl" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-vO text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;