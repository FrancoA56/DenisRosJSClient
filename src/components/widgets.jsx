import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './productCard'; // Asegúrate de tener este componente
import "../assets/swiper-styles.css"

function Widgets() {
  const products = [
    {
      id: '1',
      title: 'Cacerola Alta M150B',
      price: 52.89,
      originalPrice: 58.90,
      discount: 10,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget1.png',
      isNew: true,
      rating: 4,
      reviews: 24,
      shipping: 'Envío gratis',
      slug: 'cacerola-alta-m150b'
    },
    {
      id: '2',
      title: 'Sartén Chef M200',
      price: 52.89,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget2.png',
      rating: 5,
      reviews: 18,
      shipping: 'Envío gratis',
      slug: 'sarten-chef-m200'
    },
    {
      id: '3',
      title: 'Olla Baja con tapa M100',
      price: 52.89,
      originalPrice: 60.50,
      discount: 15,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget3.png',
      rating: 4,
      reviews: 12,
      slug: 'olla-baja-m100'
    },
    {
      id: '4',
      title: 'Cacerola Ovalada M180',
      price: 52.89,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget4.png',
      isNew: true,
      rating: 3,
      reviews: 8,
      shipping: 'Envío gratis',
      slug: 'cacerola-ovalada-m180'
    },
    {
      id: '5',
      title: 'Juego de Sartenes Premium',
      price: 89.99,
      imageUrl: 'https://www.denis-ros.com/wp-content/uploads/2025/04/mauvielWidget5.png',
      rating: 5,
      reviews: 32,
      shipping: 'Envío en 24h',
      slug: 'juego-sartenes-premium'
    }
  ];

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Encabezado del bloque */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-vO mb-2">
          90% COBRE | 10% ACERO INOXIDABLE
        </h2>
        <a
          href="/coleccion"
          className="text-base md:text-lg font-medium text-gray-800 hover:underline"
        >
          Descubrí toda la colección
        </a>
      </div>

      {/* Carrusel para móviles y grid para desktop */}
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1.3}
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 2.3, centeredSlides: false },
            768: { slidesPerView: 3 },
          }}
          className="!pb-10" // Espacio para paginación
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          
          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !text-vO after:!text-sm"></div>
          <div className="swiper-button-next !text-vO after:!text-sm"></div>
        </Swiper>
      </div>

      {/* Grid para desktop */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Widgets;