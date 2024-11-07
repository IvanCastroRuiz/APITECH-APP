import React from 'react';
import Image from '../components/ui/image';
import LOGO_apitech_amari05 from "../assets/LOGO_apitech_amari05.svg";
import MobileMockup from "../assets/MobileMockup.png";
import app_Store from "../assets/app_Store.png";
import Play_Store from "../assets/Play_Store.png";
//import linea_punteada from "../assets/linea_punteada-05.svg";//--

const ApiTechLanding: React.FC = () => {
  return (
    <div className="elementor elementor-1362 p-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Sección Izquierda */}
        <div className="w-full lg:w-1/2 space-y-8 lg:text-left text-center relative z-10">
          <Image src={LOGO_apitech_amari05} width={300} height={85} alt="Apitech Logo" />
          
          <h1 className="font-bold text-[#FFA500] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] mb-6 px-2 fond-text-russo - 55px">
            GESTIONA Y MONITOREA 
            <span className="text-[#FFC91C]"> TUS COLMENAS </span> 
            DESDE CUALQUIER LUGAR.
          </h1>
          
          <Image
            src={MobileMockup}
            width={700}
            height={755}
            alt="Mobile Mockup"
            className="lg:hidden mx-auto -mt-4"
          />
          
          <p className="text-white mb-16 max-w-lg mx-auto lg:mx-0">
            Registra, monitorea y aprende todo lo necesario para maximizar el rendimiento de tus apiarios con sensores avanzados y guías expertas.
          </p>
          
          {/* Íconos de las tiendas */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mb-4 lg:text-left text-center">
            <div className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
              <a href="#" className="transform hover:scale-105 transition-transform">
                <Image src={Play_Store} width={205} height={70} alt="Play Store" />
              </a>
              <a href="#" className="transform hover:scale-105 transition-transform">
                <Image src={app_Store} width={205} height={70} alt="App Store" />
              </a>
            </div>

            {/* Texto de prueba gratis */}
            <div className="text-sm lg:ml-4 lg:mt-0 mt-4">
              <p>* Prueba gratis.</p>
              <p>Máximo 5 colmenas.</p>
            </div>
          </div>
        </div>
        
        {/* Sección Derecha */}
        <div className="hidden lg:block w-full lg:w-1/2 text-left relative z-10 -mt-8">
          <Image
            src={MobileMockup}
            width={700}
            height={755}
            alt="Mobile Mockup"
            className="transform hover:rotate-1 transition-transform relative"
            style={{ bottom: '-20px' }}
          />
        </div>

        {/* Línea punteada visible en pantallas medianas y grandes */}
         {/*<div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 md:w-4/5 lg:w-[60%] md:-mb-20 lg:-mb-10 lg:bottom-4 justify-center">
          <Image
            src={linea_punteada}
            alt="Dotted Line"
            className="w-full md:mt-[-50px]"  // Aplicar margen negativo en pantallas medianas
          />
        </div> */ }
      </div>
    </div>
  );
};

export default ApiTechLanding;
