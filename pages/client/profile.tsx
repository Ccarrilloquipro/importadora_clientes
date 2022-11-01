import React, { useEffect, useState } from 'react'
import Avatar from '../../components/Avatar'
import Header from '../../components/Header'
import PrivatePage from '../../components/PrivatePage'
import Sidebar from '../../components/Sidebar'
import { URL_ASSETS } from '../../services/http'
import { LocalStorageService } from '../../services/LocalStorageService'
import { UserService } from '../../services/userService'

function ProfilePage() {

    const [userInfo, setUserInfo] = useState<any>()

    useEffect(() => {
        const getUser = async (id: number) => {
            const response = await UserService.getClient(id)
            setUserInfo(response)
        }

        const session = LocalStorageService.get('imp-session-client')
        getUser(session.cliente.id)

    }, [])

    return (
        <PrivatePage>
            <main className='d-flex flex-nowrap'>

                <Sidebar />

                <div className='container mx-4'>

                    <div className='row'>
                        <Header />

                        <div className='col-12 mt-5'>
                            <div className='card mb-4'>
                                <div className='card-body p-5'>

                                    <div className='d-flex'>
                                        <div className=''>
                                            <Avatar image={userInfo?.avatarWeb} />
                                        </div>

                                        <div className='flex-grow-1'>
                                            <p className='fw-bold fs-5 mb-3 ms-5'>{userInfo?.nombres} {userInfo?.apellidos}</p>

                                            <div className='d-flex'>
                                                <div className='ms-5 '>
                                                    <p className=' text-gray'>Teléfono: {userInfo?.telefono}</p>
                                                    <p className=' text-gray'>Correo: {userInfo?.correo}</p>
                                                    <p className=' text-gray'>Fecha de nacimiento: {userInfo?.fechaNacimiento}</p>
                                                </div>
                                                <div className='mx-5'>
                                                    <p className=' text-gray'>Total de importaciones: {userInfo?.importaciones?.length}</p>
                                                    <p className=' text-gray'>Ubicación: {userInfo?.ciudad}</p>
                                                    <p className=' text-gray'>No. de ID: {userInfo?.noId}</p>
                                                </div>
                                                <div className='ms-auto'>
                                                    <p>Documentos</p>
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
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col-4'>
                            <div className='card card-blue'>
                                <div className='card-body'>
                                    <img src='/images/help-card.svg' className='d-block mx-auto my-3'  alt='Necesitas ayuda'/>
                                    <h5 className='text-center mt-5'>¿NECESITAS AYUDA?</h5>
                                    <p  className='text-center'>Estamos aquí para ayudarte</p>

                                    <button type="button" className="btn btn-warning d-block mx-auto my-3">Contáctanos</button>

                                </div>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='ads'></div>
                        </div>
                    </div>

                </div>

            </main>
        </PrivatePage>
    )
}

export default ProfilePage