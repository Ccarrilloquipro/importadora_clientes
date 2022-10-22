import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'

function UserDetail() {

    const router = useRouter()

    return (
        <PrivatePage>
            <div className='bg-white'>
                <div className='container mx-auto'>
                    <Header altertative title='' />
                </div>

            </div>

            <main className=''>
                <div className='container mx-auto'>
                    <div className='row'>
                        <div className='col-12 '>

                            <div className='row py-3'>
                                <div className='col-12'>
                                    <button className="btn btn-link text-secondary text-decoration-none" onClick={() => router.back()}><i className="bi bi-arrow-left"></i> Volver a tablero</button>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='card mb-4'>
                                        <div className='card-body p-5'>
                                            <div className='d-flex'>
                                                <div className=''>
                                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: '150px' }} alt="Avatar" />
                                                    <button className="btn btn-secondary d-block mt-3 mx-auto"  >Editar usuario</button>
                                                </div>
                                                <div className='mx-5 flex-grow-1'>
                                                    <p className='fw-bold fs-5 mb-1'>Nombre del usuario</p>
                                                    <p className='m-0 text-gray'>Edad</p>
                                                    <p className='m-0 text-gray'>Teléfono</p>
                                                    <p className='m-0 text-gray'>Correo</p>
                                                    <p className='m-0 text-gray'>Ubicación</p>
                                                    <p className='m-0 text-gray'>No. de ID</p>

                                                    <button className="btn btn-primary d-block mt-3"  >Nueva contraseña</button>
                                                </div>
                                                <div className='flex-grow-1'>
                                                    <Link href={''}>
                                                        <a className='d-block mb-3'>Licencia de conducir</a>
                                                    </Link>
                                                    <Link href={''}>
                                                        <a className='d-block'>Identificación Oficial</a>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='row '>
                                        <div className='col-md-6 mb-3'>
                                            <div className='card bg-warning'>
                                                <div className='card-body'>
                                                    <p className='fw-bold  mb-1'>Modelo y año del carro</p>
                                                    <p className='text-dark'>Fecha de importación</p>

                                                    <button className='btn btn-link text-dark p-0'>Ver documentos</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <div className='card bg-warning'>
                                                <div className='card-body'>
                                                    <p className='fw-bold  mb-1'>Modelo y año del carro</p>
                                                    <p className='text-dark'>Fecha de importación</p>

                                                    <button className='btn btn-link text-dark p-0'>Ver documentos</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <div className='card bg-warning'>
                                                <div className='card-body'>
                                                    <p className='fw-bold  mb-1'>Modelo y año del carro</p>
                                                    <p className='text-dark'>Fecha de importación</p>

                                                    <button className='btn btn-link text-dark p-0'>Ver documentos</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <div className='card bg-warning'>
                                                <div className='card-body'>
                                                    <p className='fw-bold  mb-1'>Modelo y año del carro</p>
                                                    <p className='text-dark'>Fecha de importación</p>

                                                    <button className='btn btn-link text-dark p-0'>Ver documentos</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <div className='card bg-warning'>
                                                <div className='card-body'>
                                                    <p className='fw-bold  mb-1'>Modelo y año del carro</p>
                                                    <p className='text-dark'>Fecha de importación</p>

                                                    <button className='btn btn-link text-dark p-0'>Ver documentos</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-3 offset-md-1'>
                                    <div className='text-center'>
                                        <p className='fw-bold fs-5'>2 Vehículos</p>
                                    </div>

                                    <div className='card'>
                                        <div className='card-body'>

                                            <div className='bg-warning mb-3'>
                                                <img src="https://via.placeholder.com/400x260" className='w-100 p-4' alt="Avatar" />
                                            </div>

                                            <button className='btn btn-link text-dark text-decoration-none fw-bold d-block mx-auto'>Agregar vehículo</button>
                                        </div>
                                    </div>

                                    <div className='text-end'>
                                        <button className="btn btn-warning mt-3"  >Volver al tablero</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </PrivatePage>
    )
}

export default UserDetail