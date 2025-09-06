import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

import { Loader } from "../components";
import Computer from "../models/Computer";

const Contact = () => {

  const adjustModelForScreenSize = (mobileScale, desktopScale, position) => {
    if (window.innerWidth < 768) {
      return [mobileScale, position];
    }
    return [desktopScale, position];
  };

  // adjust the model for the different screen sizes, the position is the same for all screen sizes
  const [computerScale, computerPosition] = adjustModelForScreenSize(
    [0.3, 0.3, 0.3],
    [0.4, 0.4, 0.4],
    [0, -6.5, -43.4]
  );
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
     
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Contact Me</h1>

        <div className='mt-14 space-y-8'>
          <div className='flex items-center space-x-4 group'>
            <FaEnvelope className='w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform' />
            <div>
              <h3 className='text-xl font-semibold text-black-500'>Email</h3>
              <a 
                href="xueshanchen1122@gmail.com"
                className='mt-2 text-slate-500 hover:text-blue-500 transition-colors'
              >
                xueshanchen1122@gmail.com
              </a>
            </div>
          </div>
          
          <div className='flex items-center space-x-4 group'>
            <FaGithub className='w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform' />
            <div>
              <h3 className='text-xl font-semibold text-black-500'>GitHub</h3>
              <a 
                href="https://github.com/Chenxue3" 
                target="_blank" 
                rel="noopener noreferrer"
                className='mt-2 text-slate-500 hover:text-blue-500 transition-colors'
              >
                https://github.com/Chenxue3
              </a>
            </div>
          </div>

          <div className='flex items-center space-x-4 group'>
            <FaLinkedin className='w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform' />
            <div>
              <h3 className='text-xl font-semibold text-black-500'>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/xueshan-chen-48a0b82ba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='mt-2 text-slate-500 hover:text-blue-500 transition-colors'
              >
                https://www.linkedin.com/in/xueshan-chen-48a0b82ba/
                
              </a>
            </div>
          </div>

          
        </div>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Computer 
            scale={computerScale}
            position={computerPosition}
            />
          </Suspense>
        </Canvas>
      </div>
  
    </section>
  );
};

export default Contact;
