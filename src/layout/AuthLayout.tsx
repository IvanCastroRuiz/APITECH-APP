import { MessageSquare } from "lucide-react"
 //MobileMockup.png

import app_Store from "../assets/app_Store.png";
import Play_Store from "../assets/Play_Store.png";
import Rombo from "../assets/Rombo.png";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";
import Rombo_verde from "../assets/Rombo_verde.png";
import Rombo_amarillo from "../assets/Rombo_amarillo.png";
import LOGO_apitech_verde from "../assets/LOGO_apitech_verde06.svg";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import iG from "../assets/iG.png";
import Facebook from "../assets/Facebook.png";
import Image from '../components/ui/image'


import ApiTechLanding from "../components/ApiTechLanding"




const AuthLayout = () => {
  return (
    <div className="inset-0 sm:inset-8 min-h-screen flex flex-col bg-[#003643] text-white overflow-hidden p-4 sm:p-8" style={{
      backgroundImage: `url(${Rombo_verde})`
    }}>

      {/* Nuevo Componente */}

     <ApiTechLanding />

      {/* Hexagon pattern background */}
      <div className="inset-0 sm:inset-8 min-h-screen flex flex-col bg-[#003643] text-white overflow-hidden p-4 sm:p-8" style={{
        backgroundImage: `url(${Rombo_verde})`
      }}>
        

      {/* Benefits section */}
      <section className=" text-black p-30 rounded-lg  mb-">
      <h2 className="bg-[#FEDE9D] text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-center rounded-lg max-w-xs sm:max-w-md lg:max-w-lg mx-auto p-2">
     BENEFICIOS PRINCIPALES
     </h2>

        {/* Add your benefits content here */}
        {/* New message */}
        <div className="text-[#F3A42B] font-russo text-[32px] sm:text-[40px] font-semibold text-center mb-8 sm:mb-12">
       TODO LO QUE NECESITAS PARA GESTIONAR Y MEJORAR TUS APIARIOS
       </div>



        {/* Three colored squares */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
       {/* First square */}
      <div className="w-full sm:w-80 bg-[#FFCD8C] rounded-lg p-4 sm:p-6 flex flex-col items-center text-black overflow-hidden">
      <img src={`${Rombo}?height=400&width=00`} alt="" className="w-1/2 object-contain" />
      <h3 className="text-xl mb-1 font-bold">GESTIÓN DE APIARIOS</h3>
      <p className="text-center mb-3">Registra cada apiario con datos detallados: ubicación, colmenas, fecha de instalación de la reina y más.</p>
      <p className="text-[#F49c2c] text-[14px] font-light text-center mt-auto">
      * Gratis hasta en 5 Colmenas
      </p>
      <div className="w-full h-px bg-black mt-2"></div>
      </div>


       {/* Second square */}
      <div className="w-full sm:w-80 bg-[#FFCD8C] rounded-lg p-4 sm:p-6 flex flex-col items-center relative text-black overflow-hidden">
      <img src={`${Rombo}?height=400&width=00`} alt="" className="w-1/2 object-contain" />
      <h3 className="text-1x1 font-bold mb-1 z-5">SISTEMA DE MONITOREO</h3>
      <p className="text-center z-9 mb- ">Monitorea la temperatura, humedad y peso de cada colmena en tiempo real gracias a sensores avanzados (disponibles con la compra del sistema)</p>
      <div className="mt-auto w-full bg-[#00A88F] rounded-full py-2 px-4 flex items-center justify-center z-10">
      <MessageSquare className="w-6 h-6 mr-2 text-white" />
      <span className="text-white font-semibold">Cotizar Monitoreo Remoto</span>
      </div>
      </div>


      {/* Third square */}
      <div className="w-full sm:w-80 bg-[#FFCD8C] rounded-lg p-4 sm:p-6 flex flex-col items-center relative text-black overflow-hidden">
      <img src={`${Rombo}?height=400&width=00`} alt="" className="w-1/2 object-contain" />
      <h3 className="text-1xl font-bold mb-4 z-10">CAPACITACIÓN</h3>
      <p className="text-center z-9 mb-4">Aprende con guías prácticas sobre instalación, cría, control de plagas y mucho más.</p>
      <p className="text-[#F49c2c] text-[14px] font-light text-center mt-auto z-8">
      * Gratis hasta en 5 Colmenas
       </p>
      <div className="w-full h-px bg-black mt-2"></div>
      </div>
      </div>

       
        {/* New message at the bottom */}
        <p className="text-[#FEDE9D] text-center text-sm mb-8 mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>
        **Adquiere el sistema de sensores para instalar en tus colmenas y monitorear en tiempo real humedad y peso. Recibe alertas inmediatas cuando las condiciones cambien.
      </p>
      <p className="text-center text-sm mb-8 mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>
      <span className="font-bold text-[#FEDE9D]">Historial de datos:</span> 
      <span className="text-[#FEDE9D]"> Visualiza los datos históricos de tus colmenas para tomar decisiones informadas y mejorar el rendimiento</span>
      </p>


       

      </section>
      {/* Casos de Éxito section */}
      <section className=" text-black p-30 rounded-lg  mb-">
      <h2 className="bg-[#FEDE9D] text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-center rounded-lg max-w-xs sm:max-w-md lg:max-w-lg mx-auto p-2">CASOS DE EXITO</h2>        
      <p className="text-white text-center text-sm sm:text-base mb-6 sm:mb-8 mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
     Apicultores que han transformado su gestión con nuestro sistema de monitoreo
     </p>


     <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
    {/* Testimonial 1 */}
    <div className="w-80 bg-white rounded-lg p-6 flex flex-col items-start text-black relative">
    <img src={`${testi1}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />
    <h3 className="text-xl font-bold text-[#F49C2C] mb-1">ANTONIO GONZALES</h3>
    <p className="text-sm mb-4">Santa Barbara, Santander</p>
    <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>
    "Desde que instalaron los sensores en las colmenas y empecé a usar la aplicación, todo ha sido más fácil. Ya no tengo que ir a cada cajón para ver cómo están las abejas, el celular me muestra la temperatura y la humedad. Aparte de ahorrarme tiempo, he visto que las abejas están mejor y la miel ha salido más. Si algo anda mal me llega una alerta y voy a arreglarlo."
    </p>

    <div className="absolute top-0 right-0 w-4 h-4 bg-[#003643] transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
    </div>


     {/* Testimonial 2 */}
    <div className="w-80 bg-white rounded-lg p-6 flex flex-col items-start text-black relative">
    <img src={`${testi2}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />
    <h3 className="text-xl font-bold text-[#F49C2C] mb-1">MARIA RODRIGUEZ</h3>
    <p className="text-sm mb-4">La Ceba, Santander</p>
    <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>
    "Cuando arranqué con esto de las abejas, no sabía ni cómo poner las colmenas bien, pero esta herramienta me ha servido mucho con las guías que trae. Ahí me enseñaron todo, desde cómo poner las cajas hasta cómo cuidar a las abejas y quitarles las plagas. Ahora tengo el apiario mejor organizado y las abejas están bien bonitas, y estoy sacando buena miel."
   </p>
   <div className="absolute top-0 right-0 w-4 h-4 bg-[#003643] transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
   </div>


    {/* Testimonial 3 */}
    <div className="w-80 bg-white rounded-lg p-6 flex flex-col items-start text-black relative">
     <img src={`${testi3}?height=400&width=00`} alt="" className="w-1/3 rounded-full" />
    <h3 className="text-xl font-bold text-[#F49C2C] mb-1">CARLOS MARTINEZ</h3>
    <p className="text-sm mb-4">Suratá, Santander</p>
    <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>
   "Con la app, llevar el control de mis colmenas es mucho más fácil. Los sensores me muestran el peso de cada colmena, entonces sé cuándo es el momento justo para cosechar la miel. Lo mejor es que no tengo que estar yendo a cada apiario a cada rato, puedo ver desde el celular y eso me ahorra plata y tiempo."
    </p>
    <div className="absolute top-0 right-0 w-4 h-4 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
    </div>
    </div>
    </section>


      {/* Hexagonal background pattern */}
      <section className="text-white py-12 sm:py-16 px-4">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-start justify-center">
      <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
      <h1 className="text-[51px] font-bold mb-6 text-center" style={{ fontFamily: 'Russo One, sans-serif' }}>
    <span className="text-[#FFA500]">LLEVA LA GESTIÓN DE </span>
    <span className="text-[#FFC91C]">TUS APIARIOS </span>
   <span className="text-[#FFA500]"> AL SIGUIENTE </span>
   <span className="text-[#FFC91C]"> NIVEL</span>
   </h1>

      </div>

      <div className="flex flex-col items-center lg:items-start">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="transform hover:scale-105 transition-transform">
            <Image
              src={`${Play_Store}`}
              width={205}
              height={70}
              alt="Play Store"
            />
          </a>
          <a href="#" className="transform hover:scale-105 transition-transform">
            <Image
              src={`${app_Store}`}
              width={205}
              height={70}
              alt="App Store"
            />
          </a>
        </div>

        <p className="text-poppins text-[#FEDE9D] text-sm mb-6 text-center" style={{ fontSize: '14px' }}>
          Adquiere el sistema de sensores para tus colmenas y monitorea la temperatura, humedad y peso en tiempo real
        </p>
        
        <button className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center hover:bg-[#128C7E] transition-colors duration-300">
          <FaWhatsapp className="mr-2" />
          <a href="https://wa.me/message/FOAVI6X7UGWPK1" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#003643]">
            Cotizar sistema de monitoreo remoto
          </a>
        </button>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer
        className="bg-[#f5A528] text-white py-6 sm:py-8 px-2 sm:px-4 rounded-t-lg mt-12"
        style={{ backgroundImage: `url(${Rombo_amarillo})` }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">

            {/* Primer contenedor */}
            <div className="flex flex-col items-start col-span-1 sm:col-span-2 lg:col-span-1">
              <h4 className="text-4xl mb-4"></h4>
              <img src={LOGO_apitech_verde} alt="ApiTech Logo" width={200} height={100} className="w-2/3 object-contain mb-4" />
              <p className="text-[#003643]">Este es un producto desarrollado por</p>
              <p className="text-[#003643] font-bold">Apiser S.A.</p>
              <p className="text-[#003643]">Todos los derechos reservados</p>
            </div>

            {/* Segundo contenedor */}
            <div className="space-y-4 text-[#003643]">
              <h3 className="text-xl font-bold"></h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/politica-privacidad" className="hover:underline">
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
                  <Link to="/terminos-uso" className="hover:underline">
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
                <a href="https://wa.me/message/FOAVI6X7UGWPK1" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#003643]">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Quinto contenedor */}
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-[#003643] font-bold mb-2">Síguenos</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={iG} alt="Instagram" width={40} height={40} className="rounded-full" />
                  <a href="https://www.instagram.com/apicultura_serrano/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#003643]">
                    Instagram
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={Facebook} alt="Facebook" width={40} height={40} className="rounded-full" />
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
      </div>
  )
};

export default AuthLayout;