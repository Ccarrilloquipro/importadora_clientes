import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/Header'

function FormImport() {

    const router = useRouter()

    return (
        <>
            <div className='bg-white'>
                <div className='container mx-auto'>
                    <Header altertative title='Nuevo usuario' />
                </div>

            </div>

            
                <div className='container mx-auto'>
                    <div className='row'>
                        <div className='col-12 pb-5'>

                            <div className='row mt-3'>
                                <div className='col-12'>
                                    <button className="btn btn-link text-secondary text-decoration-none" onClick={() => router.back()}><i className="bi bi-arrow-left"></i> Atras</button>
                                </div>
                            </div>

                            <div className='row my-3'>
                                <div className='col-12 '>
                                    <div className='card mb-4'>
                                        <div className='card-body p-5'>
                                            <div className='d-flex'>
                                                <div className=''>
                                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: '150px' }} alt="Avatar" />
                                                </div>
                                                <div className='mx-5 flex-grow-1'>
                                                    <p className='fw-bold fs-5 mb-1'>Nombre del usuario</p>
                                                    <p className='m-0 text-gray'>Edad</p>
                                                    <p className='m-0 text-gray'>Teléfono</p>
                                                    <p className='m-0 text-gray'>Correo</p>
                                                    <p className='m-0 text-gray'>Ubicación</p>
                                                    <p className='m-0 text-gray'>No. de ID</p>
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
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Tipo de vehículo</label>
                                        <input type="text" className="form-control" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Email address</label>
                                        <input type="text" className="form-control" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Email address</label>
                                        <input type="text" className="form-control" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Email address</label>
                                        <input type="text" className="form-control" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Email address</label>
                                        <input type="text" className="form-control" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-3">
                                        <label className="form-label form-label-alternative">Email address</label>
                                        <input type="text" className="form-control" placeholder="name@example.com" />
                                    </div>
                                </div>


                            </div>

                            <div className='row gap-3 mt-5'>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center '>
                                                <div>
                                                    <p className='m-0 form-label-alternative fw-bold'>Pedimento</p>
                                                    <p className='m-0 form-text'>PDF</p>
                                                </div>
                                                <div className='ms-auto d-flex align-items-center '>
                                                    <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                                                    <div>
                                                        <input type='file' className='d-none' id='image-licencia' />
                                                        <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center '>
                                                <div>
                                                    <p className='m-0 form-label-alternative fw-bold'>Factura</p>
                                                    <p className='m-0 form-text'>PDF</p>
                                                </div>
                                                <div className='ms-auto d-flex align-items-center '>
                                                    <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                                                    <div>
                                                        <input type='file' className='d-none' id='image-licencia' />
                                                        <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center '>
                                                <div>
                                                    <p className='m-0 form-label-alternative fw-bold'>Título de propiedad</p>
                                                    <p className='m-0 form-text'>PDF</p>
                                                </div>
                                                <div className='ms-auto d-flex align-items-center '>
                                                    <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                                                    <div>
                                                        <input type='file' className='d-none' id='image-licencia' />
                                                        <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center '>
                                                <div>
                                                    <p className='m-0 form-label-alternative fw-bold'>Actualización de no robo</p>
                                                    <p className='m-0 form-text'>PDF</p>
                                                </div>
                                                <div className='ms-auto d-flex align-items-center '>
                                                    <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                                                    <div>
                                                        <input type='file' className='d-none' id='image-licencia' />
                                                        <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center '>
                                                <div>
                                                    <p className='m-0 form-label-alternative fw-bold'>Certificado de emisiones ambientales</p>
                                                    <p className='m-0 form-text'>PDF</p>
                                                </div>
                                                <div className='ms-auto d-flex align-items-center '>
                                                    <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                                                    <div>
                                                        <input type='file' className='d-none' id='image-licencia' />
                                                        <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center '>
                                                <div>
                                                    <p className='m-0 form-label-alternative fw-bold'>Licencia de conducir</p>
                                                    <p className='m-0 form-text'>PDF</p>
                                                </div>
                                                <div className='ms-auto d-flex align-items-center '>
                                                    <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                                                    <div>
                                                        <input type='file' className='d-none' id='image-licencia' />
                                                        <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center '>
                                                <div>
                                                    <p className='m-0 form-label-alternative fw-bold'>Identificación oficial</p>
                                                    <p className='m-0 form-text'>PDF</p>
                                                </div>
                                                <div className='ms-auto d-flex align-items-center '>
                                                    <p className='m-0 me-3 form-text'>nombre archivo .pdf</p>
                                                    <div>
                                                        <input type='file' className='d-none' id='image-licencia' />
                                                        <label className="btn btn-secondary px-5" htmlFor='image-licencia' >Seleccionar imagen</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='row mt-5'>
                                <div className='col-12'>
                                    <div className='text-end'>

                                        <button type="button" className="btn btn-danger px-5 me-3">Cancelar</button>
                                        <button type="button" className="btn btn-warning px-5">Guardar</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            
        </>

    )
}

export default FormImport