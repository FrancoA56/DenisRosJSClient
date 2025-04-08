import { useState, useEffect } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function Detail() {
  // Estado para el producto (simulando datos)
  const [product, setProduct] = useState({
    id: 1,
    name: "Cacerola Alta M150B",
    shortDesc:
      "Cacerola de cobre con revestimiento interior de acero inoxidable.",
    longDesc:
      "La cacerola Alta M150B está fabricada con un 90% de cobre y un 10% de acero inoxidable. Ideal para cocciones lentas y uniformes. Base difusora para mejor distribución del calor. Asas ergonómicas en acero inoxidable. La cacerola Alta M150B está fabricada con un 90% de cobre y un 10% de acero inoxidable. Ideal para cocciones lentas y uniformes. Base difusora para mejor distribución del calor. Asas ergonómicas en acero inoxidable. La cacerola Alta M150B está fabricada con un 90% de cobre y un 10% de acero inoxidable. Ideal para cocciones lentas y uniformes. Base difusora para mejor distribución del calor. Asas ergonómicas en acero inoxidable.",
    sku: "DR-CA-150",
    basePrice: 89.99,
    gallery: [
      "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget1.png",
      "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget2.png",
      "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget3.png",
      "https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget4.png",
    ],
    brand: {
      name: "Denis & Ros",
      logo: "https://www.denis-ros.com/wp-content/uploads/2023/01/denis-ros.png",
    },
    category: {
      name: "Cacerolas",
    },
    reviews: [
      {
        id: 1,
        stars: 5,
        message: "Excelente calidad",
        user: { name: "Cliente Satisfecho" },
      },
      {
        id: 2,
        stars: 4,
        message: "Muy buena pero pesada",
        user: { name: "Comprador Anónimo" },
      },
    ],
    attributes: [
      {
        id: 1,
        name: "Color",
        isRequired: true,
        options: [
          { id: 1, value: "Cobre natural" },
          { id: 2, value: "Cobre envejecido" },
        ],
      },
      {
        id: 2,
        name: "Tamaño",
        isRequired: true,
        options: [
          { id: 3, value: "20cm" },
          { id: 4, value: "24cm" },
          { id: 5, value: "28cm" },
        ],
      },
    ],
    variations: [
      {
        id: 1,
        sku: "DR-CA-150-N-20",
        price: 89.99,
        stock: 10,
        options: [
          { attributeOption: { id: 1, value: "Cobre natural" } },
          { attributeOption: { id: 3, value: "20cm" } },
        ],
      },
      // Más variaciones...
    ],
    discount: {
      type: "percentage",
      value: 15,
      endDate: "2023-12-31",
    },
  });

  // Estados del componente
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [currentVariation, setCurrentVariation] = useState(null);

  // Calcular precio con descuento
  const calculatePrice = () => {
    let price = currentVariation?.price || product.basePrice;
    if (product.discount) {
      if (product.discount.type === "percentage") {
        return price * (1 - product.discount.value / 100);
      } else {
        return price - product.discount.value;
      }
    }
    return price;
  };

  const finalPrice = calculatePrice();

  // Manejar selección de atributos
  const handleOptionSelect = (attributeId, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [attributeId]: optionId,
    }));
  };

  // Encontrar variación basada en selecciones
  useEffect(() => {
    if (product.attributes.every((attr) => selectedOptions[attr.id])) {
      const selectedVariation = product.variations.find((variation) =>
        variation.options.every((opt) => {
          const attrId = product.attributes.find(attr =>
            attr.options.some(o => o.id === opt.attributeOption.id)
          )?.id;
          return selectedOptions[attrId] === opt.attributeOption.id;
        })
      );
      
      setCurrentVariation(selectedVariation);
    }
  }, [selectedOptions, product]);

  // Calcular rating promedio
  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.stars, 0) /
        product.reviews.length
      : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Ruta de navegación */}
      <div className="text-sm text-gray-600 mb-6 lg:mx-24 sm:mx-auto ">
        <span className="hover:text-vO cursor-pointer">Inicio</span> /
        <span className="hover:text-vO cursor-pointer">
          {" "}
          {product.category.name}
        </span>{" "}
        /<span> {product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Galería de imágenes */}
        <div className="lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
          {/* Miniaturas a la izquierda (en pantallas grandes) */}
          <div className="flex lg:flex-col gap-2 ">
            {product.gallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-gray-100 rounded overflow-hidden border-2 flex-shrink-0 ${
                  selectedImage === index ? "border-vO" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Vista ${index + 1} de ${product.name}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Imagen principal */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden w-full">
            <img
              src={product.gallery[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain"
            />

            {/* Flechas de navegación */}
            {product.gallery.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev > 0 ? prev - 1 : product.gallery.length - 1
                    )
                  }
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100"
                >
                  <FiChevronLeft className="text-xl" />
                </button>
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev < product.gallery.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100"
                >
                  <FiChevronRight className="text-xl" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Información del producto */}
        <div className="lg:w-1/2">
          {/* Nombre y SKU */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            SKU: {currentVariation?.sku || product.sku}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviews.length}{" "}
              {product.reviews.length === 1 ? "reseña" : "reseñas"})
            </span>
          </div>

          {/* Descripción corta */}
          <p className="text-gray-700 mb-6">{product.shortDesc}</p>

          {/* Precio */}
          <div className="mb-6">
            {product.discount && (
              <div className="flex items-center mb-1">
                <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded mr-2">
                  {product.discount.value}% OFF
                </span>
                <span className="text-gray-500 line-through text-lg">
                  ${product.basePrice.toFixed(2)}
                </span>
              </div>
            )}
            <p className="text-3xl font-bold text-rC">
              ${finalPrice.toFixed(2)}
            </p>
            {product.discount && (
              <p className="text-xs text-gray-500 mt-1">
                Oferta válida hasta{" "}
                {new Date(product.discount.endDate).toLocaleDateString()}
              </p>
            )}
          </div>

          {/* Variaciones */}
          {product.attributes.map((attribute) => (
            <div key={attribute.id} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {attribute.name}:
              </label>
              <div className="flex flex-wrap gap-2">
                {attribute.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(attribute.id, option.id)}
                    className={`px-3 py-2 border rounded-md text-sm ${
                      selectedOptions[attribute.id] === option.id
                        ? "border-vO bg-vO text-white"
                        : "border-gray-300 hover:border-vO"
                    }`}
                  >
                    {option.value}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Stock */}
          {currentVariation && (
            <p
              className={`text-sm mb-4 ${
                currentVariation.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {currentVariation.stock > 0
                ? `Disponible (${currentVariation.stock} unidades)`
                : "Agotado"}
            </p>
          )}

          {/* Cantidad y botones */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-vO text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 flex items-center justify-center gap-2">
              <FiShoppingCart />
              Añadir al carrito
            </button>

            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <FiHeart className="text-gray-600" />
            </button>
          </div>

          {/* Envío y garantía */}
          <button className="flex justify-center items-center bg-rC py-1 px-3 font-medium rounded cursor-pointer">
            Calcular envío
          </button>
        </div>
      </div>

      <div className="lg:mx-24 sm:mx-auto">
        {/* Descripción larga */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Descripción del producto</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {product.longDesc}
          </p>
        </div>

        {/* Especificaciones */}
        <div className="mt-8 border-t pt-8">
          <h2 className="text-xl font-bold mb-4">Especificaciones técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Marca */}
              {product.brand && (
                <div className="flex justify-between py-2 border-b">
                  <span className=" text-gray-600">Marca:</span>
                  {product.brand.logo ? (
                    <img
                      src={product.brand.logo}
                      alt={product.brand.name}
                      className="h-6 ml-2"
                    />
                  ) : (
                    <span className="ml-2 font-medium">
                      {product.brand.name}
                    </span>
                  )}
                </div>
              )}
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Material</span>
              <span className="font-medium">
                90% Cobre, 10% Acero Inoxidable
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Diámetro</span>
              <span className="font-medium">24 cm</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Altura</span>
              <span className="font-medium">12 cm</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Peso</span>
              <span className="font-medium">1.8 kg</span>
            </div>
          </div>
        </div>

        {/* Reseñas */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-bold mb-6">Opiniones de clientes</h2>

          {product.reviews.length > 0 ? (
            <>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold mr-2">
                    {averageRating.toFixed(1)}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(averageRating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews.length}{" "}
                    {product.reviews.length === 1 ? "reseña" : "reseñas"})
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.stars
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{review.user.name}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{review.message}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-500">Este producto aún no tiene reseñas.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
