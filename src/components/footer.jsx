import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Primera sección: Logo y contacto */}
        <div className="flex flex-col md:flex-row border-b border-gray-300 pb-8 gap-8">
          <div className="md:w-1/3 flex flex-col justify-between">
            <div>
              <img
                src="https://www.denis-ros.com/wp-content/uploads/2023/01/denis-ros.png"
                alt="DENIS & ROS"
                className="h-12 w-auto mb-3"
              />
              <p className="text-sm">Decoración de Interiores para tu hogar.</p>
            </div>

            <div className="flex flex-row gap-3 mt-4">
              <a
                href="https://www.facebook.com/denisrosarg"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/denisroshome/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.pinterest.com/DenisRosArgentina"
                aria-label="Pinterest"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <a
                    className="flex items-start hover:underline"
                    href="tel:1156157554"
                  >
                    <BsFillTelephoneFill className="mt-1 mr-2 flex-shrink-0" />
                    <span>1133884997</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <a
                    className="flex items-start hover:underline"
                    href="https://wa.me/5491133884987"
                  >
                    <FaWhatsapp className="mt-1 mr-2 flex-shrink-0" />
                    <span>1156157554</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <a
                    className="flex items-start hover:underline"
                    href="info@denis-ros.com"
                  >
                    <IoMdMail className="mt-1 mr-2 flex-shrink-0" />
                    <span>info@denisros.com</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <a
                    className="flex items-start hover:underline"
                    href="https://goo.gl/maps/5Zo1Wda7bq4iH3o6A"
                  >
                    <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                    <span className="break-words text-ellipsis w-60">
                      Calle 152 N° 6352, Piso 4 Of.403, Downtown Greenville,
                      Hudson, Benamingu.
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Medios de pago</h3>
              <div className="space-y-2">
                <p className="font-medium">VISA</p>
                <p className="font-medium">MASTERCARD</p>
                <p className="font-medium">TRANSFERENCIA</p>
                <p className="font-medium">EFECTIVO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda sección: Enlaces */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-4 md:gap-0">
          <div className="flex flex-wrap gap-4 md:gap-8">
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
          <div className="flex flex-wrap gap-4 md:gap-8">
            <a
              href="/terminosycondiciones"
              className="hover:text-vO transition-colors"
            >
              Términos y Condiciones
            </a>
            <a
              href="/politicadedevolucionycambios"
              className="hover:text-vO transition-colors"
            >
              Política de Devolución y Cambios
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} DENIS & ROS. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
