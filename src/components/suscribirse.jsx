function Suscribirse() {
  return (
    <div className="bg-vO text-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto flex flex-row justify-between">
        {/* Contenido principal */}
        <div className="text-center justify-items-start ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¡Sumate a nuestro Newsletter!
          </h2>
          <p className="text-lg md:text-xl">
            Recibí descuentos, promociones, recetas y noticias.
          </p>
        </div>
        {/* Formulario de suscripción */}
        <div className="flex flex-col sm:flex-row max-w-md mx-auto items-center">
          <input
            type="email"
            placeholder="Tu email"
            className="w-full mb-0.5 bg-transparent border-0 border-b-2 border-rC text-rC placeholder-gray-300 focus:border-white focus:ring-0 px-0 py-2"
            required
          />
          <button
            type="submit"
            className="bg-rC text-vO px-4 font-bold h-10 hover:bg-opacity-90 transition-colors"
          >
            Suscribite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suscribirse;
