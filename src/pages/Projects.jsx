import { Link } from "react-router-dom";

import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My
       
          Projects
     
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      I don't just build software — I build little bridges between people, ideas, and possibilities.
      From a single-line script that tidied thousands of database entries, to full-stack apps that sparked thousands of online connections, every project I've touched had one goal: make something smarter, kinder, and a little more magical.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              {project.link && ( <div className='mt-5 flex items-center gap-2 font-poppins'>
               
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>

                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
                
              
              </div>
            )}
              {project.videoUrl && (
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.videoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  View The Demo 
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

     
    </section>
  );
};

export default Projects;
