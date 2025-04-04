import { FiShoppingCart, FiHeart } from "react-icons/fi";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative h-full flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Contenedor de imagen que ocupa todo el espacio superior */}
      <div className="relative pt-[100%]"> {/* Mantiene relación de aspecto 1:1 */}
        {/* Imagen que cubre todo el contenedor */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        
        {/* Etiquetas (ahora sobre la imagen) */}
        <div className="absolute top-2 left-2 z-10 flex gap-1">
          {product.isNew && (
            <span className="bg-rC text-white text-xs px-2 py-1 rounded">
              NUEVO
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist button (ahora sobre la imagen) */}
        <button 
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm transition-all"
          aria-label="Añadir a favoritos"
        >
          <FiHeart className="text-black hover:text-red-500 drop-shadow-md" />
        </button>
      </div>

      {/* Información del producto (se mantiene igual) */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < (product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          {product.reviews && (
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          )}
        </div>

        {/* Precio */}
        <div className="mt-auto">
          {product.originalPrice && (
            <p className="text-xs text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          )}
          <p className="text-lg font-bold text-rC">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Botones de acción */}
        <div className="mt-3 flex gap-2">
          <button 
            className="flex-1 bg-vO text-white py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-1"
            aria-label="Añadir al carrito"
          >
            <FiShoppingCart />
            <span>Comprar</span>
          </button>
          <a
            href={`/productos/${product.slug}`}
            className="flex-1 border border-vO text-vO py-2 rounded-md text-sm font-medium hover:bg-vO hover:text-white transition-colors text-center"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    isNew: PropTypes.bool,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    shipping: PropTypes.string,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;