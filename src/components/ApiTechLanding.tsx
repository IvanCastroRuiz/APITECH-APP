import React from 'react'
import Image from '../components/ui/image'
import LOGO_apitech_amari05 from "../assets/LOGO_apitech_amari05.svg";
import MobileMockup from "../assets/MobileMockup.png"
import app_Store from "../assets/app_Store.png";
import Play_Store from "../assets/Play_Store.png";
import linea_punteada from "../assets/linea_punteada-05.svg"


   

const ApiTechLanding: React.FC = () => {
  return (
    
    

    <div className="elementor elementor-1362">
      <div className=" p-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="h-16" />
            <div className="flex justify-center">
            <Image
            src={`${LOGO_apitech_amari05}`} 
            width={300}
            height={85}
            alt="Apitech Logo"
            />
            </div>

            <div className="flex flex-col items-center text-center">
  {/* Espacio */}
  <div className="h-8" />
  
  {/* Título */}
  <div className="elementor-element elementor-element-26cf3b6 elementor-widget elementor-w
  idget-text-editor" data-id="5d8e062" data-element_type="widget" data-widget_type="spacer.default ">
  <div className="elementor-widget-"></div>
  <h1 className="
      font-bold text-center mb-6-w-lg text-[#FFA500]
      text-[51px] movil:text-[24px] tablet:text-[32px] portatil:text-[40px] escritorio:text-[48px]
      px-2 movil:px-767 tablet:px-768 portatil:px-1366 escritorio:px-1367[55px]
    ">
      GESTIONA Y MONITOREA 
      <span className="text-[#FFC91C]"> TUS COLMENAS </span> 
      DESDE CUALQUIER LUGAR.
    </h1>
    </div>
  {/* Mockup de la app en móvil (oculto en pantallas grandes) */}
  <Image
    src={`${MobileMockup}`}
    width={700}
    height={755}
    alt="Mobile Mockup"
    className="lg:hidden mx-auto"
  />

  {/* Descripción del servicio */}
  <p className="text-white mb-6 max-w-lg">
    Registra, monitorea y aprende todo lo necesario para maximizar el rendimiento de tus apiarios con sensores avanzados y guías expertas.
  </p>

  {/* Botones de las tiendas */}
  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:space-x-4 mb-4">
  {/* Contenedor de los logos (siempre en fila) */}
  <div className="flex space-x-4">
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

  {/* Información adicional en texto pequeño */}
  <div className="text-sm text-center lg:text-left lg:ml-4 mt-4 lg:mt-0">
    <p>* Prueba gratis.</p>
    <p>Máximo 5 colmenas.</p>
  </div>
</div>
 </div>
          
          
          
          </div>
          <div className="hidden lg:block w-full lg:w-1/2">
            <Image
              src={`${MobileMockup}`}
              width={700}
              height={755}
              alt="Mobile Mockup"
              className="transform hover:rotate-1 transition-transform"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={`${linea_punteada}`}
          width={1318}
          height={248}
          alt="Dotted Line"
        />
      </div>
    </div>
      
  )
}

export default ApiTechLanding