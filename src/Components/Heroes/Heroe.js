import './Heroe.scss'

///TO DO: CONTACT FORM WITH VALIDATIONS 

const Heroe = () => {
    return (
        <>
            <div className="text-center heroSection col-12 d-flex flex-wrap">
                <div className="heroImg">
                    <img src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1663107760/Images/coffeeholics/coffee-shop-1_nghxea.jpg" className="img-fluid " alt="coffee shop" />
                </div>
                <h1 className="fw-bold col-12">Franquicias</h1>
                <div className='paragraph col-12'>
                    <h4><strong>Que ofrecemos</strong> </h4>
                    <p>Coffeholics ofrece dos opciones de franquicia. El modelo tradicional con locales de 200 m2 y un nuevo modelo llamado Coffeeholics express, con locales de hasta 40 m2 y una propuesta más acotada y basada en el café de especialidad.
                        Brindamos todo nuestro <strong>know how</strong> para que tu proyecto tenga un alto rendimiento. Para esto, contamos con un equipo de gran experiencia en el rubro y un esquema de trabajo basado en la capacitación, supervisión y asesoramiento constantes para ofrecer al franquiciado las herramientas y el respaldo que necesita para encarar un emprendimiento exitoso.</p>
                </div>
                <div className='paragraph col-12'>
                    <h4><strong>Qué buscamos</strong></h4>
                    <p>Somos una empresa con más de ocho años de trayectoria y un fuerte posicionamiento en el mercado, gracias a un equipo profesional que se enorgullece de ofrecer una experiencia auténtica, basada en la excelencia de lo simple y lo artesanal.
                        Buscamos un perfil de franquiciado que tenga las mismas ganas y motivación para superarse día a día. Personas proactivas, con un enfoque versátil, que puedan apreciar nuestra propuesta, aplicar los controles para garantizar la máxima calidad, y manejar sus equipos de trabajo a la perfección con una mezcla de conocimiento, pasión y liderazgo.</p>
                </div>
                <div className='paragraph col-12'>
                    <h4><strong>Mas información</strong></h4>
                    <p>Si estás interesado en formar parte de <strong>Coffeeholics</strong>,  completá el siguiente formulario de contacto.</p>
                </div>
            </div>
        </>

    );
}
export default Heroe