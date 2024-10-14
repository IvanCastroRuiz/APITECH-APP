import { MessageSquare } from "lucide-react"
import MobileMockup from "../../public/img/MobileMockup.png";
import LOGO_apitech_amari05 from "../../public/img/LOGO_apitech_amari05.svg";
import app_Store from "../../public/img/app_Store.png";
import Play_Store from "../../public/img/Play_Store.png";
import Rombo from "../../public/img/Rombo.png";
import testi1 from "../../public/img/testi1.png";
import testi2 from "../../public/img/testi2.png";
import testi3 from "../../public/img/testi3.png";
import Rombo_verde from "../../public/img/Rombo_verde.png";
import Rombo_amarillo from "../../public/img/Rombo_amarillo.png";
import LOGO_apitech_verde from "../../public/img/LOGO_apitech_verde06.svg";
import {  FaWhatsapp  } from "react-icons/fa";
import { Link } from "react-router-dom";
import iG from "../../public/img/iG.png";
import Facebook from "../../public/img/Facebook.png";


const AuthLayout = () => {
  return (
    <div className="inset-8 min-h-screen flex flex-col bg-[#003643] text-white relative overflow-hidden" style={{
        backgroundImage: `url(${`${Rombo_verde}?height=400&width=00`})`,
        }}>
          {/* Hexagon pattern background */}
          <div className="container mx-auto px-4 py-8 relative z-10">
            {/* Header */}
            <header className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="mr-6">
                  <img src={`${LOGO_apitech_amari05}`} alt="logo" className="w-29 h-24 object-contain" /> {/* Ajusta el tamaño aquí */}
                </div>
              </div>
            </header>
            <main className="mb-12">
              <div className="flex items-center justify-between">
                <div className="w-1/2">
                  <h1 className="text-[55px] font-bold uppercase mb-6 text-[#F3A42B]" style={{ fontFamily: 'Russo One, sans-serif' }}>
                    GESTIONA Y MONITOREA <span className="text-[#FFC91C]">TUS COLMENAS </span> DESDE CUALQUIER LUGAR
                  </h1>
                  <p className="text-2xl mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Registra monitorea y aprende todo lo necesario para maximizar el rendimiento de tus apiarios con sensores avanzados y guias expertas
                  </p>
                </div>
                <div className="w-1/2 flex justify-end space-x-4">
                  <img src={`${MobileMockup}?height=400&width=00`} alt="Phone 1" className="w-3/3 object-contain" />
                </div>
                </div>
                
              
              
              {/* App store buttons */}
              <div className="flex items-center mb-12">
                <button className=" px-6 py-3 rounded-lg flex items-center mr-4">
                <img src={`${Play_Store}?height=400&width=00`} alt="" className="w-3/3 object-contain" />              
                </button>
                <button className=" px-6 py-3 rounded-lg flex items-center mr-4">
                <img src={`${app_Store}?height=400&width=00`} alt="" className="w-3/3 object-contain" />              
                
                </button>
                <span className="text-xl font-semibold">*prueba gratis Máximo 5 colmenas</span>
              </div>
            </main>
          </div>
          {/* Benefits section */}
          <section className=" text-black p-30 rounded-lg  mb-">
            <h2 className="bg-[#FEDE9D] text-2xl font-bold mb-1 text-center rounded-lg">BENEFICIOS PRINCIPALES</h2>
            {/* Add your benefits content here */}
             {/* New message */}
          <div className="text-[#F3a42b] text-2xl font-semibold text-center mb-12">
            TODO LO QUE NECESITAS PARA GESTIONAR Y MEJORAR TUS APIARIOS
          </div>

          {/* Three colored squares */}
          <div className="flex justify-center space-x-8 mb-12">
            {/* First square */}
            <div className="w-80 h-100 bg-[#FFCD8C] rounded-lg p-6 flex flex-col items-center relative text-black overflow-hidden">
            <img src={`${Rombo}?height=400&width=00`} alt="" className="w-1/2 object-contain" />              
              
              <h3 className="text-1xl  mb-1 z-8 font-bold">GESTIÓN DE APIARIOS</h3>
              <p className="text-center z-9 mb-3">Registra cada apiario con datos detallados: ubicación, colmenas, fecha de instalación de la reina y más.</p>
              <p className="text-sm text-[#F49c2c] mt-auto z-8">* Gratis hasta en 5 Colmenas</p>
              <div className="w-full h-px bg-black mt-2"></div>
            </div>

              {/* Second square */}
              <div className="w-80 h-100 bg-[#FFC580] rounded-lg p-6 flex flex-col items-center relative text-black overflow-hidden">
              <img src={`${Rombo}?height=400&width=00`} alt="" className="w-1/2 object-contain" />  
                <h3 className="text-1x1 font-bold mb-1 z-5">SISTEMA DE MONITOREO</h3>
                <p className="text-center z-9 mb- ">Monitorea la temperatura, humedad y peso de cada colmena en tiempo real gracias a sensores avanzados (disponibles con la compra del sistema)</p>
                <div className="mt-auto w-full bg-[#00A88F] rounded-full py-2 px-4 flex items-center justify-center z-10">
                  <MessageSquare className="w-6 h-6 mr-2 text-white" />
                  <span className="text-white font-semibold">Cotizar Monitoreo Remoto</span>
                </div>
              </div>

              {/* Third square */}
              <div className="w-80 h-100 bg-[#FFCD8C] rounded-lg p-6 flex flex-col items-center relative text-black overflow-hidden">
              <img src={`${Rombo}?height=400&width=00`} alt="" className="w-1/2 object-contain" />              
              <h3 className="text-1xl font-bold mb-4 z-10">CAPACITACIÓN</h3>
                <p className="text-center z-9 mb-4">Aprende con guías prácticas sobre instalación, cría, control de plagas y mucho más.</p>
                <p className="text-sm text-[#f49c2c] mt-auto z-10">* Descarga guía Gratis</p>
                <div className="w-full h-px bg-black mt-2"></div>
              </div>
            </div>

            {/* New message at the bottom */}
            <p className="text-[#FEDE9D] text-center text-sm mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              **Adquiere el sistema de sensores para instalar en tus colmenas y monitorear en tiempo real humedad y peso. Recibe alertas inmediatas cuando las condiciones cambien.
            </p>
          </section>
          {/* Casos de Éxito section */}
          <section className=" text-black p-30 rounded-lg  mb-">
            <h2 className="bg-[#FEDE9D] text-2xl font-bold mb-1 text-center rounded-lg">CASOS DE EXITO</h2>
            <p className="text-white text-center text-base mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Apicultores que han transformado su gestión con nuestro sistema de monitoreo
            </p>
            <div className="flex justify-center space-x-8">
              {/* Testimonial 1 */}
              <div className="w-80 bg-white rounded-lg p-6 flex flex-col items-start text-black relative">
                  <img src={`${testi1}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />              
                  
                  <h3 className="text-xl font-bold text-[#F49C2C] mb-1">ANTONIO GONZALES</h3>
                  <p className="text-sm mb-4">Santa Barbara, Santander</p>
                  <p className="text-sm">
                    "Desde que instalaron los sensores en las colmenas y empecé a usar la aplicación, todo ha sido más fácil. Ya no tengo que ir a cada cajón para ver cómo están las abejas, el celular me muestra la temperatura y la humedad. Aparte de ahorrarme tiempo, he visto que las abejas están mejor y la miel ha salido más. Si algo anda mal me llega una alerta y voy a arreglarlo."
                  </p>
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#003643] transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-80 bg-white rounded-lg p-6 flex flex-col items-start text-black relative">
              <img src={`${testi2}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />
              <h3 className="text-xl font-bold text-[#F49C2C] mb-1">MARIA RODRIGUEZ</h3>
              <p className="text-sm mb-4">La Ceba, Santander</p>
              <p className="text-sm">
                "Cuando arranqué con esto de las abejas, no sabía ni cómo poner las colmenas bien, pero esta herramienta me ha servido mucho con las guías que trae. Ahí me enseñaron todo, desde cómo poner las cajas hasta cómo cuidar a las abejas y quitarles las plagas. Ahora tengo el apiario mejor organizado y las abejas están bien bonitas, y estoy sacando buena miel."
              </p>
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#003643] transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-80 bg-white rounded-lg p-6 flex flex-col items-start text-black relative">
              <img src={`${testi3}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />
                <h3 className="text-xl font-bold text-[#F49C2C] mb-1">CARLOS MARTINEZ</h3>
                <p className="text-sm mb-4">Suratá, Santander</p>
                <p className="text-sm">
                  "Con la app, llevar el control de mis colmenas es mucho más fácil. Los sensores me muestran el peso de cada colmena, entonces sé cuándo es el momento justo para cosechar la miel. Lo mejor es que no tengo que estar yendo a cada apiario a cada rato, puedo ver desde el celular y eso me ahorra plata y tiempo."
                </p>
                <div className="absolute top-0 right-0 w-4 h-4 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </section>
          {/* Hexagonal background pattern */}
          <section className="text-white py-16 px-4">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#FFA500] mb-6">
                    LLEVA LA GESTIÓN DE TUS APIARIOS AL SIGUIENTE NIVEL
                  </h1>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center">
                  <div className="flex space-x-4 mb-6">
                  <img src={`${Play_Store}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />
                  <img src={`${app_Store}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />
                  </div>
                  <p className="text-lg mb-6 text-center lg:text-right">
                    Adquiere el sistema de sensores para tus colmenas y monitorea la temperatura, humedad y peso en tiempo real
                  </p>
                  <button className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center hover:bg-[#128C7E] transition-colors duration-300">
                    <FaWhatsapp className="mr-2" />
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#003643]">
                        Cotizar sistema de monitoreo remoto
                      </a>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer 
            className="bg-[#f5A528] text-white py-8 px-4 rounded-t-lg mt-12" 
            style={{ backgroundImage: `url(${Rombo_amarillo}?height=400&width=00)` }}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                {/* Primer contenedor */}
                <div className="flex flex-col items-start col-span-1 sm:col-span-2 lg:col-span-1">
                  <h4 className="text-4xl mb-4"></h4>
                  <img src={`${LOGO_apitech_verde}?height=400&width=00`} alt="ApiTech Logo" width={200} height={100} className="w-2/3 object-contain mb-4" />              
                  <p className="text-[#003643]">Este es un producto desarrollado por</p>
                  <p className="text-[#003643] font-bold">Apiser S.A.</p>
                  <p className="text-[#003643]">Todos los derechos reservados</p>
                </div>

                {/* Segundo contenedor */}
                <div className="space-y-4 text-[#003643]">
                  <h3 className="text-xl font-bold"></h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to ="/politica-privacidad" className="hover:underline">
                        Política de privacidad
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Tercer contenedor */}
                <div className="space-y-4 text-[#003643]">
                  <h3 className="text-xl font-bold"></h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to ="/terminos-uso" className="hover:underline">
                        Términos de uso
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Cuarto contenedor */}
                <div className="text-[#003643]">
                  <p className="mb-1">Contáctenos:</p>
                  <p>Email: apisersas@gmail.com</p>
                  <p className="mb-1">Teléfono: 321 9856591</p>

                  <div className="flex items-center">
                    <FaWhatsapp className="text-[#003643] w-6 h-6 mr-2" />
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#003643]">
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Quinto contenedor */}
                <div className="flex flex-col items-start space-y-4">
                  <h3 className="text-[#003643] font-bold mb-2">Síguenos</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <img src={`${iG}?height=400&width=00`} alt="Instagram" width={40} height={40} className="rounded-full" />
                      <a href="https://www.instagram.com/apicultura_serrano/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#003643]">
                        Instagram
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img src={`${Facebook}?height=400&width=00`} alt="Facebook" width={40} height={40} className="rounded-full" />
                      <a href="https://www.facebook.com/photo/?fbid=751403433665245&set=pcb.751403463665242" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#003643]">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </footer>
    </div> 
)};

export default  AuthLayout ;