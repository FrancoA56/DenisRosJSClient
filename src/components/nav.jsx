function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-vO text-white p-2 z-50 overflow-hidden">
      <div className="container mx-auto">
        {/* Versión desktop */}
        <div className="hidden sm:flex justify-center items-center font-bold text-xs space-x-4">
          <span>3 Y 6 CUOTAS SIN INTERÉS</span>
          <span>|</span>
          <span>15% OFF TRANSFERENCIA</span>
          <span>|</span>
          <span>20% OFF EFECTIVO</span>
        </div>
        
        {/* Versión móvil con animación */}
        <div className="sm:hidden whitespace-nowrap animate-marquee">
          <span className="mx-4">3 Y 6 CUOTAS SIN INTERÉS • 15% OFF TRANSFERENCIA • 20% OFF EFECTIVO</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;