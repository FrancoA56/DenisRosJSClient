import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      <div className="container mx-auto px-4">
        {/* Primera sección: Logo y contacto */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-8">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <img
            src="https://www.denis-ros.com/wp-content/uploads/2023/01/denis-ros.png"
            alt="DENIS & ROS"
              className="h-12 w-auto mb-3"
            />{" "}
            <p className="text-sm">Decoración de Interiores para tu hogar.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BsFillTelephoneFill className="mt-1 mr-2 flex-shrink-0" />
                  <span>1133884997</span>
                </li>
                <li className="flex items-start">
                  <FaWhatsapp className="mt-1 mr-2 flex-shrink-0" />
                  <span>1156157554</span>
                </li>
                <li className="flex items-start">
                  <IoMdMail className="mt-1 mr-2 flex-shrink-0" />
                  <span>info@denisros.com</span>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                  <span className="break-words">
                    Calle 152 N° 6352, Piso 4 Of.403, Downtown Greenville,
                    Hudson, Benamingu.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Medios de pago</h3>
              <div className="space-y-3">
                <p className="font-medium">VISA</p>
                <p className="font-medium">MASTERCARD</p>
                <p className="font-medium">TRANSFERENCIA</p>
                <p className="font-medium">EFECTIVO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda sección: Enlaces */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4 sm:gap-0">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="/mi-cuenta" className="hover:text-vO transition-colors">
              Mi cuenta
            </a>
            <a href="/seguimiento" className="hover:text-vO transition-colors">
              Seguimiento del pedido
            </a>
            <a href="/faq" className="hover:text-vO transition-colors">
              Preguntas Frecuentes
            </a>
            <a href="/nosotros" className="hover:text-vO transition-colors">
              Quiénes Somos
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} DENIS & ROS. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
