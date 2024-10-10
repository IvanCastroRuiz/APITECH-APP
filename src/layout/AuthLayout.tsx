import { MessageSquare } from "lucide-react"
import MobileMockup from "../assets/img/MobileMockup.png";
import LOGO_apitech_amari05 from "../assets/img/LOGO_apitech_amari05.svg";
import app_Store from "../assets/img/app_Store.png";
import Play_Store from "../assets/img/Play_Store.png";
import Rombo from "../assets/img/Rombo.png";
import testi1 from "../assets/img/testi1.png";
import testi2 from "../assets/img/testi2.png";
import testi3 from "../assets/img/testi3.png";




const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-[#003643] text-white relative overflow-hidden">
          {/* Hexagon pattern background */}
          <div className="absolute inset-0 opacity-10" style={{
            // backgroundImage: `url(${LOGO_apitech_verde06})`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          
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

            {/* Benefits section */}
            <section className="bg-[#FEDE9D] text-black p-30 rounded-lg  mb-">
              <h2 className="text-2xl font-bold mb-1 text-center">BENEFICIOS PRINCIPALES</h2>
              {/* Add your benefits content here */}
            </section>

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

            {/* Casos de Éxito section */}
            <section className="bg-[#FEDE9D] text-black p-30 rounded-lg  mb-">
              <h2 className="text-2xl font-bold mb-1 text-center">CASOS DE EXITO</h2>
              {/* Add your benefits content here */}
            </section>
          
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
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#003643] transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            

            {/* Message above footer */}
            <div className="min-h-screen bg-[#003643] text-white relative overflow-hidden">
              <div className="container mx-auto px-4 py-8 relative z-10">
                <main className="mb-12">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                      <h1
                        className="text-[55px] font-bold uppercase mb-6 text-[#F3A42B]"
                        style={{ fontFamily: "Russo One, sans-serif" }}
                      >
                        LLEVA LA GESTION DE{" "}
                        <span className="text-[#FFC91C]">TUS APIARIOS</span> AL SIGUIENTE
                        NIVEL
                      </h1>
                      <p
                        className="text-2xl mb-8"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Registra monitorea y aprende todo lo necesario para maximizar el
                        rendimiento de tus apiarios con sensores avanzados y guias expertas
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4">
                      <div className="relative w-40 h-12">
                        
                      </div>
                      <div className="relative w-40 h-12">
                      
                        
                      </div>
                    </div>
                  </div>

                  {/* Aquí ajustamos la nueva alineación del texto y botón */}
                  <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
                    <p className="text-lg mb-6 max-w-2xl">
                      Adquiere el sistema de sensores para tus colmenas y monitorea la
                      temperatura, humedad y peso en tiempo real
                    </p>
                    <button className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300">
                      <MessageSquare className="w-6 h-6 mr-2" />
                      Cotizar sistema de monitoreo remoto
                    </button>
                  </div>
                </main>

                {/* Aquí puedes agregar el resto del contenido de la página */}
                {/* Footer */}
                <footer className="bg-[#F49C2C] text-white py-8 px-4 rounded-t-lg mt-12">
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-2xl font-bold mb-2">ApiTech</h4>
                      <p className="text-sm">
                        Este es un producto desarrollado por Apiser S.A
                      </p>
                      <p className="text-sm">Todos los derechos reservados</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <a href="#" className="text-sm hover:underline mb-2 md:mb-0 md:mr-4">
                        Política de privacidad
                      </a>
                      <a href="#" className="text-sm hover:underline mb-2 md:mb-0 md:mr-4">
                        Términos de uso
                      </a>
                      <div className="text-sm">
                        <p className="mb-1">Contáctenos:</p>
                        <p className="mb-1">Teléfono: +1 234 567 890</p>
                        <p>Email: info@apitech.com</p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
    )
};

export default  AuthLayout ;