import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import { URL_ASSETS } from '../../services/http'
import { UserService } from '../../services/userService'

function FormImport() {

    const router = useRouter()
    const [userInfo, setUserInfo] = useState<any>()

    useEffect(() => {
        const getUser = async (id: number) => {
            const response = await UserService.getClient(id)
            console.log(response)
            setUserInfo(response)
        }
        const userID: any = router.query.user;

        if(userID) {
            getUser(userID);
        }
        
    }, [router.query])


    return (
        <PrivatePage>
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
                                                <Avatar image={userInfo?.avatarWeb} />
                                            </div>
                                            <div className='mx-5 flex-grow-1'>
                                                <p className='fw-bold fs-5 mb-1'>{userInfo?.nombres} {userInfo?.apellidos}</p>
                                                <p className='m-0 text-gray'>Fecha de nacimiento: {userInfo?.fechaNacimiento}</p>
                                                <p className='m-0 text-gray'>Teléfono: {userInfo?.telefono}</p>
                                                <p className='m-0 text-gray'>Correo: {userInfo?.correo}</p>
                                                <p className='m-0 text-gray'>Ubicación: {userInfo?.ciudad}</p>
                                                <p className='m-0 text-gray'>No. de ID: {userInfo?.noId}</p>
                                            </div>
                                            <div className='flex-grow-1'>
                                                <a target="_blank" href={`${URL_ASSETS}${userInfo?.archivoLicencia}`} rel="noopener noreferrer" className='d-block mb-3'>
                                                    Licencia de conducir
                                                </a>

                                                <a target="_blank" href={`${URL_ASSETS}${userInfo?.archivoLicencia}`} rel="noopener noreferrer" className='d-block mb-3'>
                                                    Identificación Oficial
                                                </a>
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

        </PrivatePage>

    )
}

export default FormImport