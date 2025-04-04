import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './productCard'; // Reutilizamos el mismo componente
import "../assets/swiper-styles.css"

function Widgets2() {
  const saleProducts = [
    {
      id: 's1',
      title: "Cacerola Alta M150B",
      price: 52.89,
      originalPrice: 68.90,
      discount: 23,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget1.png',
      isNew: false,
      rating: 4,
      reviews: 24,
      shipping: "Oferta limitada",
      slug: "cacerola-alta-m150b-sale"
    },
    {
      id: 's2',
      title: "Sartén Chef M200",
      price: 52.89,
      originalPrice: 65.00,
      discount: 19,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget2.png',
      rating: 5,
      reviews: 18,
      shipping: "Últimas unidades",
      slug: "sarten-chef-m200-sale"
    },
    {
      id: 's3',
      title: "Olla Baja con tapa M100",
      price: 52.89,
      originalPrice: 70.50,
      discount: 25,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget3.png',
      rating: 4,
      reviews: 12,
      slug: "olla-baja-m100-sale"
    },
    {
      id: 's4',
      title: "Cacerola Ovalada M180",
      price: 52.89,
      originalPrice: 75.25,
      discount: 30,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget4.png',
      rating: 3,
      reviews: 8,
      shipping: "Envío gratis",
      slug: "cacerola-ovalada-m180-sale"
    },
    {
      id: 's5',
      title: "Juego de Sartenes Premium",
      price: 89.99,
      originalPrice: 120.00,
      discount: 25,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget5.png',
      rating: 5,
      reviews: 32,
      shipping: "Oferta flash",
      slug: "juego-sartenes-premium-sale"
    }
  ];

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Encabezado con líneas decorativas */}
      <div className="relative py-6 mb-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-vO bg-white px-4">
            SALE
          </h2>
        </div>
      </div>

      {/* Subtítulo */}
      <div className="text-center mb-8">
        <a
          href="/coleccion"
          className="text-lg font-medium text-gray-800 hover:underline hover:text-vO transition-colors"
        >
          Conocelos acá
        </a>
      </div>

      {/* Carrusel para móviles */}
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1.2}
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-sale',
            prevEl: '.swiper-button-prev-sale',
          }}
          breakpoints={{
            640: { slidesPerView: 2.3, centeredSlides: false },
            768: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {saleProducts.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <ProductCard 
                product={product} 
                customClasses={{
                  price: "text-red-600", // Destaca precio en oferta
                  originalPrice: "text-gray-400",
                  discountBadge: "bg-red-600 text-white animate-pulse" // Efecto de destaque
                }}
              />
            </SwiperSlide>
          ))}
          
          {/* Custom navigation buttons */}
          <div className="swiper-button-prev-sale !text-vO after:!text-sm"></div>
          <div className="swiper-button-next-sale !text-vO after:!text-sm"></div>
        </Swiper>
      </div>

      {/* Grid para desktop */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {saleProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            customClasses={{
              price: "text-red-600",
              originalPrice: "text-gray-400 line-through",
              discountBadge: "bg-red-600 text-white"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Widgets2;