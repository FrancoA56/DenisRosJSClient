import banner from "../media/Captura-de-pantalla-2025-03-18-111553.png"
import banner2 from "../media/Captura de pantalla 2025-04-04 120524.png"

function MainBanner() {
  return (
    <div className="w-full h-full">
      <img src={banner} alt="" className="mb-4"/>
      <img src={banner2} alt="" className="mb-4"/>
    </div>
  );
}

export default MainBanner;
