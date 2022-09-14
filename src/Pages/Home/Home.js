import React from 'react';
import Heroe from '../../Components/Heroes/Heroe';
import './Home.scss'
import { Link } from 'react-router-dom'

const HomeSection = () => {
    return (
        <>
            <main className='mainSection d-flex col-12' id='Home'>
                <div className='mainImg '>
                    <img src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1663028471/Images/coffeeholics/granos-cafe-cover_udly99.jpg' alt='granos de cafe' className='imageCover img-fluid' />
                </div>
                <div className='mainHomeGreeting'>
                    <h1>We're Coffeeholics, maestros del café</h1>
                    <p >Amamos lo que hacemos y producimos, respetando los mas altos estándares para cumplir las expectativas de nuestros clientes</p>
                    <p>
                        <Link to={'/shop'} className=" btn btn-lg btn-secondary text-dark fw-bold border-white bg-white m-1">Ir a la tienda</Link>
                        <a href="/#Coffee" className=" btn btn-lg btn-secondary text-dark fw-bold border-white bg-white m-1">Mas información</a>
                    </p>
                </div>
            </main>


            <section id='Coffee' className='coffeeSection'>

                <div className="container-fluid col-12 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-6">
                            <img src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1662758489/Images/coffeeholics/logotipo-cafeteria_gdsn7g.png" className="d-block mx-lg-auto img-fluid" alt="Coffeholics logo" />
                        </div>
                        <div className="col-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Coffeeholics, ¿qué es?</h1>
                            <p className="lead">
                                La palabra Coffeeholics es un anglicismo que se traduce por Cafehólico, refiriendose a la dependencia de esta maravillosa creacion de los dioses.
                                Queremos acercarle al cliente todas las experiencias y  sensaciones que uno puede percibir al tomar café.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row m-3">

                    <div className="col-6">
                        <div className="row g-0  flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Calidad Asegurada</h3>
                                <br />
                                <p className="card-text mb-auto">
                                    A la hora de elegir nuestra materia prima, nos ponemos muy exigentes ya que queremos abarcar todas las variables para poder "tirar" el mejor cafe de todos
                                </p>
                            </div>
                            <div className="col-6 ">
                                <img src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1663084630/Images/coffeeholics/cafe-granos-tostador_klkk4q.jpg' className='img-fluid coffeeSectionImg' alt='barista sirviendo cafe' />
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row g-0  flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Café trotamundos</h3>
                                <br />
                                <p className="card-text mb-auto">
                                    Nuestras variedades no provienen de un solo lugar, si no que de diversos paises donde el café es el estandarte nacional. De esta manera , nos aseguramos traer productos con cierta exclusividad solo para nuestros clientes
                                </p>
                            </div>
                            <div className="col-6 ">
                                <img src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1663085944/Images/coffeeholics/granos-cafe-bolsa_iqmoms.jpg' className='img-fluid coffeeSectionImg' alt='bolsa de granos de cafe' />
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row g-0  flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Como se suele decir en USA "Freshly Brewed"</h3>
                                <br />
                                <p className="card-text mb-auto">
                                    Una vez que el cliente nos pide su café de la variedad y estilo que sea, molemos el mismo y lo servimos con esa misma molienda exclusivamente. Nosotros no mezclamos granos que no sean de la misma especialidad,
                                    es asi que nosotros brindamos a nuestra clientela , un servicio personalizado y de calidad.
                                </p>
                            </div>
                            <div className="col-6 ">
                                <img src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1663092689/Images/coffeeholics/barista-cafe-1_bsvetz.jpg' className='img-fluid coffeeSectionImg' alt='bolsa de granos de cafe' />
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row g-0  flex-md-row mb-4 shadow-sm h-md-250">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">El gusto está en la <strong>variedad</strong></h3>
                                <br />
                                <p className="card-text mb-auto">
                                    Tenemos el orgullo y agrado de poder decir que contamos con una gran variedad de estilos de café. Cada uno de nuestros y nuestras baristas, usan todo su empeño
                                    para poder llevar a tu mesa el café que te lleva a una experiencia de sabor y aromas que tanto te gustan
                                </p>
                            </div>
                            <div className="col-6 ">
                                <img src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1663093250/Images/coffeeholics/barista-cafe-2_pvhtzb.jpg' className='img-fluid coffeeSectionImg' alt='bolsa de granos de cafe' />
                            </div>
                        </div>
                    </div>

                </div>


            </section>

            <section id='About' className='aboutSection'>
                <div className='aboutTeamH1 justify-content-center d-flex'>
                    <h1>¡Conócenos!</h1>
                </div>
                <div className='d-flex row col-12 text-center aboutTeam '>
                    <div className="teamItem col-2 ">
                        <div className="teamItemImage">
                            <img src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1663094234/Images/coffeeholics/barista-team-1_evfjr5.jpg" alt='' className='img-fluid ' />
                        </div>
                        <div className="teamItemContent">
                            <h3>Maria</h3>
                            <p>Lead Barista</p>
                        </div>
                    </div>

                    <div className="teamItem col-2">
                        <div className="teamItemImage">
                            <img src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1663094382/Images/coffeeholics/barista-team-3_nptpzi.jpg" alt="" className='img-fluid ' />
                        </div>
                        <div className="teamItemContent">
                            <h3>Leticia</h3>
                            <p>Latte art especialist</p>
                        </div>
                    </div>

                    <div className="teamItem col-2">
                        <div className="teamItemImage">
                            <img src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1663094382/Images/coffeeholics/barista-team-2_fp3wgu.jpg" alt="" className='img-fluid ' />
                        </div>
                        <div className="teamItemContent">
                            <h3>Monica</h3>
                            <p>Community Manager</p>
                        </div>
                    </div>

                    <div className="teamItem col-2">
                        <div className="teamItemImage">
                            <img src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1663094381/Images/coffeeholics/barista-team-4_mlmzns.jpg" alt="" className='img-fluid ' />
                        </div>
                        <div className="teamItemContent">
                            <h3>Mirko</h3>
                            <p>CEO</p>
                        </div>
                    </div>
                </div>


            </section>

            <section id='Franchise' >
                <Heroe />
            </section>
        </>
    )
}
export default HomeSection
