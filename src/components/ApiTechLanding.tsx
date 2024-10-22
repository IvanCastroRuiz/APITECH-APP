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

            <div className="h-8" />
            <h1 className="text-3xl font-bold text-[#F3A42B] text-center sm:text-4xl md:text-5xl lg:text-6xl mx-auto">
             GESTIONA Y MONITOREA <span className="text-[#FFC91C]">TUS COLMENAS</span> DESDE CUALQUIER LUGAR.
            </h1>

            <Image
              src={`${MobileMockup}`}
              width={700}
              height={755}
              alt="Mobile Mockup"
              className="lg:hidden"
            />
            <p className="text-lg text-center mx-auto">
            Registra, monitorea y aprende todo lo necesario para maximizar el rendimiento de tus
            apiarios con sensores avanzados y guías expertas.
            </p>

            <div className="flex justify-center space-x-4">
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
          alt="app Store"
        />
        </a>
       </div>

            <div className="text-sm text-center mx-auto">
            <p>* Prueba gratis.</p>
           <p>Máximo 5 colmenas</p>
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