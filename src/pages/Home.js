import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ServicesCard from '../components/serviceCard/ServiceCard';
import services from '../jsons/services.json';
import '../static/styles/home.css';


export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Ingeniería de Software', 'Páginas Web', 'Aplicaciones Móviles', 'Automatizaciones'],
      typeSpeed: 75,
      startDelay: 300,
      backSpeed: 75,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1500,
      loop: true,
      loopCount: false,
      showCursor: false,
      contentType: 'html',
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <>
      {/* PORTADA */}
      <div className="heroContainer">
        <div className='heroHeaderContainer'>
          <p translate='no'>Manuel Nuño García</p>
          <div>
            <a href='mailto:mannunngar@gmail.com'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                <path fill="#fff" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037" stroke-width="0.3" stroke="#fff" />
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/manuelnunogarcia/'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                <path fill="#fff" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" stroke-width="0.3" stroke="#fff" />
              </svg>
            </a>
            <a href='https://github.com/ManunGar'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                <path fill="#fff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" stroke-width="0.3" stroke="#fff" />
              </svg>
            </a>
          </div>
        </div>
        <div className='heroTitleContainer'>
          <p className='heroSubtitle'>Desarrollador Full-Stack</p>
          <span ref={el} className='heroTitle' />
        </div>
        <a href='./proyectos' className='heroButton'>Portfolio</a>
      </div>
      {/* SOBRE MÍ */}
      <section className='aboutMeSection'>
        <div className='sectionSide'>
          <p>01</p>
          <div className='barSide'></div>
          <div className='titleSide'>
            <h1>Introducción</h1>
          </div>
        </div>
        <div className='aboutMeText'>
          <h2>Mi nombre, Manuel Nuño</h2>
          <div className='titleBar'></div>
          <p>
            Ingeniero de Software (2026) y desarrollador de aplicaciones web, móviles y sistemas automatizados. Actualmente finalizando el grado en Ingeniería Informática, enfoco mi trabajo en crear soluciones únicas, eficientes y diseñadas para ayudar a personas y organizaciones a mejorar su día a día.
            <br />
            Me apasiona transformar ideas en aplicaciones reales, con diseños profesionales, funcionales y centrados en la experiencia del usuario. Disfruto construyendo proyectos que combinan tecnología, creatividad y detalle, siempre con el objetivo de aportar valor y seguir creciendo como desarrollador.
          </p>
          <div className='aboutMeButtonsContainer'>
            <a href='./contacto' className='aboutMeButton'>
              <p>Contáctame</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 1024 1024">
                <path fill="#0d3324" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z" stroke-width="25.5" stroke="#0d3324" />
                <path fill="#0d3324" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z" stroke-width="25.5" stroke="#0d3324" />
              </svg>
            </a>
            <a href='./contacto' className='aboutMeButton'>
              <p>Descarga CV</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
                <path fill="#0d3324" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z" stroke-width="0.3" stroke="#0d3324" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img src={require('../static/images/me.png')} alt='Sobre mí' />
        </div>
      </section>
      {/* SERVICIOS */}
      <section className='servicesSection'>
        <div className='titleServiceSection'>
          <div>
            <div className='bar'></div><p>¿Mis servicios?</p>
          </div>
          <h1>Productos <br /> Que Ofrezco</h1>
        </div>
        <div className='servicesContainer'>
          {services.map(service => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}

