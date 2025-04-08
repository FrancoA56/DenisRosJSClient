import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './productCard';
import "../assets/swiper-styles.css"


function Widgets3() {
  const newProducts = [
    {
      id: 'n1',
      title: "Cacerola Alta M150B",
      price: 52.89,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget1.png',
      isNew: true, // Destacamos que es nuevo
      rating: 4,
      reviews: 12,
      shipping: "Novedad",
      slug: "cacerola-alta-m150b-new"
    },
    {
      id: 'n2',
      title: "Sartén Chef M200",
      price: 52.89,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget2.png',
      isNew: true,
      rating: 5,
      reviews: 8,
      shipping: "Exclusivo",
      slug: "sarten-chef-m200-new"
    },
    {
      id: 'n3',
      title: "Olla Baja con tapa M100",
      price: 52.89,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget3.png',
      isNew: true,
      rating: 4,
      reviews: 5,
      shipping: "Lanzamiento",
      slug: "olla-baja-m100-new"
    },
    {
      id: 'n4',
      title: "Cacerola Ovalada M180",
      price: 52.89,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget4.png',
      isNew: true,
      rating: 3,
      reviews: 3,
      shipping: "Envío gratis",
      slug: "cacerola-ovalada-m180-new"
    },
    {
      id: 'n5',
      title: "Juego de Sartenes Premium",
      price: 89.99,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget5.png',
      isNew: true,
      rating: 5,
      reviews: 15,
      shipping: "Edición limitada",
      slug: "juego-sartenes-premium-new"
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
            NEW IN
          </h2>
        </div>
      </div>

      {/* Subtítulo */}
      <div className="text-center mb-8">
        <a
          href="/coleccion"
          className="text-lg font-medium text-gray-800 hover:underline hover:text-vO transition-colors"
        >
          Conocé todo lo nuevo acá
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
            delay: 4000, // Animación más lenta para nuevos productos
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-new',
            prevEl: '.swiper-button-prev-new',
          }}
          breakpoints={{
            640: { slidesPerView: 2.3, centeredSlides: false },
            768: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {newProducts.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <ProductCard 
                product={product} 
                customClasses={{
                  newBadge: "bg-blue-500 text-white animate-bounce", // Efecto especial para nuevos
                  shipping: "text-blue-600 font-semibold"
                }}
              />
            </SwiperSlide>
          ))}
          
          {/* Custom navigation buttons */}
          <div className="swiper-button-prev-new !text-vO after:!text-sm"></div>
          <div className="swiper-button-next-new !text-vO after:!text-sm"></div>
        </Swiper>
      </div>

      {/* Grid para desktop */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {newProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            customClasses={{
              newBadge: "bg-blue-500 text-white",
              shipping: "text-blue-600 font-semibold"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Widgets3;